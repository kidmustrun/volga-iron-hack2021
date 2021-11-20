<template>
  <div
    class="hero d-flex"
    :style="{ backgroundImage: 'url(' + require('@/assets/' + image) + ')' }"
  >
    <span class="slogan">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ['title', 'image'],
};
</script>
<style scoped>
.hero {
    background: center;
  background-size: cover;
  height: 40vh;
  color: white;
}
.slogan {
  font-size: max(1.5em, min(3.5em, calc(100vw * 4 / 75)));
  white-space: nowrap;
  margin: 10vh 5vw;
  width: 80vw;
}
</style>
