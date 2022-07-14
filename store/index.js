import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    locale: 'KOR'
  },
  mutations: {
    setENG (state) {
      state.locale = 'ENG';
    },
    setKOR (state) {
       state.locale = 'KOR';
    }
  }
})

export default store