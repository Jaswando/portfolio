<template>
	<div>
		<hero name="interaction" title="Interaction"/>
		<text-section>
			<paragraph header="Overview" text="Using Principle or Airbnbs Lottie I start to add polish toward the end of a project. Animating delightful micro interactions on buttons, spinners and transitions or full animations in appropriate places like onboarding views. This level of polish it what delights users and increases the level of engagement and betters the user experience. However this is always something I leave to the end so you do not lose sight of core functionality or use cases."/>
		</text-section>
		<div class="container text-center">
			<div v-for="(l,index) in lotties" :key="'lottie'+index" :class="'mb-12'+l.background">
				<lottie :options="l.options" :height="l.height" :width="l.width"/>
			</div>
			<img v-for="g in gifs" :key="g" :src="`${baseImgUrl}interaction/${g}.gif`" class="mb-12">
		</div>
	</div>
</template>

<script>
import Lottie from 'vue-lottie';
import * as loadSuccess from '~/assets/load-success.json';
import * as ticketOnboard from '~/assets/ticket-onboard.json';
export default {
	head: {title: 'Interaction'},
	components: {Lottie},
	data: () => ({
		gifs: ['crystal-palace', 'tabs-scrolling', 'villa-apple-tv'],
		lotties: [
			{options: {animationData: ticketOnboard}, background: '', height: 575, width: 280},
			{options: {animationData: loadSuccess}, background: ' bg-green', height: 300, width: 280}
		]
	})
}
</script>
