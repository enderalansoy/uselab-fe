
import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

const URL = 'https://automation.uselab.com/api/fe-test/mood';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: '',
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    async loadMessage({ commit }, mood) {
      try {
        const response = await axios.post(URL, { mood });
        commit('SET_MESSAGE', response.data.data.text);
      } catch (error) {
        commit('SET_MESSAGE', 'There was an error :(...');
      }
    }
  }
});
