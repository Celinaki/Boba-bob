<script setup lang="ts">
import { onMounted, ref, } from 'vue'

onMounted(() => {
    
})
defineProps<{
  message: string,
  linkText: string
}>()
</script>


<template>
    <div>
<h2>
{{message}}
</h2>
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3
     0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3
     32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    </svg> 
 </div>


</template>

<style scoped lang="scss">
div{
    display: flex;
    align-items: center;
}
    h2{
        color: #DAABFF;
font-family: 'Inter';
font-size: 18px;
font-style: italic;
font-weight: 700;
line-height: normal;
    }
    .icon{
        display: inherit;
    }
    span{
        width: 34px;
        height: 4px;
        background-color:  #B454FF;
        margin-top: 12px;
        display: inherit;
    }
    svg{
        fill:#daabff;
        margin-left:1rem ;
    }

</style>