import { h, ref, createApp, onMounted, onBeforeUpdate, defineComponent } from 'vue';

export default defineComponent({
	name: 'RenderToIFrame',
	props: {
		css: {
			type: String,
			default: '',
		},
		src: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
	},
	setup(props, { slots }) {
		const iframeRef = ref<HTMLIFrameElement>();
		const iframeBody = ref<HTMLElement>();
		const iframeHead = ref<HTMLElement>();
		const iframeStyle = ref<HTMLElement>();
		const linkEl = ref<HTMLLinkElement>()
		/**
		 * Todo:
		 * - Remove type any
		 */
		let iframeApp: any;

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
			linkEl.value = document.createElement('link');
			linkEl.value.rel = 'stylesheet';
			linkEl.value.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
			iframeStyle.value.innerHTML = props.css as string;
			iframeHead.value?.appendChild(linkEl.value);
			iframeHead.value?.appendChild(iframeStyle.value);

			iframeApp = createApp({
				name: 'iframeRender',
				setup() {
					// @ts-ignore
					return () => slots.default();
				},
			}).mount(el);
		});
		onBeforeUpdate(() => {
			if (!iframeApp || !iframeRef.value) {
				return;
			}
			if (props.css) {
				(iframeStyle.value as HTMLElement).innerHTML = props.css;
			}
		});

		return () => h("iframe", { ref: iframeRef })
	}
});