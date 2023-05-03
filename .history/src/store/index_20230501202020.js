import { createStore } from 'vuex'

export default createStore({
  state: {
    loginUser:[]
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
    setLoginUser(){state.loginUser = value}
    

  },

  modules: {
  }
})
