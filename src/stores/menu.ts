import { acceptHMRUpdate, defineStore } from 'pinia';
import { IComponentsMenu } from '@/@types/menu';

export const useMenuStore = defineStore('menu', () => {
	const menuNav = ref<IComponentsMenu[]>([
		{
			title: 'App',
			count: 0,
			children: []
		},
		{
			title: 'Blog',
			count: 0,
			children: []
		},
		{
			title: 'Content and layout',
			count: 0,
			children: []
		},
		{
			title: 'Controls',
			count: 0,
			children: []
		},
		{
			title: 'Data display',
			count: 0,
			children: []
		},
		{
			title: 'Decorative background',
			count: 0,
			children: []
		},
		{
			title: 'Ecommerce',
			count: 0,
			children: []
		},
		{
			title: 'Effects',
			count: 0,
			children: []
		},
		{
			title: 'Feedback',
			count: 0,
			children: []
		},
		{
			title: 'Forms',
			count: 0,
			children: []
		},
		{
			title: 'Navigation',
			count: 0,
			children: []
		},
		{
			title: 'Overlays',
			count: 0,
			children: []
		},
		{
			title: 'Plugins',
			count: 0,
			children: []
		},
		{
			title: 'Typography',
			count: 0,
			children: []
		},
	]);
	const usedNav = computed(() => menuNav.value);

	return {
		menuNav,
		usedNav,
	};
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
