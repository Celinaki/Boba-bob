<template>
    <div>
        <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    <h1>hej</h1>
    </div>

    
    </template>
<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'

const store = useIncrementStore()
onMounted(() => {
    
})


defineProps<{
  bobaId:Number;
}>()

</script>



<style scoped>


</style>