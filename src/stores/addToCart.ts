import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const addToCart = (boba) => {
    items.value.push(boba)
  }

  return { items }
})