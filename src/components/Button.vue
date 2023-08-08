<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'

const store = useIncrementStore()
onMounted(() => {
    
})



</script>

<template>
    
<button @click="()=>store.increment()">Count {{store.count}}</button>

</template>

<style scoped>
button{
    font-weight:bold;
}
</style>