import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useIncrementStore = defineStore('increment', () => {
    const count = ref(0)

    function increment() {
        count.value++
      }
    
      
    return { count, increment }
    
})