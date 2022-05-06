<template>
	<iframe-root></iframe-root>
</template>

<script setup lang="ts">
import {
	h,
	ref,
	createApp,
	onMounted,
	onBeforeUpdate,
	useSlots,
} from 'vue';

const iframeRef = ref<HTMLIFrameElement>();
const iframeBody = ref<HTMLElement>();
const iframeHead = ref<HTMLElement>();
const iframeStyle = ref<HTMLStyleElement>();
/*
 * Todo:
 * - Replace type any
 */
let iframeApp: any;

interface Props {
	css: string;
}

const slots = useSlots();
const props = defineProps<Props>();

onMounted(() => {
	iframeBody.value = (
		iframeRef.value as HTMLIFrameElement
	).contentDocument?.body;
	iframeHead.value = (
		iframeRef.value as HTMLIFrameElement
	).contentDocument?.head;
	const el = document.createElement('div');
	iframeBody.value?.appendChild(el);
	iframeStyle.value = document.createElement('style');
	iframeStyle.value.innerHTML = props.css;
	iframeHead.value?.appendChild(iframeStyle.value);

	iframeApp = createApp({
		name: 'friendlyIframe',
		setup() {
			return () => slots;
		},
	}).mount(el);

	onBeforeUpdate(() => {
		if (!iframeApp || !iframeRef.value) {
			return;
		}
		if (props.css) {
			(iframeStyle.value as HTMLElement).innerHTML = props.css;
		}
	});

	const iframeRoot = h("iframe", { ref: iframeRef });
});
</script>

<style scoped></style>
