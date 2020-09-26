<template>
  <div>
<h3> {{ joke }} </h3>
  </div>
</template>

<script>
export default {
  name: "snake-joke",

  computed: {
    joke : function(){
     return this.$store.getters.makeSnakeJoke
    }
  }
};
</script>

<style scoped>
</style>
