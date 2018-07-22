import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import routes from './router/router'

Vue.use(VueRouter)

const root = document.createElement('div')
document.body.appendChild(root)

const router = new VueRouter({
	routes,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app")

