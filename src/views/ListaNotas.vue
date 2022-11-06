<template>
<div class="p-3">
<h1 class="text-center">Chord Notepad</h1>

<div class="d-grid gap-2 d-md-flex justify-content-center pt-3">
<div>  
<router-link to="/editar"><button class="btn btn-primary">Criar nota</button></router-link>
</div>
</div>

<div class="d-flex justify-content-center mt-3">
<div class="d-flex flex-column"> 
<br/>  
<div v-for="nota in notas" :key="nota.id">
  <router-link :to="'/nota/' + nota.id" class="text-decoration-none">
  <p class="m-0 fw-bold linhas"> {{ nota.titulo }} </p>
  <p class="m-0 fst-italic linhas"> {{ nota.compositor }} </p>
  </router-link>
  <br/>
</div>
</div>
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
.linhas {
  color: black;
}
</style>