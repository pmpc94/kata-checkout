<template>
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead class="bg-purple-500 text-white">
                <tr>
                    <th class="py-3 px-6 text-left">Item Name</th>
                    <th class="py-3 px-6 text-left">Item Price</th>
                    <th class="py-3 px-6 text-left">Quantity</th>
                    <th class="py-3 px-6 text-left">Total</th>
                </tr>
            </thead>
            <tbody v-for="item in items" :key="item.name">
                <tr class="border-b border-gray-200">
                    <td class="py-4 px-6">{{ item.name }}</td>
                    <td class="py-4 px-6">£{{ item.price }}</td>
                    <td class="py-4 px-6 flex items-center space-x-3">
                        <button class="bg-red-400 text-white px-2 py-1 rounded" @click="decrementItemQuantity(item)">-</button>
                        <span>{{ item.quantity }}</span>
                        <button class="bg-green-400 text-white px-2 py-1 rounded" @click="incrementItemQuantity(item)">+</button>
                    </td>
                    <td class="py-4 px-6">£{{ item.price }}</td>
                </tr>
            </tbody>
        </table>
</template>

<script setup lang="ts">
import { ItemType } from '../types'
import { useCheckoutStore } from '../stores/checkout'
const checkoutStore = useCheckoutStore()
const { decrement, increment } = checkoutStore

defineProps<{
  items: ItemType[]
}>()

const decrementItemQuantity = (item: ItemType) => {
    decrement(item)
}

const incrementItemQuantity = (item: ItemType) => {
    increment(item)
}

</script>
