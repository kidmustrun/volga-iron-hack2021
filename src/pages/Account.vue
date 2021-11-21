<template>
  <div>
    <Title title="Личный кабинет" image="contacts_hero.jpg" />
    <div class="container">
      <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
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
            <li class="list-group-item"><b>Имя: </b>{{ user.first_name }}</li>
            <li class="list-group-item">
              <b>Фамилия: </b>{{ user.second_name }}
            </li>
            <li class="list-group-item">
              <b>Отчество: </b>{{ user.last_name }}
            </li>
            <li class="list-group-item"><b>Пол: </b>{{ user.gender }}</li>
            <li class="list-group-item"><b>Почта: </b>{{ user.email }}</li>
            <li class="list-group-item">
              <b>Номер телефона: </b>{{ user.phone }}
            </li>
          </ul>
          <router-link v-if="admin" to="/admin"
            >Панель администратора</router-link
          >
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <table v-if="bookings" class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Дата заезда</th>
                <th scope="col">Дата выезда</th>
                <th scope="col">Сумма</th>
                <th scope="col">Статус</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in bookings" :key="booking.id">
                <th scope="row">{{ booking.id }}</th>
                <td>{{ booking.start }}</td>
                <td>{{ booking.end }}</td>
                <td>{{ booking.summ }}</td>
                <td><span v-if="booking.available"> Забронировано </span><span v-else>Отменено</span></td>
                <td>
                  <button  v-if="booking.available" @click="cancelReserv(booking.id)">Отменить</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 v-else class="mt-3">У Вас еще нет бронирований.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import { getSomething } from "../api/get.js";
import { postSomething } from "../api/post";

export default {
  name: "Account",
  components: {
    Title,
  },
  data() {
    return {
      user: null,
      bookings: [],
    };
  },
  computed: {
    admin: function () {
      if (this.user.roles[0] === "admin") return true;
      else return false;
    },
  },
  created() {
    getSomething("api/v1/user").then((response) => {
      this.user = response.data.data;
    });
    getSomething("api/v1/user/myroom").then(
      (response) => (this.bookings = response.data)
    );
    console.log(this.bookings + "bookings");
  },
  methods: {
    cancelReserv(id) {
      postSomething(`api/v1/user/myroom/${id}`, id).then(() => {
        location.reload();
        console.log("Бронь удалена");
      });
    },
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
