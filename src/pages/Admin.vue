<template>
  <div>
    <h1>Панель администратора</h1>

    <div class="menu">
      <ul class="nav nav-tabs m-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#bookings"
            type="button"
            role="tab"
            aria-controls="bookings"
            aria-selected="true"
          >
            Брони
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#rooms"
            type="button"
            role="tab"
            aria-controls="rooms"
            aria-selected="false"
          >
            Номера
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#users"
            type="button"
            role="tab"
            aria-controls="users"
            aria-selected="false"
          >
            Пользователи
          </button>
        </li>
      </ul>
    </div>
<div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="bookings"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <table class="booking m-3">
        <thead>
          <tr>
            <th>ID брони</th>
            <th>ID клиента</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Отменить</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking.id" :class="{'bg-danger': !booking.available}">
            <td aria-label="ID брони">{{booking.id}}</td>
            <td aria-label="ID клиента">{{booking.user_id}}</td>
            <td aria-label="Сумма">{{booking.summ}}</td>
            <td><span v-if="booking.available"> Забронировано </span><span v-else>Отменено</span></td>
            <td  aria-label="Отменить"><button class="btn_border" v-if="booking.available" @click="cancelReserv(booking.id)">Отменить</button></td>
          </tr>
        </tbody>
      </table>
        </div>
        <div
          class="tab-pane fade"
          id="rooms"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
         <table class="booking m-3">
        <thead>
          <tr>
            <th>ID номера</th>
            <th>Описание</th>
            <th>Цена за ночь</th>
            <th>Заблокировать</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <td aria-label="ID номера">{{room.id}}</td>
            <td aria-label="Описание">{{room.room_name}}, {{room.about_room}}</td>
            <td aria-label="Цена за ночь">{{room.price_per_night}}</td>
            <td aria-label="Заблокировать"></td>
          </tr>
        </tbody>
      </table>
        </div>
        <div
          class="tab-pane fade"
          id="users"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
         <table class="booking m-3">
        <thead>
           <tr >
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" >
            <td aria-label="ID">{{user.id}}</td>
            <td aria-label="Имя">{{user.first_name}}</td>
            <td aria-label="Фамилия">{{user.second_name}}</td>
            <td aria-label="Удалить"></td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
  </div>
</template>
 
<script>
import { getSomething } from '../api/get';
import { postSomething } from '../api/post';
export default {
  name: "Admin",
  data(){
    return{
      rooms: [],
      bookings:[],
      users: []
    }
  },
  created(){
    getSomething('api/v1/admin/rooms').then((response) => this.rooms = response.data)
    getSomething('api/v1/admin/bookings').then((response) => this.bookings = response.data)
    getSomething('api/v1/admin/users').then((response) => this.users = response.data)
    console.log(this.users)
  },
  methods:{
    cancelReserv(id) {
      postSomething(`api/v1/user/myroom/${id}`, id).then(() => {
        location.reload();
        console.log("Бронь удалена");
      });
    },
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
h1,
h2 {
  margin: 1%;
}
a {
  color: black !important;
}
.menu {
  display: flex;
  flex-direction: row;
}
table.booking {
  width: 100%;
  border: 0px;
  border-collapse: collapse;
}
table.booking thead {
  font-weight: bold;
}
table.booking td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #e8e9eb;
}
.cont {
  margin: 2%;
}
@media screen and (max-width: 800px) {
  table.booking thead {
    display: none;
  }
  table.booking tr {
    display: block;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e8e9eb;
  }
  table.booking td {
    display: block;
    text-align: right;
  }
  table.booking td:before {
    content: attr(aria-label);
    float: left;
    font-weight: bold;
  }
}
.btn_border {
  padding: 12px 10%;
  border: none;
  color: #fff;
  background: #c9b158;
  font-size: 20px;
  transition: ease 0.5s;
}
.btn_border:hover {
  background: #b89e40;
  transition: ease 0.5s;
}
</style>