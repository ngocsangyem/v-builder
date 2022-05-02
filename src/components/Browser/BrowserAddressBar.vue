<template>
	<div class="browser-address-bar flex py-3 px-4 justify-between text-gray-900 relative z-10">
		<div class="address-dots">
			<span class="dot bg-red-400"></span>
			<span class="dot bg-amber-400"></span>
			<span class="dot bg-green-400"></span>
		</div>
		<browser-address-dropdown></browser-address-dropdown>
		<browser-address-media @screen-change="screenChange"></browser-address-media>
	</div>
</template>

<script setup lang="ts">
import { ScreenType } from '@/types/screen';

const emit = defineEmits(['screenChange'])
const screenChange = (screen: ScreenType) => {
	emit('screenChange', screen)
};
</script>

<style lang="scss" scoped>
.browser-address-bar {
	background-color: #f8f9fa;
	.dot {
		@apply inline-block;
		@apply w-2;
		@apply h-2;
		@apply rounded-full;
		@apply mr-3;
	}
}
</style>
