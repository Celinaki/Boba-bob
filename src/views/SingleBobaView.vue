
<template>
    <div v-if="chosenBoba">
    
        <h1>{{ chosenBoba.title }}</h1>
<img :src=chosenBoba.teaImg alt="">
<h3>{{ chosenBoba.price }}</h3>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useGetAllBobasStore } from '../stores/getallbobas'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useGetAllBobasStore()

onMounted(() => {
})
    const bobaId = Number(route.params.bubbleTeaId)
    const bobaArray = store.teaArray;
    const chosenBoba = bobaArray.find((bobaTea) => bobaTea.id === bobaId)
</script>



<style scoped>


</style>
