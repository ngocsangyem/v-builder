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
			<div class="sub-item-content-container overflow-y-auto">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis, nemo. Possimus esse nihil eveniet dolor enim
					sint tenetur vero natus dolore! Numquam illo provident iure
					beatae ullam, molestiae praesentium optio doloribus
					exercitationem reprehenderit laborum officiis eveniet
					similique id dolore eius, excepturi eligendi facere dolorem
					placeat hic. Eum ea aperiam ducimus iure provident, soluta
					vero alias ipsa quod temporibus. Tempora distinctio eius
					minima. Praesentium harum dignissimos velit facilis,
					temporibus unde pariatur aperiam ratione expedita corporis
					at, minima fugiat. Recusandae eos itaque iste, rem nihil
					blanditiis ab doloribus doloremque. Dolor a ut
					exercitationem esse doloribus magni, dolorem eum commodi
					sequi consequatur facilis ducimus similique iure omnis
					recusandae magnam repellendus, impedit cum officia deserunt
					modi maiores laborum. Vero quasi iusto saepe quo eum totam
					corporis! Voluptate ex consectetur asperiores nemo vero fuga
					quas itaque sapiente illo pariatur maiores nisi, totam alias
					ratione nihil? A, obcaecati nobis totam perspiciatis amet
					sequi quidem dicta tenetur non praesentium vero veritatis
					molestiae soluta rem error placeat dolorum, aliquam ipsam!
					Autem saepe molestias illo ad obcaecati iste, maiores ex
					incidunt nisi corrupti aspernatur id aut minus et eum
					voluptatibus atque sed quibusdam ab nobis ducimus
					reprehenderit. Fugit repellat voluptatibus qui, obcaecati
					hic enim omnis voluptatum ullam aut esse.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IComponentsMenuChildren } from '@/@types/menu';

interface Props {
	menu: IComponentsMenuChildren;
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
