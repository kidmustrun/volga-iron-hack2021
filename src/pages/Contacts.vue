<template>
  <div>
    
    <Title title="Контакты" image="contacts_hero.png"/>
    
  </div>
</template>

<script>

import Title from "../components/Title.vue"
export default {
  name: "Home",
  components: {
    Title
  },
  props: ["title", "image"],
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
