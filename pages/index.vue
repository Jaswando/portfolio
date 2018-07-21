<template>
	<div class="container mx-auto px-4 py-10">
		<p class="mb-10 sm:mx-12 lg:w-2/3 text-2xl leading-normal">I'm a <span class="text-blue">Product Designer</span> focused on creating digital experiences by solving human problems first to drive usable & scalable design systems.</p>
		<div class="sm:flex flex-wrap -mx-2">
			<div v-for="w in works" :key="w.name" class="sm:w-1/2 px-2 mb-4">
				<div @click="$router.push(`/${w.name}`)" class="bg-contain relative cursor-pointer trigger" :style="`padding-top: 56.25%; background-image: url(./img/${w.name}.png)`">
					<div class="absolute pin bg-blue-90 work-overlay">
						<div class="m-auto text-center text-white">
							<p class="text-2xl font-medium mb-2">{{w.title}}</p>
							<p>{{w.text}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {title: 'Work'},
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
.trigger:hover .work-overlay {
	display: flex;
}
.work-overlay {
	display: none;
}
</style>