<template>
<div class="hero d-flex">
<span class="slogan">«Каспийский Лотос» - <br>база отдыха в <br>живописном месте</span>
</div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
<style scoped>
.hero{
    background: url("~@/assets/hero.jpg") no-repeat center 20%;
    background-size: cover;
    height: calc(100vh - 115px);
    color: white;
}
.slogan{
    font-size:max(1.5em, min(3.5em, calc(100vw * 4 / 75)));
    white-space: nowrap;
    margin: 10vh 5vw;
}
</style>
