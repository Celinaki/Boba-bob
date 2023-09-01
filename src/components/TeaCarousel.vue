<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'
import Blacksugar from "../assets/blacksugar.svg"
import Watermelon from "../assets/watermelon.svg"
import Taro from "../assets/taro.svg"
import Honey from "../assets/hon.svg"
import Vanilla from "../assets/vanilla.svg"
import Matcha from "../assets/matcha.svg"
import Mango from "../assets/mango.svg"
import Espresso from "../assets/espresso.svg"




const store = useIncrementStore()
onMounted(() => {
    
})

const teaArray = [
    {
        id:0,
        title:"Blacksugar",
         teaImg:Blacksugar
    },
    {
        id:1,
        title:"Watermelon",
        teaImg:Watermelon
    },
    {
        id:2,
        title:"Taro",
        teaImg:Taro
    },
    {       
        id:3,
        title:"Honeydew",
        teaImg:Honey
    },
    {
        id:4,
        title: "Matcha",
        teaImg:Matcha
    },
    {
        id:5,
        title:"Mango",
        teaImg:Mango
    },
    {
        id:6,
        title:"Vanilla",
        teaImg:Vanilla
    },
    {
        id:7,
        title:"Espresso",
        teaImg:Espresso
    },
    

]


</script>

<template>
    
<!-- <button @click="()=>store.increment()">Count {{store.count}}</button> -->
<section >
<span v-for="bubbleTea in teaArray" :key="bubbleTea.id">
    <img :src="bubbleTea.teaImg" alt="">
    <h3> {{ bubbleTea.title }} </h3>
</span>
</section>

</template>

<style scoped>

section{

    display: flex;
    margin: 2rem 0rem;
    /* gap: 1rem; */
    overflow: scroll;
    overflow-x: scroll;
    white-space: nowrap;
    /* flex-wrap: wrap; */
    background-color:  #FFF7E1;
    /* box-shadow: 9px 8px 9px 1px rgba(0, 0, 0, 0.055); */
    /* box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1), 0px 5px 4px 0px rgba(0, 0, 0, 0.08); */

}

img{
    width: 80px;
    height: 90px;
}
span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2.3rem;
    border-radius: 6px;
    min-width: 27vw;
    background-color:  #fcf6e5;
}
h3{
    font-family: 'Inter';
    font-weight: bold;
    color: #534A4A;
    font-size: 14px;
}
</style>