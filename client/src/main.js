import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss' // global css

import App from './App.vue'
import router from './router'

Vue.use(Element, {
    size: 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(router)

new Vue({
    el: '#app',
    router,
    template: "<App/>",
    components: { App },
    render: h => h(App)
})