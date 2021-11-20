
<template>
  <div id="app">
    <Header />
    <SelectHouse />
<router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import SelectHouse from "../components/SelectHouse.vue"
export default{
    components:{
        SelectHouse
    }
};
</script>