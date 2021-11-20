
<template>
  <div id="app">
    <Header />
    <Pay />
<router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Pay from "../components/Pay.vue"
export default{
    components:{
        Pay
    }
};
</script>