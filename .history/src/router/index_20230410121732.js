import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CapsuleView from '../views/CapsuleView.vue'
import CollectivityView from '../views/CollectivityView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (help.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
    children: {
      path:
    }
  },
  {
    path: '/capsule',
    name: 'capsule',
    component: CapsuleView
  },
  {
    path: '/collectivity',
    name: 'collectivity',
    component: CollectivityView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
