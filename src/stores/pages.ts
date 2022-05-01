import { acceptHMRUpdate, defineStore } from 'pinia';
import { IPage } from '@/@types/page';

export const usePageStore = defineStore('pages', () => {
	const pages = ref<IPage[]>([
		{
			name: 'index.html',
			components: ['Home'],
		},
		{
			name: 'about.html',
			components: ['Home'],
		},
		{
			name: 'detail.html',
			components: ['Home'],
		}
	]);
	const getPages = computed(() => pages.value);

	function addPage(newPages: IPage) {
		pages.value.push(newPages)
	}

	return {
		pages,
		getPages,
		addPage
	};
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
