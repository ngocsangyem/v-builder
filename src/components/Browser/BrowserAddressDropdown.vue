<template>
	<div class="address-dropdown">
		<div class="backdrop fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
		<button
			type="button"
			aria-label="open dropdown button"
			class="trigger-dropdown"
			@click="toggleDropdown"
		>
			<span>{{ dropdownLabel }}</span>
			<i
				class="dropdown-btn-icon"
				:class="{
					'i-ion-caret-down-outline': !openDropdown,
					'i-ion-caret-up-outline': openDropdown,
				}"
			></i>
		</button>
		<div class="dropdown-menu">
			<div class="page-list max-h-72 overflow-y-auto">
				<div class="page-item" v-for="page in pageList" :key="page.name" >
					<span @click="setDropdownLabel(page.name)">
					{{ page.name }}
				</span>
				</div>
			</div>
			<div class="add-page-control">
				<input ref="pageInput" type="text" placeholder="Enter page name" class="bg-transparent focus:outline-none w-full pr-2 mr-2" v-on:keyup.enter="createPage">
				<button type="button" class="text-blue-400" @click="createPage">Save</button>
			</div>
			<footer>
				<button class="btn-action" type="button" @click="addMorePage">
					<template v-if="!isAddMorePage">
						<i class="i-ion-add-outline inline-block mr-1"></i>
						<span>Add a page</span>
					</template>

					<template v-else>
						<span>Cancel</span>
					</template>
				</button>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pages';
import { IPage } from '@/@types/page';

const usePages$ = usePageStore();
const pageList = $ref(usePages$.getPages)
const openDropdown = ref(false);
const dropdownLabel = ref('index.html');
const isAddMorePage = ref(false);
const pageInput = ref<HTMLInputElement>()

const toggleDropdown = () => {
	openDropdown.value = !openDropdown.value;
};
const setDropdownLabel = (label: string) => {
	dropdownLabel.value = label;
};
const addMorePage = () => {
	isAddMorePage.value = !isAddMorePage.value;
};
const createPage = () => {
	const pageName = pageInput.value?.value;
	if (!pageName) return;
	const newPage: IPage = {
		name: `${pageName}.html`,
		components: []
	}
	usePages$.addPage(newPage);
	(pageInput.value as HTMLInputElement).value = '';
}
</script>

<style scoped lang="scss">
.address-dropdown {
	@apply w-40%;
	@apply max-400;
	@apply h-8;
	@apply text-center;
	@apply relative;

	.trigger-dropdown {
		@apply text-sm;
		@apply flex;
		@apply items-center;
		@apply h-full;
		@apply justify-center;
		@apply w-full;
		@apply cursor-pointer;
		@apply relative;
		@apply px-3;
		@apply bg-white;
		@apply rounded;
	}

	.dropdown-btn-icon {
		@apply absolute;
		@apply m-auto;
		@apply right-3;
	}

	.dropdown-menu {
		@apply absolute;
		@apply top-full;
		@apply left-0;
		@apply rounded;
		@apply mt-2;
		@apply bg-white;
		@apply w-full;
	}

	.btn-action {
		@apply w-full;
		@apply p-2;
		@apply text-base;
		@apply flex;
		@apply justify-center;
		@apply items-center;
	}

	.add-page-control {
		@apply bg-gray-200;
		@apply py-2 px-4;
		@apply text-left;
		@apply flex items-center;
	}
}

.page-list {
	span {
		@apply block;
		@apply py-2 px-4;
		@apply text-left;
		@apply border-b border-solid border-gray-100;
		@apply cursor-pointer;
	}
}
</style>
