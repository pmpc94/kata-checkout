<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

</script>

<template>
  <TheHeader />
    <RouterView />
  <TheFooter />
</template>
