<template>
    <div>
  <button id="get-joke" @click="getJoke"> Click here for a Joke!</button>
  <button id="loud-joke" @click="updateType('Loud')"> Make Joke Loud!</button>
  <button id="snake-joke" @click="updateType('Snake')"> Make Joke Snake!</button>
  <button id="normal-joke" @click="updateType('Normal')"> Make Joke Normal!</button>
    </div>
</template>

<script>

import axios from "axios"

    export default {
       name: "joke",
     
    computed: {
        joke() {
            return this.$store.state.joke
        }
    },
      methods: {
         getJoke: function() {
          axios.request({
              url: "https://geek-jokes.sameerkumar.website/api?format=json",
              method: "GET"
          }).then((response) => {
              console.log(response)
              this.$store.commit('changeJoke', response.data.joke)
          }).catch((error) => {
              console.log(error)
          })
         },

         updateType: function(type) {
            this.$store.commit('jokeType', type)
         }
         
      },   
    }
</script>

<style scoped>

</style>