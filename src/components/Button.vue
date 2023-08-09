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



</script>

<template>
    
<!-- <button @click="()=>store.increment()">Count {{store.count}}</button> -->
<span>


<img :src="Blacksugar" alt="">
<img :src="Watermelon" alt="">
<img :src="Taro" alt="">
<img :src="Honey" alt="">
<img :src="Vanilla" alt="">
<img :src="Matcha" alt="">
<img :src="Mango" alt="">
<img :src="Espresso" alt="">
</span>

</template>

<style scoped>
button{
    font-weight:bold;
}
span{
    display: flex;
    padding: 2rem;
    gap: 1rem;
    overflow: scroll;
    /* flex-wrap: wrap; */
    background-color:  #FFF7E1;
    box-shadow: 9px 8px 9px 1px rgba(0, 0, 0, 0.055);
}
img{
    width: 90px;
    height: 90px;
}
</style>