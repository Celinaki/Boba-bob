import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Blacksugar from "../assets/blacksugar.svg"
import Watermelon from "../assets/watermelon.svg"
import Taro from "../assets/taro.svg"
import Honey from "../assets/hon.svg"
import Vanilla from "../assets/vanilla.svg"
import Matcha from "../assets/matcha.svg"
import Mango from "../assets/mango.svg"
import Espresso from "../assets/espresso.svg"


export const useGetAllBobasStore = defineStore('getBobas', () => {
    // const count = ref(0)

        const teaArray = [
            {
                id:0,
                title:"Blacksugar",
                teaImg:Blacksugar,
                price:65
            },
            {
                id:1,
                title:"Watermelon",
                teaImg:Watermelon,
                price:65
            },
            {
                id:2,
                title:"Taro",
                teaImg:Taro,
                price:65
            },
            {       
                id:3,
                title:"Honeydew",
                teaImg:Honey,
                price:65
            },
            {
                id:4,
                title: "Matcha",
                teaImg:Matcha,
                price:65
            },
            {
                id:5,
                title:"Mango",
                teaImg:Mango,
                price:65
            },
            {
                id:6,
                title:"Vanilla",
                teaImg:Vanilla,
                price:65
            },
            {
                id:7,
                title:"Espresso",
                teaImg:Espresso,
                price:65
            },
            

        ]

    function getBobas() {
        // count.value++

      }

    return { 
        teaArray,
        getBobas,
     }

})