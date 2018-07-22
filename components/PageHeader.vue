<template>
	<div>
		<div class="container py-6 flex">
			<p class="font-medium text-2xl">Jason Bird</p>
			<div class="hidden md:block ml-auto">
				<nuxt-link v-for="l in links" :key="l.text" class="uppercase ml-6 font-medium hover:text-blue" :to="l.path">{{l.text}}</nuxt-link>
			</div>
			<svg @click="$store.commit('setIsMenuExpanded', true)" class="h-5 w-5 cursor-pointer md:hidden ml-auto" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		</div>
		<div v-show="isMenuExpanded" class="fixed bg-white pin-t pin-r w-full h-full z-50">
			<div class="container py-6 flex">
				<img @click="$store.commit('setIsMenuExpanded', false)" class="h-5 w-5 cursor-pointer ml-auto" src="~/assets/img/black-cross.png">
			</div>
			<div class="border-t flex flex-col">
				<nuxt-link v-for="l in links" :key="l.text" class="mt-10 mx-auto font-medium hover:text-blue" :to="l.path">
					<span @click="$store.commit('setIsMenuExpanded', false)">{{l.text}}</span>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isMenuExpanded () { return this.$store.state.isMenuExpanded }
	},
	data: () => ({
		links: [
			{text: 'Work', path: '/'},
			{text: 'About', path: '/about'}
		]
	})
}
</script>
