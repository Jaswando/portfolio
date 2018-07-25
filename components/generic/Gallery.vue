<template>
	<div class="container">
		<div class="flex flex-wrap -mx-4">
			<div v-for="i in imgs" :key="page+folder+i" :class="`sm:w-1/2 md:w-1/${colSize} px-4 mb-12`">
				<img v-img="{group:folder,cursor:'zoom-in'}" :src="`${baseImgUrl+page}/${folder}/${i}`">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgs: {type: Array, required: true},
		page: {type: String, required: true},
		folder: {type: String, required: true},
		colSize: {type: String, default: '4'}
	}
}
</script>
