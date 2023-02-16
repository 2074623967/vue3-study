import { createStore } from 'vuex';
import user from './modules/user';
import home from './modules/home';

const store = createStore({
  state() {
    return {
      rootCounter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    },
  },
  getters: {},
  actions: {},
  modules: {
    home,
    user,
  },
});

export default store;
