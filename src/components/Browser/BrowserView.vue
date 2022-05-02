<template>
	<section
		class="browser-view bg-white rounded-lg w-full overflow-hidden mx-auto"
		:class="{
			'browser-desktop': mediaType === 'desktop',
			'browser-tablet': mediaType === 'tablet',
			'browser-mobile': mediaType === 'mobile',
		}"
	>
		<div class="browser-view-wrapper h-full flex flex-col">
			<browser-address-bar
				@screen-change="onScreenChange"
			></browser-address-bar>
			<browser-content class="flex-grow"></browser-content>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ScreenType } from '@/@types/screen';

const mediaType = ref<ScreenType>('desktop');

const onScreenChange = (screen: ScreenType) => {
	mediaType.value = screen;
};
</script>

<style scoped lang="scss">
.browser-view {
	min-height: calc(100vh - 5rem);
}
.browser-desktop {
	width: 100%;
	max-width: 1366px;
	@media screen and (max-width: 1800px) {
		width: 1025px;
	}
	@media screen and (max-width: 1600px) {
		width: 1093px;
	}
	@media screen and (max-width: 1440px) {
		width: 1093px;
	}
}

.browser-tablet {
	width: 100%;
	max-width: 778px;
}

.browser-mobile {
	width: 100%;
	max-width: 375px;
}
</style>
