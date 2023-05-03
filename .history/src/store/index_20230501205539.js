import { createStore } from 'vuex'

export default createStore({
  state: {
    //登陆用户的数据
    loginUser: {}
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
    setLoginUser(value, state) { state.loginUser = value }


  },

  modules: {
  }
})
