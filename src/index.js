import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import routes from './router/router';
import Echo from 'laravel-echo';
window.io = require('socket.io-client');
// https://juejin.im/post/5b9dee8ff265da0afe62d1dd
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

Vue.use(VueRouter);

Vue.prototype.$ajax = axios;

Vue.myGlobalMethod = function () {
    console.log('global');
};

const root = document.createElement('div');
document.body.appendChild(root);

const router = new VueRouter({
    routes,
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    console.log(to, from);
    next();
});

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
