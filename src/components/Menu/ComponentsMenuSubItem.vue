<template>
	<div class="sub-item" v-if="menu.components.length > 0">
		<span
			class="transition flex items-center justify-between px-2 py-1 mb-2 rounded text-sm font-bold text-gray-500 cursor-pointer hover:text-gray-800 bg-gray-200"
			@click="toggleContent"
			>{{ menu.title }}
			<i
				class="inline-block ml-2"
				:class="{
					'i-ion-caret-down-outline': !expanded,
					'i-ion-caret-up-outline': expanded,
				}"
			></i>
		</span>
		<div class="sub-item-content p-3" v-if="expanded">
			<draggable
				class="sub-item-content-container overflow-y-auto"
				:list="components"
				:sort="false"
				:group="{ name: 'components', pull: 'clone', put: false }"
				item-key="id"
			>
				<template #item="{ element }">
					<div class="list-group-item relative">
						<div class="mb-4 rounded-md">
							<span class="absolute top-0 left-0 z-40 px-2 py-1 mt-2 ml-2 text-xs font-medium text-gray-600 ease-out bg-gray-200 rounded-md">{{ element.title }}</span>
							<img
								:src="element.thumbnail"
								class="w-full h-auto rounded border border-solid border-gray-200"
								loading="lazy"
							/>
						</div>
					</div>
				</template>
			</draggable>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IComponentItem } from '@/@types/component';
import { IComponentsMenuChildren } from '@/@types/menu';
import draggable from 'vuedraggable';

interface Props {
	menu: IComponentsMenuChildren;
	components: IComponentItem[];
}
const expanded = ref(false);
const props = defineProps<Props>();

const toggleContent = () => {
	expanded.value = !expanded.value;
};
</script>

<style scoped lang="scss">
.sub-item-content-container {
	max-height: 500px;
}
</style>
