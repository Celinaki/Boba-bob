<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'


const store = useIncrementStore()
onMounted(() => {
    
})

// defineProps<{
//   message: string,
//   bobaType: object
// }>()
const props = defineProps<{
  message: string,
  bobaType: {
    id: number,
        title?: string,
        price?: number,
        bobaImg?:string,
        amount: number,
  }
}>()
const boba = props.bobaType;
function decreaseAmount(){
    if(boba.amount <= 0){
        return
    }else{
      boba.amount--
    console.log(boba.amount)      
    }


}
function increaseAmount(){
    boba.amount++
    console.log(boba.amount)
}

</script>

<template >
    <div>
        <h2 v-on:click="increaseAmount">add</h2>
  
        <h2 v-on:click="decreaseAmount">dec</h2>
        <h1>{{ message }}</h1>
    </div>
    

</template>

<style scoped>
div{
    background-color: #DAABFF;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 17px 17px 0px 0px;
}
h1{
    color: #8F00FF;
    font-size: 22px;
    font-style: italic;
    font-weight: 900;
}
h2{
    padding: 1rem;
}
</style>