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
}
input{
    width: 70%;
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
</style>
