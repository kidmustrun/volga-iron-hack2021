
<template>
  <div id="app">
    <Header />
    <Title title="Домики на берегу Каспийского моря" image="houses.jpeg"/>
    <House />
<router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Title from "../components/Title.vue"
import House from "../components/House.vue"
export default{
    components:{
        Title,
        House
    }
};
</script>