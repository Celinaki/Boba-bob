<script setup lang="ts">
import { onMounted, ref, } from 'vue'

onMounted(() => {
    
})
defineProps<{
  message: string
}>()
</script>


<template>
    <div>
<h2>
{{message}}
</h2>
<span></span>
    </div>


</template>

<style scoped lang="scss">

    h2{
        margin: 0;
        font-size: 22px;
        color:  #B454FF;
        font-weight: 1000; 
        font-style: italic;
    }
    span{
        width: 84px;
        height: 4px;
        background-color:  #B454FF;
        margin-top: 12px;
        display: inherit;
    }

</style>