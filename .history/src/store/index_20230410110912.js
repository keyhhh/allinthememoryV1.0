import { createStore } from 'vuex'

export default createStore({
  state: {
    whichPage:2,
  },
  getters: {
  },  
  actions: {
    changeWhichPage(context,value){
      context.commit('',value)
    }
  },
  mutations: {
    CHANGEWHICHPAGE()

  },

  modules: {
  }
})
