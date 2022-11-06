<template>
<div>
<h1>Notas</h1>

<router-link to="/editar"><button>Criar nota</button></router-link>

<div v-for="nota in notas" :key="nota.id">
  <router-link :to="'/nota/' + nota.id"><p> {{ nota.titulo }} </p></router-link>
</div>
</div>
</template>
    
<script>
import api from '@/services/api';
import { onMounted } from '@vue/runtime-core';
import { ref } from "vue";

export default {
  name: 'ListaNotas',
  setup(){
    const notas = ref([]);
    const fetchNotas = () => 
    api
      .get()
      .then((response) => notas.value = response.data)
    
    onMounted(fetchNotas);

    return { notas };
  }
}
</script>

<style>
h1, p{
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>