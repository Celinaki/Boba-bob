<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'
import Bubbles from "../assets/bubbles.svg"
import Lines from "../assets/lines.svg"


const store = useIncrementStore()
onMounted(() => {
    
})



</script>

<template>
    <nav class="nav-container">
<div>
    <h1>BOBA BOB</h1>
    <img :src="Lines" alt="Decoration lines" class="lines">
</div>
<img :src= "Bubbles" alt="Purple pink bubbles" class="bubbles">
    </nav>
    


</template>

<style scoped  lang="scss">
    
.nav-container{
padding: 2rem 1.5rem;
display: flex;
justify-content: space-between;
h1{
    font-weight: 1000; 
  font-style: italic;
  color: #B454FF;
  margin: 0;
  font-size: 32px;
}
.lines{
    margin-top: .5rem;
}
.bubbles{
margin-top: 1.3rem;
}


}


</style>