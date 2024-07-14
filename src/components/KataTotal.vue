<template>
    <div class="inset-1/2 absolute text-5xl">
        <div>{{ totalCost }}£</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useCheckoutStore } from '../stores/checkout'
import { storeToRefs } from 'pinia'

const checkoutStore = useCheckoutStore()

const { getTotalCost } = storeToRefs(checkoutStore)
const totalCost = computed(() => getTotalCost.value)
</script>
