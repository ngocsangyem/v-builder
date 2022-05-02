<template>
	<li :key="menu.title" class="inline-block px-4">
		<span
			class="inline-block transition px-2 py-1 mb-2 rounded-lg text-sm font-bold text-gray-500 cursor-pointer"
			>{{ menu.title }}</span
		>
		<div class="sub-menu absolute top-0 left-full">
			<box
				class="sub-menu-inner bg-white overflow-y-auto mx-2"
				v-if="menu.children.length > 0"
			>
				<components-menu-sub-item
					v-for="subNavItem in menu.children"
					:key="subNavItem.title"
					:menu="subNavItem"
				></components-menu-sub-item>
			</box>
		</div>
	</li>
</template>

<script setup lang="ts">
import { IComponentsMenu } from '@/types/menu';

interface Props {
	menu: IComponentsMenu;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.sub-menu {
	width: 520px;
	transform: translateX(-50px);
	@apply opacity-0;
	@apply invisible;
	@apply transition;
}
.sub-menu-inner {
	height: calc(100vh - 5rem);
}
</style>
