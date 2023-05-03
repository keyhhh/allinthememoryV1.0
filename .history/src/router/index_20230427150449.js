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
const routes = [
  {// 登录
    path: '/',
    name: 'login',
    component: LoginView,
    meta:{requireAuth:true}
  },
  {// 注册
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta:{requireAuth:true}
  },


  {// 主界面路由,我的记录界面
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{requireAuth:true}
  },

  {// 公开记录界面
    path: '/public',
    name: 'public',
    component: PublicView,
    meta:{requireAuth:true}
  },

  {// 求助信息界面路由
    path: '/help',
    name: 'help',
    // component: () => import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
    component: HelpView,
    meta:{requireAuth:true},
    children: [
      {
        path: '',
        name: 'helpAll',
        component: HelpCenter,
        meta:{requireAuth:true}
      },
      {
        path: 'detail',
        name: 'helpDetail',
        component: HelpDatailMsg,
        meta:{requireAuth:true}
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
    meta:{requireAuth:true},
    children: [
      {
        path: '',
        name: 'capsuleAll',
        components: {
          capsuleLeft: CapsuleLeftDefault,
          capsuleCenter: CapsuleCenterList,
          meta:{requireAuth:true}
        }
      },
      {
        path: 'detail',
        name: 'capsuleDetail',
        components: {
          capsuleLeft: CapsuleLeftExplicit,
          capsuleCenter: CapsuleOpenedMsg,
          meta:{requireAuth:true}
        }
      }
    ]
  },

  {//集体记忆界面路由
    path: '/collectivity',
    name: 'collectivity',
    component: CollectivityView,
    meta:{requireAuth:true},
    children: [
      {
        path: '',
        name: 'CollectivityAll',
        component: CollectivityMain,
        meta:{requireAuth:true}
      },
      {
        path: 'detail',
        name: 'CollectivityDetail',
        component: collectivityDetail,
        meta:{requireAuth:true}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(localStorage.getItem('userInfo')){ //判断本地是否存在access_token
      next();
    }else {
     if(to.path === '/'){
        next();
      }else {
        alert('请先进行登录！')
        next({
          path:'/login'
        })
      }
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if(localStorage.getItem('userInfo')){
      alert('您已经登录了，如果想要登录其他账号，请先退出当前账号！')
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});


export default router
