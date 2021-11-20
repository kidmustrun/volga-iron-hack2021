<template>
  <div>
    
    <Title title="Контакты" image="contacts_hero.png"/>
    <ContactsInfo/>
  </div>
</template>

<script>

import Title from "../components/Title.vue"
import ContactsInfo from "../components/ContactsInfo.vue"
export default {
  name: "Contacts",
  components: {
    Title,
    ContactsInfo
  }
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
