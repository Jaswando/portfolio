<template>
	<div>
		<div v-resize:debounce="onResize" class="bg-center bg-cover" :style="`background-image: url('${baseImgUrl+name}/${heroW}.png'); height: ${heroH}rem;`"></div>
		<text-section v-if="title" class="py-12">
			<p class="font-medium text-3xl">{{title}}</p>
			<div v-if="role&&team" class="lg:flex -mx-2 mt-12">
				<div class="mb-4 lg:mb-0 lg:w-1/4 px-2">
					<p class="font-medium mb-2">MY ROLE</p>
					<p class="leading-normal">{{role}}</p>
				</div>
				<div class="lg:w-3/4 px-2">
					<p class="font-medium mb-2">THE TEAM</p>
					<p class="leading-normal">{{team.join(', ')}}</p>
				</div>
			</div>
		</text-section>
	</div>
</template>

<script>
import resize from 'vue-resize-directive'
export default {
	directives: {resize},
	props: {
		name: {type: String, required: true},
		title: {type: String},
		role: {type: String},
		team: {type: Array}
	},	
	created () { this.computeHeroW(window.innerWidth) },
	methods: {
		onResize (e) { this.computeHeroW(e.offsetWidth) },
		computeHeroW (width) {
			this.heroW = [576, 768, 992, 1200, 1920].find(s => s >= width) || 1920
			this.heroH = width > 576 ? 34.375 : 18.75
		}
	},
	data: () => ({
		heroW: null,
		heroH: null
	})
}
</script>