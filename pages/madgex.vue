<template>
	<div>
		<hero name="madgex"/>
		<div class="bg-grey-lighter"><div class="container">
			<div class="flex flex-wrap -mx-2 bg-grey-lighter py-4 mb-12">
				<div v-for="c in clients" :key="c" class="px-2 w-1/3 md:w-1/6 h-12 flex">
					<img class="w-24 m-auto" :src="`${baseImgUrl}madgex/clients/logo-${c}.png`">
				</div>
			</div>
		</div></div>
		<text-section>
			<paragraph header="Overview" text="In 2013 I joined Madgex to work on their Job board platform which allows users to operate career and development hubs. In my time here I worked with a variety of large and small clients. My role was to accuartely represent their brand on platform whilst working with the the Head of UX on product improvements through User testing and A/B testing informed from data lead user research."/>
		</text-section>
		<div class="container">
			<div v-for="d in designs" :key="d" class="mb-12">
				<img v-img="{group:'designs',cursor:'zoom-in'}" :src="`${baseImgUrl}madgex/designs/${d}`">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {title: 'Madgex'},
	computed: {
		designs () {
			const context = require.context('~/static/img/madgex/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	},
	data: () => ({
		clients: ['haymarket', 'washington', 'telegraph', 'economist', 'wiley', 'johnston-press']
	})
}
</script>
