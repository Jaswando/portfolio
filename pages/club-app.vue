<template>
	<div>
		<hero name="club-app" title="Football club app" desc="Helping build lasting connections between fans and the clubs they support" role="Product Design Lead" :team="['Product Manager','iOS Developer','Android Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="Mid 2016 I joined an 8 person start-up called InCrowd Sports to lead the design for their football club product which set out to be the hub of fan engagement. The app would be for football fans to digest the latest news for their supported clubs aswell as a place to receive live match updates. There was already an existing version of the app my challenge was to improve the usability and the visual design."/>
			<paragraph header="Information Hierarchy" text="This project began by identifying the information architecture with the outcome of producing a site map. This would show a holistic view of the apps content. Doing this helped to group similar content to reduce unnecessary screens and how they will be navigated."/>
			<paragraph header="Wireframing & User flow" text="I then switched to rapid wireframing and testing the user flows in order to define key layouts and interaction patterns. Documenting user flows helped uncover edge cases for around the match centre before a live game starts, during and after it finishes, as well as scenarios when there is no internet connection. After wireframing I was able to establish a basic set of UI components which will be that will be shared across more than one view."/>
		</text-section>
		<div class="py-12 bg-grey-lighter">
			<div class="container">
				<div class="md:flex -mx-2">
					<div v-for="x in ['left', 'right']" :key="x" class="md:w-1/2 px-2 mb-4"><img v-img="{group:'sketch',cursor:'zoom-in'}" :src="`${baseImgUrl}club-app/sketch-${x}.png`"></div>
				</div>
				<img v-img="{group:'sketch',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}club-app/userflow.png`">
			</div>
		</div>
		<text-section class="pt-12">
			<paragraph header="Designs" text="With a basic set of components and a mass of wireframes and flows I was ready to start applying the visual layer. The visuals had to strongly represent the teams brand while remaining flexible enough that components can be easily styled for other teams and work wth any content on the fly within the app. To do so I set about maintaining a consistent visual language."/>
		</text-section>
		<div class="container">
			<div class="flex flex-wrap -mx-4">
				<div v-for="d in designs" :key="d" class="sm:w-1/2 md:w-1/4 xl:w-1/6 px-4 mb-12">
					<img v-img="{group:'designs',cursor:'zoom-in'}" :src="`${baseImgUrl}club-app/designs/${d}`">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		designs () {
			const context = require.context('~/static/img/club-app/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
