<template>
	<iframe class="w-full h-full" :src="src" ref="iframe" sandbox="allow-scripts" />
</template>

<script setup lang="ts">
import { useEmbed } from '@evilkiwi/embed';
import { ref, onMounted } from 'vue';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	src?: string;
	id: string;
}
const props = withDefaults(defineProps<Props>(), {
	src: '/',
	id: uuidv4(),
});
const iframe = ref<InstanceType<typeof HTMLIFrameElement>>();
const { send, events } = useEmbed('host', {
	id: props.id,
	iframe,
	remote: props.src,
});

events.on('yay', (payload) => {
	console.log(payload);
});

onMounted(async () => {
	// Send an event to the iFrame and wait for a response.
	const response = await send('hello-world', {
		hello: 'world',
	});
});
</script>

<style scoped></style>
