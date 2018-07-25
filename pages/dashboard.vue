<template>
	<div>
		<hero name="dashboard" title="Dashboard Analytics" desc="Helping build lasting connections between fans and the clubs they support" role="Product Design Lead" :team="['Data Engineer (x3)','Web Developer','Backend Developer']"/>
		<text-section>
			<paragraph header="Overview" text="Developing a large number of app, web and software based products InCrowd saw the value in creating an avenue to visually report data driven insights to clients to inform on performance, usage, demographic etc. While also providing insights internally to record crash rates, bounce rate amongst to inform product design decisions and QA test. The vision was to see one system in place to handle tiers of users who will only see the sets of data assigned to their role."/>
			<paragraph header="Research stage" text="I began by interviewing stakeholders to understand what the business goals were and how that aligns with the user needs. To help keep everyone on the same page this started out as a few sketches and wireframes to help communicate a shared vision at this stage. To pitch and present the concept these sketches quickly became high fidelity mockups to help pitch and share the idea with the wider team."/>
			<paragraph classProp="mb-4" header="Designs" text="This is an ongoing project, Questions I will be asking myself going forward."/>
            <ul class="list-reset mb-12">
				<li>- What insights do we want see as a company?</li>
				<li>- What insights do our clients want to see?</li>
				<li>- What data feeds do we have to work with?</li>
                <li>- How is this organized?</li>
                <li>- User structure all login to the same place? Separate database?</li>
			</ul>
		</text-section>
		<gallery :imgs="designs" page="dashboard" folder="designs"/>
	</div>
</template>

<script>
export default {
	head: {title: 'Dashboard Analytics'},
	computed: {
		designs () {
			const context = require.context('~/static/img/dashboard/designs', true, /\.png$/)
			return context.keys().map(k => k.split('/')[1])
		}
	}
}
</script>
