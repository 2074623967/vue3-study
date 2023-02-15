import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'why',
      books: [
        { name: '深入Vuejs', price: 200, count: 3 },
        { name: '深入Webpack', price: 240, count: 5 },
        { name: '深入React', price: 130, count: 1 },
        { name: '深入Node', price: 220, count: 2 },
      ],
      disCount: 0.6,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price;
      }
      return totalPrice * getters.currentDiscount;
    },
    currentDiscount(state) {
      return state.disCount * 0.9;
    },
    totalPriceCountGreateN(state, getters) {
      return function (n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price;
          }
        }
        return totalPrice * getters.currentDiscount;
      };
    },
    nameInfo(state){
      return `name:${state.name}`
    },
    counterInfo(state){
      return `counter:${state.counter}`
    }
  },
  modules: {},
});

export default store;
