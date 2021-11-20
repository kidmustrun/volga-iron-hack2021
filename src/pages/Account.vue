<template>
  <div>
    <Title title="Личный кабинет" image="contacts_hero.jpg" />
    <div class="container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Мой профиль
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Мои бронирования
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Имя: </b>Ирина</li>
        <li class="list-group-item"><b>Фамилия: </b>Громова</li>
        <li class="list-group-item"><b>Отчество: </b>Павловна</li>
        <li class="list-group-item"><b>Пол: </b>Женский</li>
        <li class="list-group-item"><b>Дата рождения: </b>13.01.2002</li>
        <li class="list-group-item"><b>Почта: </b>parakerta@mail.ru</li>
        <li class="list-group-item"><b>Номер телефона: </b>89206474004</li>
      </ul>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Дата заезда</th>
      <th scope="col">Дата выезда</th>
      <th scope="col">Тип домика</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>26.08.2020</td>
      <td>4.09.2020</td>
      <td>Стандарт</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>29.10.2020</td>
      <td>7.10.2020</td>
      <td>ВИП</td>
    </tr>
    <tr>
      <th scope="row">3</th>
       <td>14.04.2021</td>
      <td>23.04.2021</td>
      <td>Стандарт</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script src="https://yastatic.net/jquery/3.3.1/jquery.min.js"></script>
<script>
$("#product a").click(function (e) {
  e.preventDefault();
  $(this).tab("show");
});
</script>
<script>
import Title from "../components/Title.vue";
export default {
  name: "Account",
  components: {
    Title,
  },
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
