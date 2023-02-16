import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';
import axios from 'axios';

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
      banners: [],
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    [INCREMENT_N](state, payload) {
      state.counter += payload.n;
    },
    addBannerData(state, payload) {
      state.banners = payload;
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
    nameInfo(state) {
      return `name:${state.name}`;
    },
    counterInfo(state) {
      return `counter:${state.counter}`;
    },
  },
  actions: {
    //1.参数问题
    incrementAction(context) {
      context.commit('increment');
    },
    //2.context的其他属性
    decrementAction({
      commit,
      dispatch,
      state,
      rootState,
      getters,
      rootGetters,
    }) {
      commit('decrement');
    },
    getHomeMultidata(context) {
      // axios.get('http://123.207.32.32:8080/home/multidata').then(res => {
      //   context.commit('addBannerData', res.data.data.banner.list);
      // });
      return new Promise((resolve, reject) => {
        axios
          .get('http://123.207.32.32:8080/home/multidata')
          .then(res => {
            context.commit('addBannerData', res.data.data.banner.list);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});

export default store;
