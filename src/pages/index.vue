<script setup lang="ts">
  import { useAppStore } from '@/stores/app';

  const $useApp = useAppStore();
</script>

<template>
  <div class="flex gap-4">
    <!-- <div class="backdrop z-30 fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50" v-if="$useApp.getBackdrop"></div> -->
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
