<script setup lang="ts">
</script>

<template>
	<main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
		<div class="flex gap-4">
			<!-- <div class="backdrop z-30 fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50" v-if="$useApp.getBackdrop"></div> -->
			<components-menu></components-menu>
			<browser-view></browser-view>
		</div>
	</main>
</template>

<style lang="scss">
  body {
    @apply bg-gray-100;
  }
</style>
