<template>
  <div class="container mt-5">
    <h1>Бронирование</h1>
    <div class="container container-form p-5 text-center">
      <h3>Выберите даты заезда и выезда</h3>
      <form class="text-left row container">
        <div class="col-md">
          <label for="start">Дата заезда</label><br />
          <input type="date" id="start" name="trip-end" />
        </div>
        <div class="col-md">
          <label for="start">Дата выезда</label><br />
          <input type="date" id="start" name="trip-end" />
        </div>
      </form>
      <button class="btn_border mt-5">Найти</button>
    </div>
    <h4 class="date">23 декабря -26 декабря</h4>
    <div class="select_houses">
      <h5 class="text-center">Выберите домик</h5>
      <div class="row">
               <div class="col-sm">
                  <img src="@/assets/room2.jpeg" />
                  <div class="info">
                    <p class="title">Двухместный домик</p>
                    <div class="price">
                      <p class="price_box">от 10 000 руб</p>
                      <router-link class="btn_border align-right mt-3" to="/view_house">
                        Выбрать
                      </router-link>
                    </div>
                  </div>
               </div>
              <div class="col-sm">
                 <img src="@/assets/room1.jpeg" />
                 <div class="info">
                    <p class="title">Четырехместный домик</p>
                    <div class="price">
                      <p class="price_box">от 15 000 руб</p>
                      <router-link class="btn_border align-right mt-3" to="/view_house">
                        Выбрать
                      </router-link>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Booking",

};
</script>

<style>
.container-form {
  background-color: #fbfbfb;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
}
input{
    width: 70%;
    border: 1px solid rgba(162, 171, 177, 0.7);
    height: 6vh;
    padding: 2%;
}
.btn_border {
  padding: 12px 10%;
  border: none;
  color: #fff;
  background: #C9B158;
  font-size: 20px;
  transition: ease 0.5s;
}
.btn_border:hover {
  background: #b89e40;
  transition: ease 0.5s;
}
.date{
  margin-top: 13vh;
  font-weight: bold;
  font-size: 24px;
}
h5{
  margin-top: 8vh;
  font-weight: bold;
  font-size: 24px;
}
.row{
   margin-top: 7vh;
    display: flex;
    align-items: center;
    row-gap: 3vh;
    column-gap: 5vh;
}
.row img {
  margin:auto auto;
  max-width: 100%;
  height: auto;
  max-height: 70%;
  display: block;
}
.info{
  padding-right: 3vh;
  padding-left: 5vh;
  padding-top: 3vh;
  height: 21vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

}
.title{
  font-weight: bold;
  font-size: 1.2rem;
}
.price{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn_border {
  margin-top: 0;
  padding: 8px 23px;
  border: none;
  color: white;
  background: #C9B158;
  font-size: 18px;
  text-decoration: none;
  transition: ease 0.5s;
}
.btn_border:hover {
  border: none;
  color: #fff;
  background: #322d3a;
  transition: ease 0.5s;
}
.price_box{
  font-weight: bold;
  font-size: 24px;
}
@media (max-width: 760px){
  .price{
    flex-direction: column;
    justify-content: center;
  }
  .row{
    flex-direction: column;
  }
  .info{
    height: 26vh;
  }
  .title, .date{
    text-align: center;
  }
}
</style>
