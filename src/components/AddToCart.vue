<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useCartStore } from '../stores/addToCart'


const store = useCartStore()
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
        price +=5* bobaAmount.value;
    }
    if(addJelly.value === true){
        price +=5* bobaAmount.value;
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

let added = ref(false)


</script>

<template >
    <div>
        <section v-if="!added">
            <h1 v-on:click="decreaseAmount">-</h1>
            <h1>{{ bobaAmount }}</h1>
            <h1 v-on:click="increaseAmount">+</h1>
        </section>

        <button 
        v-if="!added"
        @click="(()=> added = true)">Add to cart {{ totalPrice }} SEK</button>
        <button 
       
        :class="added ? 'expanded' : 'animated-button'"
        :style="{  transition:'850ms' }"
        @click="(()=> added = true)">Proceed to checkout {{ totalPrice }} SEK</button>
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
    .animated-button{
        width: 200px;
        position: absolute;
        top:.2rem;
        bottom: 1rem;
        left: 1rem;
        transition: display 850ms ease;
        pointer-events: none;
        overflow: hidden;
        visibility: hidden;
        
    }
    .expanded{        
        pointer-events: all;
        transition: display 850ms ease;
        display: flex;
        width: 100%;
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