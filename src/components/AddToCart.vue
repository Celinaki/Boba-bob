<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
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
        addExtraBoba:boolean,
        addExtraJelly:boolean,
    }
}>()
const boba = props.bobaType;
let bobaAmount = ref<number>(boba.amount)
let bobaPrice = ref<number>(boba.price!)
let addBoba = ref<boolean>(boba.addExtraBoba)
let addJelly = ref<boolean>(boba.addExtraJelly)



const totalPrice = computed(() => {
    let price = bobaPrice.value * bobaAmount.value;
    if(addBoba.value === true){
        price +=5;
    }
    if(addJelly.value === true){
        price +=5;
    }
    return price
    }
 )

function decreaseAmount() {
    if (boba.amount <= 1) {
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
        <section>
            <h1 v-on:click="decreaseAmount">-</h1>
            <h1>{{ bobaAmount }}</h1>
            <h1 v-on:click="increaseAmount">+</h1>
        </section>
        <button>Add to cart {{ totalPrice }} SEK</button>
    </div>
</template>

<style scoped lang="scss">
div {
    background-color: #DAABFF;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 17px 17px 0px 0px;
    button{
        border: none;
        border-radius: 8px;
        margin: 1rem;
        padding: .7rem 1rem;
        box-shadow: 3px 2px 0px #742daa;
        font-size: 16px;
        font-weight: bold;
    }
    section {
    display: flex;
        h1 {
        color: #742daa;
        font-size: 24px;
        /* font-style: italic; */
        font-weight: 900;
        padding: 1rem;
        text-shadow: 3px 2px 0px white;
    

        }
    }
}




</style>