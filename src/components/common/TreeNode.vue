<template>
	<component v-if="node.type" :is="node.type" v-bind="{ ...node.props }">
		<template v-if="node.children && Array.isArray(node.children)">
			<tree-node
				v-for="children in node.children"
				:node="children"
			>
			</tree-node>
		</template>
	</component>
	<template v-else>
		{{ node?.children }}
	</template>
</template>

<script setup lang="ts">
import { VNode } from '@/@types/vnode';


interface Props {
	node: VNode;
}
defineProps<Props>();
</script>