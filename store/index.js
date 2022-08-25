import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    locale: 'KOR',
    connect: 'no-connect',
  },
  getters: {
    getLocale (state) {
      return state.locale;
    },
    getConnect (state) {
      return state.connect;
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
    },
    setConnect (state) {
      document.cookie = "b_connect=is-connect";
      state.connect = 'b_connect=is-connect';
    },
    setNoConnect (state) {
      document.cookie = "b_connect=no-connect";
      state.connect = 'b_connect=no-connect';
    }
  }
})

export default store