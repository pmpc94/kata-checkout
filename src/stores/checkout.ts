import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', () => {
  const totalPrice = ref(0.0)

  return { totalPrice }
})
