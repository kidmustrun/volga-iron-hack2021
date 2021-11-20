<template>
  <div id="app">
    <Header/>
    <Hero/>
    <Main/>
  
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Main
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Playfair Display', serif;
}
</style>
