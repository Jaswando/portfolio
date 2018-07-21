<template>
	<div v-resize:debounce="onResize" :style="`background-image: url('/img/${name}/${heroSize}.png'); height: 34.375rem;`">
		{{name}}
		{{heroSize}}
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
