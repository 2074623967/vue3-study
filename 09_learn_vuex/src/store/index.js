import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'why',
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  modules: {},
});

export default store;
