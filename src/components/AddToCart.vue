<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import { useIncrementStore } from '../stores/increment'


const store = useIncrementStore()
onMounted(() => {
    boba.amount
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
        bobaImg?: string,
        amount: number,
    }
}>()
const boba = props.bobaType;
let bobaAmount = ref<number>(boba.amount)

function decreaseAmount() {
    if (boba.amount <= 0) {
        return
    } else {
        boba.amount--
        bobaAmount.value--
        console.log(boba.amount)
    }


}
function increaseAmount() {
    boba.amount++
    bobaAmount.value++

    console.log(boba.amount)
}

</script>

<template >
    <div>
        <h1 v-on:click="decreaseAmount">-</h1>

        <h1>{{ bobaAmount }}</h1>
        <h1 v-on:click="increaseAmount">+</h1>



    </div>
</template>

<style scoped>
div {
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

h1 {
    color: #B454FF;
    font-size: 22px;
    font-style: italic;
    font-weight: 900;
    padding: 1rem;
    text-shadow: 3px 2px 0px white;

}
</style>