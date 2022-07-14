import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    locale: 'KOR'
  },
  getters: {
    getLocale (state) {

      return state.locale;
    }
  },
  mutations: {
    setENG (state) {
      document.cookie = "b_locale=ENG;";
      state.locale = 'ENG';
    },
    setKOR (state) {
      document.cookie = "b_locale=KOR;";
       state.locale = 'KOR';
    }
  }
})

export default store