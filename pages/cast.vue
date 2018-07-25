<template>
	<div>
		<hero name="cast" title="InCrowd Cast" role="Product Design Lead" :team="['CTO','Software Developer (x4)']"/>
		<text-section>
			<paragraph header="Overview" text="Alongside the consumer based products InCrowd was also developing B2B software which would help connect the FanScore Universe. The software was created for clients to generate playlists of video to display on stadium perimeters and big screens and at a later stage would support plugins to enable fan engagement via the the predictor on the big screen. This project has been largely developer driven until now..."/>
		</text-section>
		<gallery :imgs="overview" page="cast" folder="overview" colSize="3"/>
		<text-section>
			<paragraph classProp="mb-6" header="Research stage" text="Having had developers already build a version of the software I treated this as an initial prototype. I started by playing around with the first build, understanding the concept & user goals of the software. After this I wanted to identify user flows but quickly realized these would not be as linear as previous apps. A user may open the software to create a new file, open a recent file, generate playlist, create template, add content etc."/>
			<p class="leading-normal mb-6">So I started to identify these scenarios as ‘Workflows’ which has a linear user flow instance which can impact the content and actions of other workflows. Breaking down the software to workflows helped me in identifying usability issues I wanted to solve, which included:</p>
			<ul class="list-reset mb-12">
				<li>- Feedback states</li>
				<li>- UI duplication</li>
				<li>- Component inconsistency</li>
				<li>- Real estate for certain actions</li>
				<li>- Information hierarchy</li>
				<li>- Progressive disclosure</li>
				<li>- Handling large amount of user generated content</li>
				<li>- Buggy tabs</li>
			</ul>
		</text-section>
		<div class="py-12 bg-grey-lighter mb-12">
			<text-section>
				<paragraph header="Wireframing" text="I started to wireframe solutions to these usability issues which included: Moving the playback panel from the right hand side to the bottom to encourage left to right workflow, increase workspace and make the left to right drag & drop more efficient. Deleting the duplicate top bar UI to reduce clutter as these actions can target selected content. reducing left hand panel enabling it to become scalable for more content as well as including onboarding tooltips, tab management & using progressive disclosure to help guide the user to adding more content to playlists."/>
			</text-section>
			<div class="container">
				<img v-img="{group:'wireframes',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}cast/wireframes-01.png`">
			</div>
		</div>
		<text-section>
			<paragraph classProp="mb-6" header="Ongoing iterations" text="While I was working on the current build I had to allow time for adding the multiple new features which needed to be implemented as well which included:"/>
			<ul class="list-reset mb-12">
				<li>- Licensing</li>
				<li>- Content Library</li>
				<li>- Timeline view</li>
				<li>- Plugin management</li>
				<li>- Displaying live plugins</li>
			</ul>
		</text-section>
		<gallery :imgs="wireframes" page="cast" folder="wireframes" colSize="3"/>
		<text-section>
			<paragraph classProp="mb-6" header="Visual design" text="I started creating high fidelity mockups from my wireframes, given the tool like nature of the product I wanted to focus on:"/>
			<ul class="list-reset mb-12">
				<li class="font-bold">Accessibility -  Size of text and use of contrast</li>
				<li class="font-bold">Dark theme -  for long periods of use to avoid eye strain</li>
				<li class="font-bold">Brand – Using the existing brand to accent the dark theme</li>
			</ul>
		</text-section>
		<div class="py-12 bg-grey-lighter mb-12">
			<div class="container">
				<div class="md:flex -mx-4">
					<div v-for="i in 2" :key="'designs'+i" :class="'md:w-1/2 px-4 '+(i===1?'mb-12 md:mb-0':'')"><img v-img="{group:'designs',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}cast/designs-0${i}.png`"></div>
				</div>
			</div>
		</div>
		<text-section>
			<paragraph text="As my designs progressed I started to build an extensive library of components that I could reuse anywhere in the software to maintain consistency. This was important to me so I could focus on designing a system that is scalable as the product evolves."/>
		</text-section>
		<div class="container mb-12">
			<div class="md:flex -mx-4">
				<div v-for="i in 2" :key="'designs'+(i+2)" :class="`md:w-${i}/3 px-4 mb-12 md:mb-0`"><img v-img="{group:'designs',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}cast/designs-0${i+2}.png`"></div>
			</div>
		</div>
		<gallery :imgs="designs" page="cast" folder="designs" colSize="3"/>
	</div>
</template>

<script>
export default {
	head: {title: 'InCrowd Cast'},
	computed: {
		overview () {
			const context = require.context('~/static/img/cast/overview', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		},
		wireframes () {
			const context = require.context('~/static/img/cast/wireframes', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		},
		designs () {
			const context = require.context('~/static/img/cast/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
