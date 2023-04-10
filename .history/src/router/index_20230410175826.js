import { createRouter, createWebHashHistory,creaye } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import CapsuleView from '../views/CapsuleView.vue'
import CollectivityView from '../views/CollectivityView.vue'

import HelpCenter from '../components/help/HelpCenter.vue'
import HelpDatailMsg from '../components/help/HelpDatailMsg.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (help.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
    component: HelpView,
    children: [
      {
        path: '',
        name: 'helpAll',
        component: HelpCenter
      },
      {
      path: 'detail',
      name: 'helpDetail',
      component: HelpDatailMsg,
      // beforeEnter: (to, from, next) => {
      // }
    }
  ]
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
