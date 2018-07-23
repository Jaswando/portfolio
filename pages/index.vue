<template>
	<div class="container py-4 md:py-12">
		<p class="mb-10 sm:mx-12 lg:w-2/3 text-2xl leading-normal">I'm a <span class="text-blue">Product Designer</span> focused on creating digital experiences by solving human problems first to drive usable & scalable design systems.</p>
		<div class="sm:flex flex-wrap -mx-2">
			<div v-for="w in works" :key="w.name" class="sm:w-1/2 px-2 mb-4">
				<nuxt-link :to="`/${w.name}`">
					<div class="overflow-hidden cursor-pointer relative trigger">
						<img class="w-full" :src="`./img/${w.name}.png`">
						<div class="absolute pin bg-transparent hover:bg-blue-90 flex">
							<div class="m-auto text-center text-white">
								<p class="text-2xl font-medium mb-2">{{w.title}}</p>
								<p>{{w.text}}</p>
							</div>
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		works: [
			{name: 'club-app', title: 'Club App', text: 'iOS & Android'},
			{name: 'our-league', title: 'Our League', text: 'iOS & Android'},
			{name: 'rewards', title: 'Aston Villa Rewards', text: 'iOS & Android'},
			{name: 'tickets', title: 'Tickets', text: 'iOS & Android'},
			{name: 'cast', title: 'Cast', text: 'Cast'},
			{name: 'dashboard', title: 'Dashboard', text: 'Dashboard'}
		]
	})
}
</script>

<style scoped>
.trigger img, .trigger p, .trigger > div {
	transition: all .3s ease;
}
.trigger:hover img {
	transform: scale(1.15);
}
.trigger p {
	opacity: 0;
	transform: translateY(2rem);
}
.trigger:hover p {
	opacity: 1;
	transform: translate(0,0);
}
</style>