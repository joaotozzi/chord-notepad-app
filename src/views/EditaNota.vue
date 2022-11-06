<template>
    <div>
        <router-link to="/">Voltar</router-link>
        
        <label for="titulo">Titulo:</label>
        <input type="text" id="titulo" name="titulo" v-model="nota.titulo">

        <label for="compositor">Compositor:</label>
        <input type="text" id="compositor" name="compositor" v-model="nota.compositor">

        <select v-model="nota.tomOriginal">
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

        <textarea id="conteudo" name="conteudo" rows="20" cols="50" v-model="nota.conteudo"></textarea>

        <router-link to="/" @click="salvar()"><button>Salvar</button></router-link>

    </div>
</template>

<script>
import { useRoute } from "vue-router";
import api from '@/services/api';
import { ref } from "vue";
import { onMounted } from '@vue/runtime-core';

export default {
    name: "EditaNota",
    setup(){
        const route = useRoute();
        const id = route.params.id;
        const nota = ref([]);

        const salvar = () => {
            if(id){
                api
                .put(id, {
                    titulo: nota.value.titulo,
                    compositor: nota.value.compositor,
                    tomOriginal: nota.value.tomOriginal,
                    conteudo: nota.value.conteudo
                })
            }else{
                api
                .post(id, {
                    titulo: nota.value.titulo,
                    compositor: nota.value.compositor,
                    tomOriginal: nota.value.tomOriginal,
                    conteudo: nota.value.conteudo
                })
            }
        }
        
        
        const fetchNota = () => {
            if(id){
                api
                .get(id)
                .then((response) => {
                    nota.value = response.data;
                })
            }
        }
        
        onMounted(fetchNota);

        return { 
            nota,
            salvar

        };
    }
}
</script>

<style>

</style>