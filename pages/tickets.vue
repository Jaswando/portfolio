<template>
	<div>
		<hero name="tickets" title="FanScore Tickets" desc="Helping build lasting connections between fans and the clubs they support" role="Product Design Lead" :team="['Product Manager','iOS Developer','Android Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="While working at InCrowd I lead and managed the design of our ticket wallet solution. I was working with project managers & developers on what would be our first step in to the ticketing world to deliver a focused MVP which would revolutionize how fans manage their tickets and improve the stadium attendance experience."/>
            <p class="leading-normal font-medium text-blue">The Challenge</p>
            <ul class="list-reset mb-12">
				<li>- Understand the existing fan process of purchasing or receiving a ticket, then using it for access</li>
				<li>- Understanding the technical limitations regarding the account tickets are purchased under and how that is then displayed in app</li>
				<li>- Communicating with the existing ticket process in a more efficient digital process</li>
			</ul>
            <paragraph header="User needs" text="To get this off of the ground we decided to work exclusively with Birmingham City FC which allowed us work closely with a trial group of fans that we could test & validate designs while also giving the ability schedule real life test days. To start we conducted User interviews and meetings with Birmingham City this helped us establish initial processes and frictions with the existing system."/>
            <paragraph header="User Flow" text="I setup a workshop with our developers to run through the API details we received. This would help inform the user flows so we can compromise on an effective user experience while retaining best performance."/>
        </text-section>
        <div class="py-12 bg-grey-lighter mb-12">
			<div class="container">
				<img v-img="{group:'flow',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}tickets/flow.png`">
			</div>
		</div>
        <text-section>
            <p class="leading-normal mb-12">For a user to successfully hold a ticket on their phone, they must first have a FanScore wallet account and then successfully link the ticket account in which they purchased from. Detailing this user flow also uncovered edge cases based on the method of linking an account:</p>
            <ul class="list-reset mb-12">
				<li>1. Linking the same email used for FanScore wallet</li>
				<li>2. Linking a different email to FanScore wallet</li>
				<li>3. Linking an email which has more than one account ID attached</li>
			</ul>
			<paragraph header="Wireframing" text="The process involved to link an account was starting to appear convoluted and with the additional edge cases to consider it was key that we nailed how the process was presented. I to started rapidly wireframe and test solutions to make this process as effortless as possible."/>
		</text-section>
        <gallery :imgs="wireframes" page="tickets" folder="wireframes"/>
		<text-section>
			<paragraph header="Visual design" text="The visual design would follow suit to the existing app while taking a nod from the ticket branding that was present on the physical ticket in the form of polygons these assets were then made interchangeable between clubs so to keep the product scalable to be reused for multiple clubs."/>
		</text-section>
		<gallery :imgs="designs" page="tickets" folder="designs"/>
	</div>
</template>

<script>
export default {
	head: {title: 'FanScore Tickets'},
	computed: {
		wireframes () {
			const context = require.context('~/static/img/tickets/wireframes', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		},
		designs () {
			const context = require.context('~/static/img/tickets/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
