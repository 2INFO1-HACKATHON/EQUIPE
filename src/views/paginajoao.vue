<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
    <div class="main">
        <div>
            <img src="https://avatars.githubusercontent.com/u/131266400?s=400&u=4ed941e66416569574c2f43a4506a784a2a13633&v=4" alt="joaofoto" style="height: 22vh; width: 10vw; border-radius: 50%;">


            <h1>Github:</h1>
            <a href="https://github.com/joaoguilherme222">João Guilherme</a>
            <h1> <a href="www.linkedin.com/in/joaomartinslino">LinkedIn</a></h1>
            <h1>Tecnologias:</h1>


           


            <div class="logocss">
                <img src="../assets/fotohmtl5.svg" alt="">
                 <img src="../assets/fotojs.svg" alt="">
                 <img src="../assets/fotovue.svg" alt="">
                <img src="../assets/fotocss3.svg" alt="">
                


            </div>


        </div>


    </div>


</template>


<style scoped>
.main {
    width: 100%;
    display: flex;
    justify-content: center;


}
 

div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 5vh;
    flex-direction: column
}


div a {
    font-size: 5vh;




}
.logocss{
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
}
img {
    height: 40px;
    width: 40px;
    display: flex;
}
</style>


