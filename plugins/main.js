import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import VueImg from 'v-img'
import Gallery from '~/components/generic/Gallery'
import Hero from '~/components/generic/Hero'
import Paragraph from '~/components/generic/Paragraph'
import TextSection from '~/components/generic/TextSection'
Vue.use(VueObserveVisibility)
Vue.use(VueImg)
Vue.component('gallery', Gallery)
Vue.component('hero', Hero)
Vue.component('paragraph', Paragraph)
Vue.component('text-section', TextSection)
// Global mixin
Vue.mixin({
	computed: {
		baseImgUrl () { return process.env.baseImgUrl }
	}
})