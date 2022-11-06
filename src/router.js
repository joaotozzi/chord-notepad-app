import { createRouter, createWebHistory } from "vue-router"; 

import VisualizaNota from "./views/VisualizaNota.vue";
import ListaNotas from "./views/ListaNotas.vue"
import EditaNota from "./views/EditaNota.vue";

const routes = [
    {
        path: "/",
        name: "lista",
        component: ListaNotas
    },
    {
        path: "/nota/:id",
        name: "nota",
        component: VisualizaNota
    },
    {
        path: "/editar",
        name: "criacao",
        component: EditaNota
    },
    {
        path: "/editar/:id",
        name: "edicao",
        component: EditaNota
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;