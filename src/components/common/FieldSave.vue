<template>
	<div class="field-save">
		<input
			ref="inputRef"
			type="text"
			:placeholder="props.placeholder"
			class="bg-transparent focus:outline-none w-full pr-2 mr-2"
			v-on:keyup.enter="onEnter"
		/>
		<button type="button" class="text-blue-400" @click="onSave">
			Save
		</button>
	</div>
</template>

<script setup lang="ts">
const inputRef = ref<HTMLInputElement>();
const emit = defineEmits(['enter', 'save']);

interface Props {
	placeholder: string;
}

const props = defineProps<Props>();

useFocus(inputRef, { initialValue: true })

const onEnter = () => {
	emit('enter', inputRef.value?.value);
};

const onSave = () => {
	emit('save', inputRef.value?.value);
};
</script>

<style scoped lang="scss">
.field-save {
	@apply bg-gray-200;
	@apply py-2 px-4;
	@apply text-left;
	@apply flex items-center;
}
</style>
