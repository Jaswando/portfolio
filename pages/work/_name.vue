<template>
	<div v-resize:debounce="onResize" class="bg-center text-white lg:flex" :style="`background-image: url('../img/${name}/${heroSize}.png'); height: 34.375rem;`">
		<div class="px-4 pt-4 lg:my-auto lg:w-64">
			<p class="font-medium text-2xl mb-4">Football club app</p>
			<p>Helping build lasing connections between fans and the clubs they support. I worked on building a whitelabel platform to house real time interactions and integrations.</p>
		</div>
	</div>
</template>

<script>
import resize from 'vue-resize-directive'
export default {
	directives: {resize},
	created () { this.computeHeroSize(window.innerWidth) },
	computed: {
		name () { return this.$route.params.name }
	},
	methods: {
		onResize (e) { this.computeHeroSize(e.offsetWidth) },
		computeHeroSize (width) { this.heroSize = [576, 768, 992, 1200, 1920].find(s => s >= width) || 1920 }
	},
	data: () => ({
		heroSize: null,
		works: [
			{}
		]
	})
}
</script>
