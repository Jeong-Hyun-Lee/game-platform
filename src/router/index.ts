import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainView from '../views/main/MainView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "detail" */ '../views/detail/DetailView.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () =>
      import(/* webpackChunkName: "terms" */ '../views/terms/TermsView.vue'),
  },
  {
    path: '/info',
    name: 'service-info',
    component: () =>
      import(
        /* webpackChunkName: "serviceInfo" */ '../views/services/ServiceInfoView.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
