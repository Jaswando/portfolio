<template>
	<div class="container mx-auto px-4 py-10 flex border-t">
		<div class="mr-auto">
			<p class="font-medium text-xl mb-1">Say Hello</p>
			<p>jason.bird55@gmail.com</p>
		</div>
		<a v-for="l in links" :key="l.icon" target="_blank" :href="l.url" class="ml-2">
			<img class="h-8 w-8" :src="`/portfolio/img/${l.icon}.png`">
		</a>
	</div>
</template>

<script>
export default {
	data: () => ({
		links: [
			{url: 'https://dribbble.com/Jaswando', icon: 'dribble'},
			{url: 'https://www.linkedin.com/in/jbird55/', icon: 'linkedin'}
		]
	})
}
</script>
