<template>
  <div class="container">
    <div class="block_back d-flex">
      <img src="@/assets/back.png" alt="" />
      <router-link class="btn align-right mt-3" to="/booking"
        >НАЗАД</router-link
      >
    </div>
    <div class="view">
      <img src="@/assets/room1.jpeg" alt="" />
      <div class="desc">
        <h5 class="title_house">Двухместный домик:</h5>
        <div class="services">
          <p>• санузел</p>
          <p>• сплит-система</p>
          <p>• кухня с холодильником</p>
          <p>• электроплита и набор посуды</p>
        </div>
        <div class="desc_price">
          <p class="price">2000 руб</p>
        </div>
        <h5 class="title_house">Дополнительные услуги:</h5>
        <div class="dop_services">
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Трехразовое питание
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Аренда катера
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Прокат инвентаря для рыбалки
              </label>
            </div>
          </div>
          <div class="services_price">
            <p class="price">2000 руб</p>
            <p class="price">2000 руб</p>
            <p class="price">2000 руб</p>
          </div>
        </div>
      </div>
    </div>
    <p class="type">Двухместный домик + трёхразовое питание + аренда катера</p>
    <h3 class="itog"><b>Итог: 5 000 руб.</b></h3>
    <div class="d-flex justify-content-center">
      <router-link class="btn_border align-right mt-3" to="/booking">
        Забронировать
      </router-link>
    </div>
  </div>
</template>
<script>
import { getSomething } from '../api/get';
export default {
  name: "SelectHouse",
  created(){
      getSomething(`rooms/${this.$route.params.id}`).then((resp)=> this.room = resp.data
      )
  }
};
</script>
<style scoped>
img {
  margin-top: 2vh;
  max-width: 50%;
  height: auto;
  max-height: 70%;
  display: block;
}
.block_back {
  margin-top: 10vh;
  align-items: center;
  width: 10vh;
  justify-content: flex-start;
}
.btn {
  margin: auto auto;
  font-size: 1.6rem;
}
.view {
  width: 100%;
  align-items: center;
  margin-top: 3vh;
  margin-bottom: 5vh;
  padding-bottom: 3vh;
  display: flex;
  column-gap: 8vh;
  border-bottom: solid black 1px;
}
.view img {
  width: 42%;
  height: auto;
}
.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.title_house {
  font-size: 1.7rem;
}
.services p,
label,
.type {
  font-size: 1.2rem;
}
.desc_price {
  display: flex;
  justify-content: flex-end;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
}
.dop_services {
  display: flex;

  justify-content: space-between;
  width: 100%;
}
.desc {
  width: 100%;
}
label {
  margin-bottom: 3vh;
}
.justify-content-center {
  margin-top: 5vh;
}
@media (max-width: 1090px) {
  .view {
    flex-direction: column;
  }
  .view img {
    width: 100%;
  }
  .btn_border {
    padding: 3% 7%;
  }
}
</style>