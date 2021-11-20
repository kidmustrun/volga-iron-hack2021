<template>
  <div>
    <Header />
    <Hero />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    Main,
    Footer,
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
