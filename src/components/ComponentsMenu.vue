<template>
	<aside class="fixed p-5 top-0 left-0 h-full w-48">
		<box>
			<ul class="flex flex-col">
				<li v-for="navItem in nav" :key="navItem.title">
					<span class="transition inline-block px-2 py-1 mb-2 rounded-lg text-sm font-bold text-gray-500 cursor-pointer hover:text-gray-800 hover:bg-gray-200">{{ navItem.title }}</span>
				</li>
			</ul>
		</box>
	</aside>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';

const $menu = useMenuStore();
const nav = $ref($menu.usedNav);

</script>
<style lang="">
	
</style>