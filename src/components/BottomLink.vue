<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import {useIncrementStore } from '../stores/increment'


const store = useIncrementStore()
onMounted(() => {
    
})

defineProps<{
  message: string
}>()


</script>

<template >
    <div>
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
</style>