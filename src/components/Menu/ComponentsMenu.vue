<template>
	<aside class="h-full w-48 relative z-20">
		<box class="relative px-0">
			<ul class="main-menu flex flex-col">
				<components-menu-item
					v-for="navItem in nav"
					:key="navItem.title"
					:menu="navItem"
				></components-menu-item>
			</ul>
		</box>
	</aside>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';

const $menu = useMenuStore();
const nav = $ref($menu.getMenu);
</script>
<style lang="scss">
.main-menu {
	> li {
		&:hover {
			> span {
				@apply text-gray-800;
				@apply bg-gray-200;
			}

			.sub-menu {
				transform: translateX(0);
				@apply opacity-100;
				@apply visible;
			}
		}
	}
}
</style>
