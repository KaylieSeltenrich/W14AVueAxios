<template>
  <div>
<h3> {{ joke }} </h3>
  </div>
</template>

<script>
export default {
  name: "loud-joke",

  computed: {
    joke : function(){
     return this.$store.getters.makeJokeLoud
    }
  }
};
</script>

<style scoped>
</style>
