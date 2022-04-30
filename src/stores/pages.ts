import { acceptHMRUpdate, defineStore } from 'pinia';
import { IPage } from '@/@types/page';

export const usePageStore = defineStore('pages', () => {
	const pages = ref<IPage[]>([
		{
			name: 'Home',
			components: ['Home'],
		}
	]);
	const usedPages = computed(() => pages.value);

	function addPages(newPages: IPage) {
		pages.value.push(newPages)
	}

	return {
		pages,
		usedPages,
		addPages
	};
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
