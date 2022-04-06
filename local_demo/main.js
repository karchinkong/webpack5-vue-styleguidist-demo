import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import bestView from '../src/index';
import Demo from './pages/Demo.vue';

Vue.use(VueRouter);
Vue.use(bestView);
// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/demo'
        },
        {
            path: '/demo',
            component: Demo
        }
    ]
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
