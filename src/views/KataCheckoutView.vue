<template>
  <main class="m-4">
    <KataTable :items="items"/>
        <KataTotal />
  </main>
</template>
    
<script setup lang="ts">
import { computed } from "vue"
import { useCheckoutStore } from '../stores/checkout'
import KataTable from '../components/KataTable.vue'
import KataTotal from '../components/KataTotal.vue'
import { storeToRefs } from 'pinia'

const checkoutStore = useCheckoutStore()

const { getItems } = storeToRefs(checkoutStore)
const items = computed(() => getItems.value)

</script>
