<template>
	<div class="address-media">
		<button
			type="button"
			@click="setScreen('desktop')"
			class="text-xl"
			:class="{
				'is-active': currentScreen === 'desktop',
			}"
			aria-label="desktop screen button"
		>
			<i class="i-ion-desktop-outline"></i>
		</button>
		<button
			type="button"
			@click="setScreen('tablet')"
			class="text-base"
			:class="{
				'is-active': currentScreen === 'tablet',
			}"
			aria-label="tablet screen button"
		>
			<i class="i-ion-tablet-portrait-outline"></i>
		</button>
		<button
			type="button"
			@click="setScreen('mobile')"
			class="text-sm"
			:class="{
				'is-active': currentScreen === 'mobile',
			}"
			aria-label="mobile screen button"
		>
			<i class="i-ion-phone-portrait-outline"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
import { ScreenType } from '@/types/screen';
const currentScreen = ref<ScreenType>('desktop');

const emit = defineEmits(['screenChange']);
const setScreen = (screen: ScreenType) => {
	currentScreen.value = screen;
	emit('screenChange', screen);
};
</script>

<style scoped lang="scss">
.address-media {
	@apply flex;
	@apply items-center;
	@apply gap-2;

	button {
		@apply inline-flex;
		@apply cursor-pointer;
		@apply hover:text-blue-500;
		@apply transition;

		&.is-active {
			@apply text-blue-500;
		}
	}

	i {
		@apply inline-block;
	}
}
</style>
