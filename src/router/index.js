import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapView from "@/views/MapView";
import TestView from "@/views/TestView";
import ResourcesView from "@/views/ResourcesView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
      path: '/resources',
      name: 'resources',
      component: ResourcesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
