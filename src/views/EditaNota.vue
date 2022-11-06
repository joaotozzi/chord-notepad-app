<template>
    <div class="p-3">
        <div  class="mb-3">
        <router-link to="/">Voltar</router-link>
        </div>

        <form>
        <div class="mb-3">
        <label for="titulo" class="form-label">Titulo:</label>
        <input type="text" id="titulo" name="titulo" v-model="nota.titulo" class="form-control">
        </div>

        <div class="mb-3">
        <label for="compositor" class="form-label">Compositor:</label>
        <input type="text" id="compositor" name="compositor" v-model="nota.compositor" class="form-control">
        </div>
        
        <div class="mb-3">
        <label for="tom" class="form-label">Tom Original:</label>
        <select v-model="nota.tomOriginal" name="tom" class="form-control">
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

        <div class="mb-3">
        <div id="ajuda" class="form-text mb-1">Linhas com acordes só podem conter cifras e "|". Linhas de texto devem terminar com ":"</div>
        <textarea id="conteudo" name="conteudo" rows="20" cols="50" v-model="nota.conteudo" class="form-control"></textarea>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-center">
        <div>
        <router-link to="/" @click="salvar()"><button class="btn btn-primary">Salvar nota</button></router-link>
        </div>
        </div>
        </form>

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