<template>
  <div>
<h3> {{ joke }} </h3>
  </div>
</template>

<script>
export default {
  name: "normal-joke",

  computed: {
    joke : function(){
     return this.$store.getters.makeNormalJoke
    }
  }
};
</script>

<style scoped>
</style>
