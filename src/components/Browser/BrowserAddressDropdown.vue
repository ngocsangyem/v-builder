<template>
	<div class="address-dropdown">
		<div
			class="backdrop fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
		></div>
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
				<div
					class="page-item relative"
					v-for="(page, index) in usePages$.getPages"
					:key="page.name"
				>
					<span @click="setDropdownLabel(page.name)">
						{{ page.name }}
					</span>
					<div class="page-item-actions">
						<button type="button" @click="duplicatePage(page.id)">
							<i class="i-ion-copy-outline"></i>
						</button>
						<template v-if="index !== 0">
							<button
								type="button"
								@click="editPageName(page.id, 'hehe')"
							>
								<i class="i-ion-pencil-outline"></i>
							</button>
							<button type="button" @click="removePage(page.id)">
								<i class="i-ion-trash-outline"></i>
							</button>
						</template>
					</div>
				</div>
			</div>
			<div class="add-page-control" v-if="isAddMorePage">
				<input
					ref="pageInput"
					type="text"
					placeholder="Enter page name"
					class="bg-transparent focus:outline-none w-full pr-2 mr-2"
					v-on:keyup.enter="createPage"
				/>
				<button type="button" class="text-blue-400" @click="createPage">
					Save
				</button>
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
import { v4 as uuidv4 } from 'uuid';
import { usePageStore } from '@/stores/pages';
import { IPage } from '@/@types/page';

const usePages$ = usePageStore();
const { removePage, editPageName, duplicatePage, addPage } = usePages$;
const openDropdown = ref(false);
const dropdownLabel = ref('index.html');
const isAddMorePage = ref(false);
const pageInput = ref<HTMLInputElement>();

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
		id: uuidv4(),
		name: `${pageName}.html`,
		components: [],
	};
	addPage(newPage);
	(pageInput.value as HTMLInputElement).value = '';
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

	.add-page-control {
		@apply bg-gray-200;
		@apply py-2 px-4;
		@apply text-left;
		@apply flex items-center;
	}

	.page-item-actions {
		@apply flex;
		@apply items-center;
		@apply gap-2;
		@apply text-sm;
		@apply absolute;
		@apply right-3;
		@apply opacity-0;
		@apply invisible;
		@apply transition;
		top: 50%;
		transform: translateY(-50%);

		button {
			@apply flex;
			@apply items-center;
		}
	}

	.page-item {
		&:hover {
			.page-item-actions {
				@apply opacity-100;
				@apply visible;
			}
		}
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
