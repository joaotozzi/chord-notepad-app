<template>
    <div class="p-3">
        <div  class="mb-3">
        <router-link to="/">Voltar</router-link>
        </div>

        <h1 id="titulo" class="text-center mb-0"> {{ nota.titulo }} </h1>
        <p id="compositor" class="text-center mt-0"> {{ nota.compositor }}</p>
        
        <div class="d-flex justify-content-center">
        <label for="tom" class="col-form-label">Tom:</label>
        <div class="mx-2">    
        <select v-model="nota.tom" @change="alteraTom(nota.tom)" name="tom" class="form-control">
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
        </div>
        <div class="d-flex align-items-center mx-2">
        <input type="range" class="form-range" id="fonte" min="10" max="50" step=1 :value="fontSize">
        </div>
        <div class="mx-2">
        <router-link :to="'/editar/' + nota.id"><button class="btn btn-primary">Editar</button></router-link>
        </div>
        </div>

        <div class="d-flex justify-content-center mt-3">
        <div>
        <p v-for="(linha, index) in nota.conteudo" :key="index" class="m-0 p-0 fs-2"> {{ linha }} </p>
        </div>
        </div>
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

</style>