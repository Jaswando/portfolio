<template>
	<div class="flex flex-col min-h-screen">
		<page-header/>
		<div class="flex-1"><nuxt/></div>
		<page-footer/>
		<back-to-top>
			<div class="bg-blue w-12 h-12 rounded flex">
				<img class="w-4 m-auto" src="~/assets/img/back-to-top.png">
			</div>
		</back-to-top>
	</div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'
import BackToTop from 'vue-backtotop'
export default {
	components: {PageHeader, PageFooter, BackToTop}
}
</script>