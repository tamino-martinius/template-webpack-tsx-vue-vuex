import vue from 'vue';
import vuex, { StoreOptions } from 'vuex';

vue.use(vuex);

export default new vuex.Store({
  modules: {
    foo: {
      namespaced: true,
      state: {
        name: 'Vuex',
      },
      mutations: {
        setName(state, name: string) {
          state.name = name;
        },
      },
      actions: {
        setName({ commit }, name: string) {
          commit('setName', name);
        },
      },
      getters: {
        name(state) {
          return state.name;
        },
      },
    },
    bar: {
      state: {
        enthusiasm: 10,
      },
      mutations: {
        add(state, count) {
          state.enthusiasm += count;
        },
        decrement(state) {
          if (state.enthusiasm > 1) {
            state.enthusiasm -= 1;
          }
        },
      },
      actions: {
        increment({ commit }) {
          commit('add', 1);
        },
        add({ commit }, count) {
          commit('add', count);
        },
        decrement({ commit }) {
          commit('decrement');
        },
      },
      getters: {
        exclamationMarks(state) {
          return Array(state.enthusiasm + 1).join('!');
        },
      },
    },
  },
});
