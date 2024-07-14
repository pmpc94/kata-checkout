import { NAMES, PRICES } from '@/consts'
import { calculateSpecialPrice } from '@/helper'
import type { ItemType } from '@/types'
import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    items: [
        { name: NAMES.ITEM_A, price: PRICES.ITEM_A, quantity: 0, subTotal: 0 },
        { name: NAMES.ITEM_B, price: PRICES.ITEM_B, quantity: 0, subTotal: 0, specialPromotion: '2 for £1.25' },
        { name: NAMES.ITEM_C, price: PRICES.ITEM_C, quantity: 0, subTotal: 0, specialPromotion: 'Buy 3, get one free' },
        { name: NAMES.ITEM_D, price: PRICES.ITEM_D, quantity: 0, subTotal: 0, specialPromotion: 'Buy D and E for £3' },
        { name: NAMES.ITEM_E, price: PRICES.ITEM_E, quantity: 0, subTotal: 0, specialPromotion: 'Buy D and E for £3' }
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
        item.subTotal = calculateSpecialPrice(item)
      }
    },
    increment(item: ItemType) {
      item.quantity++

      const bundleItems = this.$state.items.filter(item => item.name === NAMES.ITEM_D && item.quantity > 0 || item.name === NAMES.ITEM_E && item.quantity > 0)
      item.subTotal = calculateSpecialPrice(item, bundleItems)
    }
  }
})
