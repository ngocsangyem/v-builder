<template>
	<div v-if="$usePages.getCurrentPage">
		<template v-for="component in $usePages.getCurrentPage.components" :key="component.id">
			<tree-node v-if="component.html" :node="component.html"></tree-node>
		</template>
	</div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pages';
import { IPage } from '@/@types/page';
interface Props {
	page: IPage;
}
const props = defineProps<Props>();
const $usePages = usePageStore();
</script>

<style scoped></style>
