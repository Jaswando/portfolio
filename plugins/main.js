import Vue from 'vue'
import VueImg from 'v-img'
import Hero from '~/components/generic/Hero'
import Paragraph from '~/components/generic/Paragraph'
import TextSection from '~/components/generic/TextSection'
Vue.use(VueImg)
Vue.component('hero', Hero)
Vue.component('paragraph', Paragraph)
Vue.component('text-section', TextSection)
// Global mixin
Vue.mixin({
	computed: {
		baseImgUrl () { return process.env.baseImgUrl }
	}
})