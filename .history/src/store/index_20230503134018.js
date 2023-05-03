import { createStore } from 'vuex'

export default createStore({
  state: {
    //登陆用户的数据
    loginUser: {},
    //用户对象，登录就创建，用于后期连接后端查找数据
    user:{
      userId:""
    }
  },
  getters: {
  },
  actions: {
    // changeWhichPage(context,value){//用来判断界面右侧出现那三个按钮
    //   context.commit('CHANGEWHICHPAGE',value)
    // }
  },
  mutations: {
    // CHANGEWHICHPAGE(state,value){//用来判断界面右侧出现那三个按钮
    //   state.whichPage = value
    // }
    //存储登录用户的数据
    SetLoginUser(context,value) { context.loginUser = value },
    //存储userID的对象
    SetUser(context,value) { context.user.userId = value },

  },

  modules: {
  }
})
