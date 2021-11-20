<template>
  <div>
    
    <Hero />
    <Main />
    
  </div>
</template>

<script>

import Main from "../components/Main.vue";
import Hero from "../components/Hero.vue"
export default {
  name: "Home",
  components: {
      Hero,
    Main,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
</style>
