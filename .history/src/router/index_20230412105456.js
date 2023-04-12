import { createRouter, createWebHistory } from 'vue-router' //createWebHashHistory：代表着使用hash模式，，，，createWebHistory：history模式
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import CapsuleView from '../views/CapsuleView.vue'
import CollectivityView from '../views/CollectivityView.vue'

import HelpCenter from '../components/help/helpCenter/HelpCenter.vue'
import HelpDatailMsg from '../components/help/helpCenter/HelpDatailMsg.vue'
import CapsuleCenterList from '../components/capsule/capsuleCenter/CapsuleCenterList.vue'
import CapsuleOpenedMsg from '../components/capsule/capsuleCenter/CapsuleOpenedMsg.vue'

const routes = [
  {// 主界面路由
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {// 求助信息界面路由
    path: '/help',
    name: 'help',
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
      }
    ]
  },

  {// ji'yiu界面路由
    path: '/capsule',
    name: 'capsule',
    component: CapsuleView,
    children: [
      {
        path: '',
        name: 'capsuleAll',
        component: CapsuleCenterList
      },
      {
        path: 'detail',
        name: 'capsuleDetail',
        component: CapsuleOpenedMsg,
      }
    ]
  },

  {
    path: '/collectivity',
    name: 'collectivity',
    component: CollectivityView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router