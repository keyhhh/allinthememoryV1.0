import { createStore } from 'vuex'

export default createStore({
  state: {
    whichPage:2,
  },
  getters: {
  },  
  actions: {
    changeWhichPage(context,value){
      context.commit('CHANGEWHICHPAGE',value)
    }
  },
  mutations: {
    CHANGEWHICHPAGE(state,value){
      state.whichPage = value
    }

  },

  modules: {
  }
})
