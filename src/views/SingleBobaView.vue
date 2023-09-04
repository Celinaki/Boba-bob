


<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useGetAllBobasStore } from '../stores/getallbobas'
import { useRoute } from 'vue-router'
import AddToCart from '@/components/AddToCart.vue';
const route = useRoute()
const store = useGetAllBobasStore()

onMounted(() => {
})
    const bobaId = Number(route.params.bubbleTeaId)
    const bobaArray = store.teaArray;
    const chosenBoba = bobaArray.find((bobaTea) => bobaTea.id === bobaId)
    const thisBoba = {
        id: bobaId,
        title: chosenBoba?.title,
        price: chosenBoba?.price,
        bobaImg:chosenBoba?.teaImg,
        amount: 0,
    }
</script>

<template>
    <div v-if="chosenBoba" class="page-container">
        <article class="img-holder">
            <span class="image-background"></span>
         <img :src=chosenBoba.teaImg :alt="`Image of the drink ${chosenBoba.title}`">
        </article>
        <h1>{{ chosenBoba.title }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste aperiam vitae officiis iusto excepturi sint pariatur velit eos placeat.</p>
        <h2>{{ chosenBoba.price }} SEK</h2>
        
    </div>
    <AddToCart message="Add" :bobaType="thisBoba" />
</template>

<style scoped lang="scss">
.page-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 49px 1.5rem;
 .img-holder{
    background-color: rgb(220, 183, 250);
    border-radius: 50%;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    z-index: 1;
    position: relative;
    margin-top: 2rem;
        .image-background{
        width: 230px;
        height: 220px;
        background-color: rgb(202, 152, 243);
        z-index: -10;
        border-radius: 50%;
        transform: translateY(0px);
        position: absolute;
        bottom: 0;
        }
        img{
            height: 100%;
            transform: translateY(-20%) rotate(-13deg);
            position: absolute;
        }
    }  
    h1,h2{
        font-size: 28px;
        align-self: flex-start;
        margin: 2.5rem 0rem 1rem 0rem;
        color: #292929;
        font-weight: 900;
        font-style: italic;
    } 
}


</style>
