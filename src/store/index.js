import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
    jokeType: "Normal",
  },

  mutations: {
   changeJoke: function(state,joke){
   state.joke = joke;
   },
  jokeType: function(state,type){
    state.jokeType = type;
  }
  },

  actions: {

  },

  getters: {
    makeJokeLoud: function (state) {
      return state.joke.toUpperCase();
    },
    makeSnakeJoke: function (state) {
      return state.joke.replaceAll(" ", "_");
    },
    makeNormalJoke: function (state) {
      return state.joke
    },
  },
});
