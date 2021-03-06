import { acceptHMRUpdate, defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { findId } from '../utils/findId';
import { IPage } from '@/@types/page';
import { CardsComponent } from '../__mocks__/components';

export const usePageStore = defineStore('pages', () => {
	const pages = ref<IPage[]>([
		{
			id: '640ba4ad-9777-460d-8cd9-ca74b2ed07ea',
			name: 'index.html',
			components: [
				// CardsComponent[0]
			],
		},
		{
			id: '11ad3e8c-2744-4250-afc6-7f32eefa5a14',
			name: 'about.html',
			components: [],
		},
		{
			id: 'e5a2ba0a-c76c-4b6e-a7ae-0a523480967d',
			name: 'detail.html',
			components: [],
		}
	]);
	const currentPage = ref<IPage>(pages.value[0]);

	const getPages = computed(() => pages.value);
	const getCurrentPage = computed(() => currentPage.value);

	const addPage = (newPages: IPage) => {
		pages.value.push(newPages)
	}

	const removePage = (id: string) => {
		pages.value = pages.value.filter(page => page.id !== id)
	}

	const editPageName = (id: string, newPageName: string) => {
		const page = findId(id, pages.value);
		if (page) {
			page.name = `${newPageName}.html`;
		}
	}

	const duplicatePage = (id: string) => {
		const page = findId(id, pages.value);
		if (!page) return;
		let newPage;
		if (page?.clone_from) {
			const originPage = findId(page.clone_from, pages.value);
			newPage = { 
				...page,
				name: `${originPage?.name}_copy.html`,
				id: uuidv4(),
				clone_from: page.clone_from
			};
		} else {
			newPage = { 
				...page,
				name: `${page.name}_copy.html`,
				id: uuidv4(),
				clone_from: page.id
			};
		}
		pages.value.push(newPage as IPage);
	}

	const setCurrentPage = (id: string) => {
		const page = findId(id, pages.value);

		if (page) {
			currentPage.value = page;
		}
	}

	return {
		pages,
		currentPage,
		getPages,
		addPage,
		removePage,
		editPageName,
		duplicatePage,
		getCurrentPage,
		setCurrentPage
	};
});

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
