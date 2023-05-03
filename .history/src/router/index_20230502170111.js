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
import collectivityDetail from '../components/collectivity/CollectivityDetail.vue'

import { login } from "@/axios/home";
const routes = [
  {// 登录
    path: '/',
    name: 'login',
    component: LoginView,
    meta: { requireAuthToLogin: true }
  },
  {// 注册
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requireAuth: true }
  },


  {// 主界面路由,我的记录界面
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requireAuth: true }
  },

  {// 公开记录界面
    path: '/public',
    name: 'public',
    component: PublicView,
    meta: { requireAuth: true }
  },

  {// 求助信息界面路由
    path: '/help',
    name: 'help',
    // component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
    component: HelpView,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'helpAll',
        component: HelpCenter,
        meta: { requireAuth: true }
      },
      {
        path: 'detail',
        name: 'helpDetail',
        component: HelpDatailMsg,
        meta: { requireAuth: true }
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
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'capsuleAll',
        components: {
          capsuleLeft: CapsuleLeftDefault,
          capsuleCenter: CapsuleCenterList,
          meta: { requireAuth: true }
        }
      },
      {
        path: 'detail',
        name: 'capsuleDetail',
        components: {
          capsuleLeft: CapsuleLeftExplicit,
          capsuleCenter: CapsuleOpenedMsg,
          meta: { requireAuth: true }
        }
      }
    ]
  },

  {//集体记忆界面路由
    path: '/collectivity',
    name: 'collectivity',
    component: CollectivityView,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'CollectivityAll',
        component: CollectivityMain,
        meta: { requireAuth: true }
      },
      {
        path: 'detail',
        name: 'CollectivityDetail',
        component: collectivityDetail,
        meta: { requireAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  /**
   *1.判断是否跳到登陆界面 ，再判断是否存在用户的local storage，==>存在(判断local storage正确否)就到/home，并保存信息到vuex   ==>不存在放行
   *2.判断是否为其他界面，再判断是否存在用户的local storage，==>存在(判断local storage正确否)就到放行，  ==>不存在跳到登录界面
  */
  if (to.meta.requireAuthToLogin) {
    if (localStorage.getItem('userInfo')) {
      //添加一个判断userInfo的正确性
      alert("您已经有账号的登录")
      next({
        path: '/home'
      });
    }
    else {
      next();
    }
  } else {
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
      //判断本地是否存在access_token
      if (localStorage.getItem('userInfo')) {
        //添加一个判断userInfo的正确性
        next();
      } else {
        if (to.path === '/' || to.path === '/register') {
          next();
        } else {
          alert('请先进行登录！')
          next({
            path: '/'
          })
        }
      }
    }
    else {
      next();
    }
  }
});


export default router
