import Vue from 'vue'
import Hero from '~/components/generic/Hero'
import Paragraph from '~/components/generic/Paragraph'
Vue.component('hero', Hero)
Vue.component('paragraph', Paragraph)
// Global mixin
Vue.mixin({
	computed: {
		baseImgUrl () { return process.env.baseImgUrl }
	}
})