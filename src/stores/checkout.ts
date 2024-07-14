import { PRICES } from '@/consts'
import { calculateSpecialPrice } from '@/helper'
import type { ItemType } from '@/types'
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    items: [
        { name: "A", price: PRICES.ITEM_A, quantity: 0, subTotal: PRICES.ITEM_A },
        { name: "B", price: PRICES.ITEM_B, quantity: 0, subTotal: PRICES.ITEM_B },
        { name: "C", price: PRICES.ITEM_C, quantity: 0, subTotal: PRICES.ITEM_C },
        { name: "D", price: PRICES.ITEM_D, quantity: 0, subTotal: PRICES.ITEM_D },
        { name: "E", price: PRICES.ITEM_E, quantity: 0, subTotal: PRICES.ITEM_E }
      ]
  }),
  getters: {
    getItems(state) {
      return state.items
    },
    getTotalCost(state) {
      return state.items.reduce((acc, item) => acc + item.subTotal, 0)
    }
  },
  actions: {
    decrement(item: ItemType) {
      if (item.quantity > 0) {
        item.quantity--
        item.total = calculateSpecialPrice(item)
      }
    },
    increment(item: ItemType) {
      item.quantity++
      item.total = calculateSpecialPrice(item)
    }
  }
})
