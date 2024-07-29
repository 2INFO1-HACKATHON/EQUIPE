<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    
 <div>
   <h1>Integrantes</h1>
 
   <router-link to="/paginaana" class="letra">Ana Luiza</router-link>
   <router-link to="/paginacaetano" class="letra">Caetano Pedroso</router-link>
   <router-link to="/paginaelisa" class="letra">Elisa Cecília</router-link>
   <router-link to="/paginajoao" class="letra">João Guilherme</router-link>
   <router-link to="/paginalucas" class="letra">Lucas Bokorni</router-link>
   <router-link to="/paginavitor" class="letra">Vitor Schmidt</router-link>
 </div>

</template>

<style scoped>
div {
 display: flex;
 align-items: center;
 width: 100%;
flex-direction: column
}

.menu-img{
   height: 100px;
   width: 100px;
}

.menu-img img{
   width: 100px;
   height:100px ;
}

.letra{
 font-size: 25px;
 }
</style>
