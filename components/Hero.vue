<template>
	<div>
		<div class="container mx-auto px-4 py-10 md:px-24">
			<p class="font-medium text-3xl mb-2">{{title}}</p>
			<p class="mb-10">{{desc}}</p>
			<div class="md:flex">
				<div class="mb-4 md:mb-0 md:w-1/4">
					<p class="font-medium mb-2">MY ROLE</p>
					<p>{{role}}</p>
				</div>
				<div class="md:w-3/4">
					<p class="font-medium mb-2">THE TEAM</p>
					<p>{{team.join(', ')}}</p>
				</div>
			</div>
		</div>
		<div v-resize:debounce="onResize" class="bg-center bg-cover" :style="`background-image: url('./img/${name}/${heroSize}.png'); height: 34.375rem;`"></div>
	</div>
</template>

<script>
import resize from 'vue-resize-directive'
export default {
	directives: {resize},
	props: {
		name: {type: String, required: true},
		title: {type: String, required: true},
		desc: {type: String, required: true},
		role: {type: String, required: true},
		team: {type: Array, required: true}
	},	
	created () { this.computeHeroSize(window.innerWidth) },
	methods: {
		onResize (e) { this.computeHeroSize(e.offsetWidth) },
		computeHeroSize (width) { this.heroSize = [576, 768, 992, 1200, 1920].find(s => s >= width) || 1920 }
	},
	data: () => ({
		heroSize: null
	})
}
</script>