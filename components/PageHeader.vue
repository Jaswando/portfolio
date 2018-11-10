<template>
	<div>
		<div class="container py-6 flex">
			<nuxt-link class="font-medium text-xl" to="/">Jason Bird</nuxt-link>
			<div class="hidden md:block ml-auto">
				<nuxt-link class="uppercase ml-6 font-medium hover:text-blue" to="/">Work</nuxt-link>
				<nuxt-link class="uppercase ml-6 font-medium hover:text-blue" to="/about">About</nuxt-link>
				<a class="uppercase ml-6 font-medium hover:text-blue" href="https://medium.com/@Jaswando" target="_blank">Blog</a>
			</div>
			<button :class="'hamburger hamburger--spin md:hidden ml-auto p-0'+(isMenuExpanded?' is-active':'')" type="button" @click="$store.commit('setIsMenuExpanded', !isMenuExpanded)">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</div>
		<div :class="'md:hidden overflow-hidden flex flex-col smooth-menu '+(isMenuExpanded?'h-40 border-b':'h-0')">
			<nuxt-link class="my-6 mx-auto font-medium hover:text-blue" to="/">
				<span @click="$store.commit('setIsMenuExpanded', false)">Work</span>
			</nuxt-link>
			<nuxt-link class="mb-6 mx-auto font-medium hover:text-blue" to="/about">
				<span @click="$store.commit('setIsMenuExpanded', false)">About</span>
			</nuxt-link>
			<div class="mb-6 mx-auto">
				<a class="font-medium hover:text-blue" href="https://medium.com/@Jaswando" target="_blank">Blog</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isMenuExpanded () { return this.$store.state.isMenuExpanded }
	}
}
</script>

<style scoped>
.smooth-menu {
	transition: all .3s ease;
}
</style>
