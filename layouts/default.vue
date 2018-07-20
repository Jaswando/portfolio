<template>
	<div class="flex flex-col min-h-screen">
		<page-header/>
		<div class="flex-1"><nuxt/></div>
		<page-footer/>
	</div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'
export default {
	components: {PageHeader, PageFooter}
}
</script>