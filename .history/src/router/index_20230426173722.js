//createWebHashHistory：代表着使用hash模式，，，，createWebHistory：history模式
import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'//登录
import RegisterView from '../views/RegisterView.vue'//注册
import HomeView from '../views/HomeView.vue'
import PublicView from '../views/PublicView.vue'
import HelpView from '../views/HelpView.vue'
import CapsuleView from '../views/CapsuleView.vue'
import CollectivityView from '../views/CollectivityView.vue'

import HelpCenter from '../components/help/helpCenter/HelpCenter.vue' //全部求助
import HelpDatailMsg from '../components/help/helpCenter/HelpDatailMsg.vue'//求助内容详情

import CapsuleCenterList from '../components/capsule/capsuleCenter/CapsuleCenterList.vue' //centerAll
import CapsuleLeftDefault from '../components/capsule/capsuleLeft/CapsuleLeftDefault.vue' //left default
import CapsuleOpenedMsg from '../components/capsule/capsuleCenter/CapsuleOpenedMsg.vue' //centerOne
import CapsuleLeftExplicit from '../components/capsule/capsuleLeft/CapsuleLeftExplicit.vue' //left explicit

import CollectivityMain from '../components/collectivity/CollectivityMain.vue'
const routes = [
  {// 登录
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {// 注册
    path: '/register',
    name: 'register',
    component: RegisterView,
  },


  {// 主界面路由,我的记录界面
    path: '/home',
    name: 'home',
    component: HomeView,
  },

  {// 公开记录界面
    path: '/public',
    name: 'public',
    component: PublicView,
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

  {// 记忆胶囊界面路由
    /*
      capsuleLeft: CapsuleLeftDefault,
      capsuleCenter: CapsuleCenterList
      */
    path: '/capsule',
    name: 'capsule',
    component: CapsuleView,
    children: [
      {
        path: '',
        name: 'capsuleAll',
        components: {
          capsuleLeft: CapsuleLeftDefault,
          capsuleCenter: CapsuleCenterList
        }
      },
      {
        path: 'detail',
        name: 'capsuleDetail',
        components: {
          capsuleLeft: CapsuleLeftExplicit,
          capsuleCenter: CapsuleOpenedMsg
        }
      }
    ]
  },

  {//集体记忆界面路由
    path: '/collectivity',
    name: 'collectivity',
    component: CollectivityView,
    children: [
      {
        path: '',
        name: 'CollectivityAll',
        component: HelpCenter
      },
      {
        path: 'detail',
        name: 'CollectivityDetail',
        component: HelpDatailMsg,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
