export const state = () => ({
	isMenuExpanded: false
})

export const mutations = {
	setIsMenuExpanded (state, bool) {
		state.isMenuExpanded = bool
	}
}