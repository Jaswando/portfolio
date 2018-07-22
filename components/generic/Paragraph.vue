<template>
	<div :class="classProp">
		<p class="mb-3 font-medium text-2xl">{{header}}</p>
		<p>{{text}}</p>
	</div>
</template>

<script>
export default {
	props: {
		classProp: {type: String, default: 'mb-12'},
		header: {type: String, required: true},
		text: {type: String, required: true}
	}
}
</script>
