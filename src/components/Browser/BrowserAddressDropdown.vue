<template>
	<div class="address-dropdown">
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
		<div class="dropdown-menu shadow-md" v-if="openDropdown">
			<div class="page-list max-h-72 overflow-y-auto">
				<browser-address-dropdown-item
					v-for="(page, index) in usePages$.getPages"
					:key="page.id"
					:page="page"
					:index="index"
					@duplicate="duplicatePage(page.id)"
					@remove="removePage(page.id)"
					@click-label="setDropdownLabel(page.name)"
					@save="onEditPageName"
					@enter="onEditPageName"
				></browser-address-dropdown-item>
			</div>
			<field-save
				placeholder="Enter page name"
				v-if="isAddMorePage"
				@enter="createPage"
				@save="createPage"
			></field-save>
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
import { v4 as uuidv4 } from 'uuid';
import { useAppStore } from '@/stores/app';
import { usePageStore } from '@/stores/pages';
import { IPage } from '@/@types/page';

const $useApp = useAppStore();
const usePages$ = usePageStore();
const { removePage, editPageName, duplicatePage, addPage } = usePages$;
const openDropdown = ref(false);
const dropdownLabel = ref('index.html');
const isAddMorePage = ref(false);
const pageInput = ref<HTMLInputElement>();

const toggleDropdown = () => {
	openDropdown.value = !openDropdown.value;
	isAddMorePage.value = false;
	$useApp.setBackdrop(openDropdown.value);
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
		id: uuidv4(),
		name: `${pageName}.html`,
		components: [],
	};
	addPage(newPage);
	(pageInput.value as HTMLInputElement).value = '';
};
const onEditPageName = ({ value, page }: { value: string; page: IPage }) => {
	if (!value) return;
	editPageName(page.id, value);
};
</script>

<style scoped lang="scss">
.address-dropdown {
	@apply w-40%;
	@apply max-400;
	@apply h-8;
	@apply text-center;
	@apply relative;

	i {
		@apply inline-block;
	}

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
}
</style>
