<template>
	<div>
		<hero name="our-league" title="Rugby League Membership" role="Product Design Lead" :team="['Product Manager','iOS Developer','Android Developer','Web Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="The Rugby Football league approached InCrowd with the task of developing a multiplatform membership solution. They wanted to bring together their digital channels to enroll users in a free membership which will host everything InCrowd’s club app offering delivers but overtime to scale the product to be the go to place for community player stats dashboard, Tickets, Live streaming, reward plans and very long term start to look at how the free membership model can adapt to paid membership service."/>
			<paragraph header="User needs" text="This was a project with a lot of moving parts so it was essential to survey the client to uncover their business goals and what they wanted to achieve so we could establish realistic goals to work toward as an MVP product. Further to this we agreed how features will be attributed across a roadmap the key points that came out of this were"/>
			<ul class="list-reset mb-12">
				<li>- Free Registration for users including support for minors</li>
				<li>- A service to display basic news feed</li>
				<li>- 3rd Party integration Rewards4</li>
				<li>- Match centre & Fixtures in app</li>
			</ul>
			<p class="leading-normal font-medium">Road map features for further scope</p>
			<ul class="list-reset mb-12">
				<li>- Live streaming</li>
				<li>- Community player stats</li>
				<li>- Tickets</li>
			</ul>
			<paragraph header="User flow" text="I started by gathering the prodcuct team developers to work through the registration process user flow and striking a compromise between technical limitation and achieving effective usability."/>
		</text-section>
		<div class="py-12 bg-grey-lighter">
			<div class="container">
				<img v-img="{group:'flow',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}our-league/registration.png`">
				<text-section class="py-12">
					<p class="leading-normal">I also setup similar workshops to discuss and document the flows of the 3rd party integrations required for our MVP launch.</p>
				</text-section>
				<div class="md:flex -mx-2">
					<div v-for="x in ['left','middle','right']" :key="x" class="md:w-1/3 px-2 mb-4"><img v-img="{group:'flow',cursor:'zoom-in'}" :src="`${baseImgUrl}our-league/integration-${x}.png`"></div>
				</div>
			</div>
		</div>
		<text-section class="pt-12">
			<paragraph header="Wireframing" text="To begin conversation with the client I produced a series of wireframes and sketches to help communicate how how the flows can be presented to the user and start To give an idea of how the product would take shape."/>
		</text-section>
		<gallery :imgs="wireframes" page="our-league" folder="wireframes"/>
		<text-section>
			<paragraph header="Visual design" text="The RFL approached this with their own brand team so we were quite restricted with the minimal visuals we were given had to work with, so I tried to."/>
		</text-section>
		<div class="container mb-12"><img :src="`${baseImgUrl}our-league/rfl-mockup.png`"></div>
		<gallery :imgs="designs" page="our-league" folder="designs"/>
	</div>
</template>

<script>
export default {
	head: {title: 'Rugby League Membership'},
	computed: {
		wireframes () {
			const context = require.context('~/static/img/our-league/wireframes', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		},
		designs () {
			const context = require.context('~/static/img/our-league/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
