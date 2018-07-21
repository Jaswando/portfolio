<template>
	<div></div>
</template>

<script>
export default {
	created () {
		let segmentCount = 1
		let l = window.location
		l.replace(
			l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
			l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
			l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
			(l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
			l.hash
		)
		(function (l) {
			if (l.search) {
				let q = {}
				l.search.slice(1).split('&').forEach(v => {
					let a = v.split('=')
					q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&')
				})
				if (q.p !== undefined) {
					window.history.replaceState(null, null,
						l.pathname.slice(0, -1) + (q.p || '') +
						(q.q ? ('?' + q.q) : '') +
						l.hash
					)
				}
			}
		}(window.location))
	}
}
</script>
