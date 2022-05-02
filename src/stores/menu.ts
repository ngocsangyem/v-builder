import { acceptHMRUpdate, defineStore } from 'pinia';
import { IComponentsMenu } from '@/@types/menu';
import { CardsComponent, NavigationComponent } from '../__mocks__/components';

export const useMenuStore = defineStore('menu', () => {
	const menuNav = ref<IComponentsMenu[]>([
		{
			title: 'App',
			count: 0,
			children: [
				{
					title: 'Card',
					count: 10,
					type: 'card',
					components: CardsComponent
				},
				{
					title: 'Navigation',
					count: 10,
					type: 'card',
					components: NavigationComponent
				}
			]
		},
		{
			title: 'Blog',
			count: 0,
			children: [
				// {
				// 	title: 'Navigation',
				// 	count: 10,
				// 	type: 'card',
				// 	components: NavigationComponent
				// }
			]
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
			children: [{
				title: 'Navigation',
				count: 10,
				type: 'card',
				components: NavigationComponent
			}]
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
	const getMenu = computed(() => menuNav.value);

	return {
		menuNav,
		getMenu,
	};
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
