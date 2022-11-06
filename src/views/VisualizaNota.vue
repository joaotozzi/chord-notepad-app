<template>
    <div>
        <router-link to="/">Voltar</router-link>
        <h1 id="titulo"> {{ nota.titulo }} </h1>
        <p id="compositor"> {{ nota.compositor }}</p>
        <select v-model="nota.tom" @change="alteraTom(nota.tom)">
            <option value="C">C</option>
            <option value="Db">Db</option>
            <option value="D">D</option>
            <option value="Eb">Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Gb">F#</option>
            <option value="G">G</option>
            <option value="Ab">Ab</option>
            <option value="A">A</option>
            <option value="Bb">Bb</option>
            <option value="B">B</option>
        </select>
        <router-link :to="'/editar/' + nota.id"><button>Editar</button></router-link>

        <p id="conteudo" v-for="(linha, index) in nota.conteudo" :key="index"> {{ linha }} </p>
    </div>
</template>

<script>
import api from '@/services/api';
import { onMounted } from '@vue/runtime-core';
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
    name: 'VisualizaNota',
    setup(){
        const route = useRoute();
        const id = route.params.id;
        
        const nota = ref([]);
        const fetchNota = () => 
        api
        .get(id)
        .then((response) => {
            nota.value = response.data;
            nota.value.conteudo = nota.value.conteudo.split("\n");
            nota.value.tom = nota.value.tomOriginal;
        })
        
        onMounted(fetchNota);

        const alteraTom = (tomAlvo) => {
          api
            .get(id+"?tom=" + tomAlvo)
            .then((response) => {
                nota.value = response.data;
                nota.value.conteudo = nota.value.conteudo.split("\n");
                nota.value.tom = tomAlvo;
            })  
        }


        return { 
            nota, 
            alteraTom
        };
    }
}
</script>

<style>
#conteudo {
    text-align: left;
    font-size: 20px;
}

#titulo{
    margin-bottom: 0;
}

#compositor{
    margin-top: 0;
}

</style>