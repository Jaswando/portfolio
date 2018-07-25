<template>
	<div :class="classProp">
		<p v-if="header" class="mb-3 font-medium text-2xl">{{header}}</p>
		<p class="leading-normal">{{text}}</p>
	</div>
</template>

<script>
export default {
	props: {
		classProp: {type: String, default: 'mb-12'},
		header: {type: String},
		text: {type: String, required: true}
	}
}
</script>
