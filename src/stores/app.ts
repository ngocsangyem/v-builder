import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
	
	const hasBackdrop = ref(false);

	const getBackdrop = computed(() => hasBackdrop.value);

	const setBackdrop = (value: boolean) => {
		hasBackdrop.value = value
	}

	return {
		setBackdrop,
		getBackdrop
	}
})

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))