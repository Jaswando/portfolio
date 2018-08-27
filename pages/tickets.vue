<template>
	<div>
		<hero name="tickets" title="FanScore Tickets" role="Product Design Lead" :team="['Product Manager','iOS Developer','Android Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="While working at InCrowd I lead and managed the design of our ticket wallet solution. I was working with project managers & developers on what would be our first step in to the ticketing world to deliver a focused MVP which would revolutionize how fans manage their tickets and improve the stadium attendance and experience."/>
            <p class="leading-normal font-medium">The Challenge</p>
            <ul class="list-reset mb-12">
				<li>- Understand the existing fan process of purchasing or receiving a ticket, then using it for access.</li>
				<li>- Understanding the technical limitations regarding the account tickets are purchased under and how that is then displayed in app.</li>
			</ul>
            <paragraph header="User needs" text="To get this off of the ground we decided to work exclusively with Birmingham City FC. This allowed us to work closely with a trial group of fans that we could test & validate designs, while also providing the ability to schedule real life test days. To start we conducted User interviews and meetings with Birmingham City this helped us establish initial processes and frictions with the existing system."/>
            <paragraph header="User Flow" text="I setup a workshop with our developers to run through the API details we received. This would help inform the user flows so we can compromise on an effective user experience while retaining best performance."/>
        </text-section>
        <div class="py-12 bg-grey-lighter mb-12">
			<div class="container">
				<img v-img="{group:'flow',cursor:'zoom-in'}" class="w-full" :src="`${baseImgUrl}tickets/flow.png`">
			</div>
		</div>
        <text-section>
			<paragraph text="For a user to successfully hold a ticket on their phone, they must first have a FanScore wallet account and then successfully link the ticket account in which they purchased from. Detailing this user flow also uncovered edge cases based on the method of linking an account:"/>
            <ul class="list-reset mb-12">
				<li>1. Linking the same email used for FanScore wallet</li>
				<li>2. Linking a different email to FanScore wallet</li>
				<li>3. Linking an email which has more than one account ID attached</li>
			</ul>
			<paragraph header="Wireframing" text="The process involved to link an account was starting to appear convoluted and with the additional edge cases to consider it was key that we nailed how the process was presented. I to started rapidly wireframe and test solutions to make this process as effortless as possible."/>
		</text-section>
        <gallery :imgs="wireframes" page="tickets" folder="wireframes"/>
		<text-section>
			<paragraph header="Visual design" text="The visual design would follow suit to the existing app while taking a nod from the ticket branding that was present on the physical ticket in the form of polygons. These assets were then made interchangeable between clubs so to keep the product scalable for multiple clubs."/>
		</text-section>
		<gallery :imgs="designs" page="tickets" folder="designs"/>
		<text-section>
			<paragraph header="User testing" text="We tested our current iteration of the ticket link process with a focus group of users and internally with those not so close to the project. We discovered that most people found the process of a getting a ticket on to their phone confusing. Although they did manage to complete the tasks the time taken to do so was far too long from observing users attempt to understand the notion of ‘Linking an account’."/>
			<p class="leading-normal font-medium">What we Found</p>
			<ul class="list-reset mb-12">
				<li>- Onboarding was not clear - This needed to be concise before throwing a user in to account creation which then asks you to create an account in order to use the ticket functionality. But what account? Is this my ticket account? How is FanScore different?</li>
				<li>- FanScore Account creation - These views are using a shared library across multiple apps, we found the minimal styling to throw people off, it did not feel like you were still in the app. We decided this needed to be redesigned to remain consistent within each apps branding.</li>
				<li>- The linking flow itself - I believe we were too focused on overstating how ‘you can instantly link with FanScore’. However this isn’t the value point for users nor do they necessarily fully understand what FanScore facilitates. We needed to simplify the messaging here to actions the user wants to achieve in these instances like ‘Find my Tickets’ or ‘Select your email’ and avoid any jargon we may have initially been trying to force on the user.</li>
			</ul>
			<p class="leading-normal font-medium mb-12">Below are the improvements that were made.</p>
		</text-section>
		<gallery :imgs="testings" page="tickets" folder="testings"/>
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
		},
		testings () {
			const context = require.context('~/static/img/tickets/testings', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
