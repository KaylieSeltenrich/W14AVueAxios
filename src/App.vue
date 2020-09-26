<template>
  <div id="app">
   <joke-button> </joke-button>
   <normal-joke v-if="$store.state.jokeType=='Normal'"> </normal-joke>
   <loud-joke v-else-if="$store.state.jokeType=='Loud'"> </loud-joke>
   <snake-joke v-else-if="$store.state.jokeType=='Snake'"> </snake-joke>
   
  
  </div>
</template>

<script>
import JokeButton from './components/jokebutton.vue'
import LoudJoke from './components/loudjoke.vue'
import NormalJoke from './components/normaljoke.vue'
import SnakeJoke from './components/snakejoke.vue'

export default {
  name: "App",
  components: {
   JokeButton,
   LoudJoke,
   NormalJoke,
   SnakeJoke
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
