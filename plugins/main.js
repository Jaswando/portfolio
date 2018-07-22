import Vue from 'vue'
import Hero from '~/components/Hero'
Vue.component('hero', Hero)
// Global mixin
Vue.mixin({
	computed: {
		baseImgUrl () { return process.env.baseImgUrl }
	}
})