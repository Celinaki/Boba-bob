import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Array<{ id: number;
    title?: string;
    price?: number;
    bobaImg?: string;
    amount: number;
    addExtraBoba: boolean;
    addExtraJelly: boolean;}>>([])

  const addToCart = (boba:{
    id: number;
    title?: string;
    price?: number;
    bobaImg?: string;
    amount: number;
    addExtraBoba: boolean;
    addExtraJelly: boolean;
  }) => {
    items.value.push(boba)
  }

  return { items, addToCart }
})