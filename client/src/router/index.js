import Vue from 'vue'
import Router from 'vue-router'

let routes = require('./routes')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: routes.default,
})