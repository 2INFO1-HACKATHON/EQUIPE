import { createRouter, createWebHistory } from 'vue-router'
import equipe from '../views/equipe.vue'
import paginalucas from '../views/paginalucas.vue'
import paginaana from '../views/paginaana.vue'
import paginacaetano from '../views/paginacaetano.vue'
import paginajoao from '../views/paginajoao.vue'
import paginaelisa from '../views/paginaelisa.vue'
import paginavitor from '../views/paginavitor.vue'


const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
  
  
   {
     path: '/paginalucas',
     name: 'paginalucas',
     component: paginalucas
   },
   {
     path: '/paginaana',
     name: 'paginaana',
     component: paginaana
   },
   {
     path: '/paginacaetano',
     name: 'paginacaetano',
     component: paginacaetano
   },
   {
     path: '/paginajoao',
     name: 'paginajoao',
     component: paginajoao
   },
   {
     path: '/paginaelisa',
     name: 'paginaelisa',
     component: paginaelisa
   },
   {
     path: '/paginavitor',
     name: 'paginavitor',
     component: paginavitor
   },
   {
     path: '/',
     name: 'equipe',
     component: equipe
   }
 ]
})


export default router
