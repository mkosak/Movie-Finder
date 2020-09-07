import Vue from 'vue';
import Vuex from 'vuex';
import API from './../api.js';

Vue.use(Vuex);

// initial state
const state = () => ({
  isLoading: false,
  form: {},
  movies: [],
  resultsHistory: []
});

// getters
const getters = {
  getLoading: (state) => {
    return state.isLoading;
  },
  getSearchTerm: (state) => {
    return state.form.searchTerm;
  },
  getMovies: (state) => {
    return state.movies;
  },
  getResultsHistory: (state) => {
    return state.resultsHistory;
  }
};

// actions
const actions = {
  addLoading({ commit }, isLoading) {
    commit('setLoading', isLoading);
  },
  addForm({ commit }, form) {
    commit('setForm', form);
  },
  async searchMovies({ commit }, term) {
    const res = await API.get(`?s=${term}`);

    commit('setMovies', res.data.Search);
  },
  addResultsHistory({ commit, getters }, results) {
    commit('setResultsHistory', { term: getters.getSearchTerm, results });
  },
};

// mutations
const mutations = {
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setForm(state, form) {
    state.form = Object.assign({}, state.form, form);
  },
  setMovies(state, movies) {
    state.movies = movies;
  },
  setResultsHistory(state, history) {
    console.log('history', history);
    state.resultsHistory.push({ term: history.term, results: history.results });
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
