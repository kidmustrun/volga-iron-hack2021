<template>
  <div class="position-relative">
    <img src="@/assets/line_1.svg" class="position-absolute svg-back" />
    <h1 class="text-center pt-5">Что мы предлагаем?</h1>

    <div class="container mt-5">
      <div class="row row-flex align-items-center">
        <div class="col-md">
          <h3 class="text-center">ЛОВИСЬ РЫБКА БОЛЬШАЯ</h3>
          <p class="text-center">
            Нет ничего лучше, чем сидеть и наблюдать за красотами природы и
            звуками плещущихся рыб: сом, сазан, жерех, судак, щука, окунь, лещ,
            линь, карась, вобла, подводная охота.
          </p>
        </div>
        <div class="col-md">
          <img src="@/assets/fishes.png" />
        </div>
      </div>
      <div class="row row-flex align-items-center">
        <div class="col-md" :class="{ 'order-last': this.width <= 768 }">
          <img src="@/assets/houses.png" />
        </div>
        <div class="col-md">
          <h3 class="text-center">КОМФОРТАБЕЛЬНЫЕ ДОМИКИ</h3>
          <p class="text-center">
            Домики со всеми удобствами (оборудованная кухня, санузел,
            сплит-система). Также в пользование предоставляется беседка с
            костровой площадкой и мангалами.
          </p>
        </div>
      </div>
    </div>
    <img src="@/assets/line_2.svg" class="position-absolute svg-back" />
    <div class="container mb-5">
      <div class="row row-flex align-items-center">
        <div class="col-md">
          <h3 class="text-center">ОТДЫХ С ДРУЗЬЯМИ И СЕМЬЕЙ</h3>
          <p class="text-center">
            Здесь есть различные активности для всей компании: спортивные
            площадки, бассейн, теннисный корт, мангал, площадки для детей,
            водные прогулки на лодке и многое другое.
          </p>
        </div>
        <div class="col-md">
          <img src="@/assets/sports.png" />
        </div>
      </div>
      <div class="row row-flex align-items-center">
        <div class="col-md" :class="{ 'order-last': this.width <= 768 }">
          <img src="@/assets/lotos.png" />
        </div>
        <div class="col-md">
          <h3 class="text-center">ЭКСКУРСИИ НА ЛОТОСОВЫЕ ПОЛЯ</h3>
          <p class="text-center">
            Получите возможность взглянуть на прекрасное цветение лотосов в
            период с июля по сентябрь.
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <router-link class="btn_border align-right mt-3" to="/booking">
          Забронировать сейчас
        </router-link>
      </div>
    </div>
    <Cards />
    <div class="container">
      <h1 class="text-center pt-5">Для детей</h1>
      <div class="row row-flex align-items-center">
        <div class="col-md-4" :class="{ 'order-last': this.width <= 768 }">
          <img src="@/assets/kids.png" />
        </div>
        <div class="col-md-7">
          <p class="text-center">
            В Каспийском лотосе для отдыхающих с детьми предоставлены спортивные
            (баскетбол и волейбол) и детские площадки, также есть возможность
            пребывания с домашними питомцами. А захватывающие прогулки на лодках
            с семьей принесут бурю положительных эмоций.
          </p>
          <p class="text-center">
            Нахождение на свежем воздухе положительно влиянии на здоровье
            ребёнка. А физическая активность в сочетании с прогулкой на природе
            подарит детям положительные эмоции.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
export default {
  name: "Main",
  data() {
    return { width: null };
  },
  components: {
    Cards,
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  },
};
</script>
<style scoped>
.row-flex {
  display: flex;
  flex-flow: row wrap;
}
.col-md, .col-md-8 p {
  font-size: max(1em, min(1.5em, calc(100vw * 4 / 75)));
}
img {
  max-width: 100%;
  height: auto;
  max-height: 70%;
  display: block;
}
.svg-back {
  z-index: -100;
  width: 100vw;
}
.btn_border {
  padding: 12px 24px;
  border: solid 2px #7e7d8c;
  color: #322d3a;
  background: transparent;
  font-size: 20px;
  text-decoration: none;
  transition: ease 0.5s;
}
.btn_border:hover {
  border: solid 2px #322d3a;
  color: #fff;
  background: #322d3a;
  transition: ease 0.5s;
}
</style>
