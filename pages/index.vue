<template>
	<div class="container">
		<p class="animated fadeIn py-32 md:py-48 sm:mx-12 lg:w-2/3 text-2xl md:text-4xl leading-normal">I'm a <span class="text-blue">Product Designer</span> focused on creating digital experiences and solving human problems to drive usable & scalable design systems.</p>
		<div class="sm:flex flex-wrap -mx-2 mb-8">
			<div v-for="(w,index) in works" :key="w.name" :id="w.name" v-observe-visibility="{callback:visibilityChanged,throttle:index*50+50}" :class="'sm:w-1/2 px-2 mb-4 '+(w.isVisible?'animated fadeInUp':'opacity-0')">
				<nuxt-link :to="`/${w.name}`">
					<div class="overflow-hidden cursor-pointer relative trigger">
						<img class="w-full" :src="`./img/${w.name}/cover.png`">
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
	methods: {
		visibilityChanged (isVisible, entry) {
			if (isVisible) {
				this.works.find(w => w.name === entry.target.id).isVisible = true
			}
		}
	},
	data: () => ({
		works: [
			{name: 'club-app', title: 'Club App', text: 'iOS & Android', isVisible: false},
			{name: 'our-league', title: 'Rugby League Membership', text: 'iOS, Android & Web', isVisible: false},
			{name: 'rewards', title: 'Aston Villa Rewards', text: 'iOS & Android', isVisible: false},
			{name: 'tickets', title: 'Tickets', text: 'iOS & Android', isVisible: false},
			{name: 'cast', title: 'InCrowd Cast', text: 'Windows Application', isVisible: false},
			{name: 'dashboard', title: 'Insights Dashboard', text: 'Web', isVisible: false},
			{name: 'madgex', title: 'Madgex', text: '', isVisible: false},
			{name: 'interaction', title: 'Interaction', text: '', isVisible: false}
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