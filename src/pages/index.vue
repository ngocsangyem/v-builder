<script setup lang="ts">

</script>

<template>
  <div class="flex gap-4">
    <components-menu></components-menu>
    <browser-view></browser-view>
  </div>
</template>

<style lang="scss">
  body {
    @apply bg-gray-100;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
