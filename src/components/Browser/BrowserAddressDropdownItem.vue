<template>
	<div class="dropdown-item" v-if="page">
		<template v-if="!isEdit">
			<span @click="onClickLabel">
				{{ page.name }}
			</span>
			<div class="dropdown-actions">
				<button type="button" @click="onDuplicate">
					<i class="i-ion-copy-outline"></i>
				</button>
				<template v-if="index !== 0">
					<button type="button" @click="onEdit">
						<i class="i-ion-pencil-outline"></i>
					</button>
					<button type="button" @click="onRemove">
						<i class="i-ion-trash-outline"></i>
					</button>
				</template>
			</div>
		</template>
		<template v-else>
			<field-save
				ref="target"
				placeholder="Edit page name"
				@enter="onSave"
				@save="onEnter"
			></field-save>
		</template>
	</div>
</template>

<script setup lang="ts">
import { IPage } from '@/@types/page';

interface Props {
	page: IPage;
	index: number;
}

const isEdit = ref(false);
const props = defineProps<Props>();
const target = ref(null)
const emit = defineEmits([
	'duplicate',
	'remove',
	'edit',
	'click-label',
	'save',
	'enter',
]);

onClickOutside(target, (event) => isEdit.value = false)

const onDuplicate = () => {
	emit('duplicate');
};
const onEdit = () => {
	isEdit.value = true;
	emit('edit');
};
const onRemove = () => {
	emit('remove');
};
const onClickLabel = () => {
	emit('click-label');
};
const onSave = (value: string) => {
	emit('save', { value, page: props.page });
	isEdit.value = false;
};
const onEnter = (value: string) => {
	emit('enter', { value, page: props.page });
	isEdit.value = false;
};
</script>

<style scoped lang="scss">
.dropdown-item {
	@apply relative;

	span {
		@apply block;
		@apply py-2 px-4;
		@apply text-left;
		@apply border-b border-solid border-gray-100;
		@apply cursor-pointer;
	}
	.dropdown-actions {
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

	&:hover {
		.dropdown-actions {
			@apply opacity-100;
			@apply visible;
		}
	}
}
</style>
