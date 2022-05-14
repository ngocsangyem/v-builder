<template>
	<root ref="iframeRef">
		<slot />
	</root>
</template>

<script setup lang="ts">
import { h, ref, createApp, onMounted, onBeforeUpdate } from 'vue';

interface Props {
	src?: string;
	css?: string;
	id?: string;
}

const props = withDefaults(defineProps<Props>(), {
	src: '',
	css: '',
	id: 'frame',
});

const iframeRef = ref<HTMLIFrameElement>();
const iframeBody = ref<HTMLElement>();
const iframeHead = ref<HTMLElement>();
const iframeStyle = ref<HTMLElement>();
const slots = useSlots();
const linkEl = ref<HTMLLinkElement>();
/**
 * Todo:
 * - Remove type any
 */
let iframeApp: any;

const root = h('iframe');

onMounted(() => {
	iframeBody.value = (
		iframeRef.value as HTMLIFrameElement
	).contentDocument?.body;
	iframeHead.value = (
		iframeRef.value as HTMLIFrameElement
	).contentDocument?.head;
	linkEl.value = document.createElement('link');
	linkEl.value.rel = 'stylesheet';
	linkEl.value.href =
		'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
	iframeHead.value?.appendChild(linkEl.value);
	const el = document.createElement('div');
	iframeBody.value?.appendChild(el);
	iframeStyle.value = document.createElement('style');
	iframeStyle.value.innerHTML = props.css as string;
	iframeHead.value?.appendChild(iframeStyle.value);

	iframeApp = createApp({
		name: 'iframeRender',
		setup() {
			// @ts-ignore
			return () => slots.default();
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
});
</script>
