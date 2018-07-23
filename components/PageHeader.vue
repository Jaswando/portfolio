<template>
	<div>
		<div class="container py-6 flex">
			<nuxt-link class="font-medium text-xl" to="/">Jason Bird</nuxt-link>
			<div class="hidden md:block ml-auto">
				<nuxt-link v-for="l in links" :key="l.text" class="uppercase ml-6 font-medium hover:text-blue" :to="l.path">{{l.text}}</nuxt-link>
			</div>
			<button :class="'hamburger hamburger--spin md:hidden ml-auto p-0'+(isMenuExpanded?' is-active':'')" type="button" @click="$store.commit('setIsMenuExpanded', !isMenuExpanded)">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</div>
		<transition name="slide-fade">
			<div v-show="isMenuExpanded" class="md:hidden border-t border-b pt-12 flex flex-col">
				<nuxt-link v-for="l in links" :key="l.text" class="mb-12 mx-auto font-medium hover:text-blue" :to="l.path">
					<span @click="$store.commit('setIsMenuExpanded', false)">{{l.text}}</span>
				</nuxt-link>
			</div>
		</transition>
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

<style>
.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .15s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
	transform: translateY(-1rem);
	opacity: 0;
}
</style>