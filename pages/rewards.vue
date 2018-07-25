<template>
	<div>
		<hero name="rewards" title="Aston Villa Rewards" desc="Helping build lasting connections between fans and the clubs they support" role="Product Design Lead" :team="['Product Manager','iOS Developer','Android Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="With the success of rolling out the new club app to our football clients, we started to receive client feedback in to new features they wanted. We vetted any feedback based on how much it aligned with our own roadmap goals and how it would sit on the platform and not just exclusively one clients app. One of the features that we decided to develop further was a loyalty rewards scheme which would grant users points which could be exchanged for merchandise or experiences."/>
			<paragraph header="Wireframes" text="I worked directly with the both with internal stakeholders and the Aston Villa FC to determine the goals, scope and future market placement of rewards. Before starting the process, we spent some time discussing the vision for the feature and sketching ideas on a whiteboard for a shared vision. After the whiteboarding process I moved onto making wireframes."/>
		</text-section>
        <gallery :imgs="wireframes" page="rewards" folder="wireframes"/>
		<text-section>
			<paragraph header="Visual design" text="Aston Villa FC already had an app and an established brand to work from, so visually I just had to make sure Rewards retained the consistent visuals that were already present. Focusing on reproducing variations of their icon set and using their brand colors to highlight the personal reward card."/>
		</text-section>
		<gallery :imgs="designs" page="rewards" folder="designs"/>
	</div>
</template>

<script>
export default {
	head: {title: 'Aston Villa Rewards'},
	computed: {
		wireframes () {
			const context = require.context('~/static/img/rewards/wireframes', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		},
		designs () {
			const context = require.context('~/static/img/rewards/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
