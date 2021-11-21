<template>
  <div class="container mt-5">
    <h1>Бронирование</h1>
    <div class="container container-form p-5 text-center">
      <h3>Выберите даты заезда и выезда</h3>
      <form class="text-left row container">
        <div class="col-md">
          <label for="start">Дата заезда</label><br />
          <input type="date" id="start" name="trip-end" v-model="start" />
        </div>
        <div class="col-md">
          <label for="start">Дата выезда</label><br />
          <input type="date" id="start" name="trip-end" v-model="end" />
        </div>
      </form>
      <button class="btn_border mt-5" @click="sendDates()">Найти</button>
    </div>
    <div v-if="rooms.length" class="select_houses">
      <h4 class="date">{{start}} - {{end}}</h4>
      <h5 class="text-center">Свободные номера</h5>
      <div class="row">
        <div class="col-md" v-for="room in rooms" :key="room.id">
          <img class="room-photo" :src="`http://domenblin.std-941.ist.mospolytech.ru/lotos/${room.photo}`" />
            <div class="info">
            <p class="title">{{room.room_name}}</p>
            <div class="price">
              <p class="price_box">от {{room.price_per_night}} руб</p>
              <router-link class="btn_border align-right mt-3" :to="roomOpen(room.id)">
                Выбрать
              </router-link>
            </div>
            </div>
      </div>
    </div>
  </div>
   <div class="text-center mt-4">
    <Loader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import { postSomething } from "../api/post";
import Loader from "../components/Loader.vue"
export default {
  name: "Booking",
  components:{
    Loader
  },
  data() {
    return {
      start: null,
      end: null,
      rooms: [],
      loading: false
    };
  },
  methods: {
    sendDates() {
      this.loading = true;
      postSomething("rooms/booking", { start: this.start, end: this.end })
        .then((response) => {
          this.rooms = response.data;
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        });
    },
     roomOpen: function (id) {
      return `/booking/${id}/${this.start}/${this.end}`;
    },
  },
};
</script>

<style>
.container-form {
  background-color: #fbfbfb;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
}
input {
  width: 70%;
  border: 1px solid rgba(162, 171, 177, 0.7);
  height: 6vh;
  padding: 2%;
}
.room-photo {
  object-fit: cover;
  width: 100%
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
.date {
  margin-top: 13vh;
  font-weight: bold;
  font-size: 24px;
}
h5 {
  margin-top: 8vh;
  font-weight: bold;
  font-size: 24px;
}

.info {
  padding-right: 3vh;
  padding-left: 5vh;
  padding-top: 3vh;
  height: 21vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.title {
  font-weight: bold;
  font-size: 1.2rem;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn_border {
  margin-top: 0;
  padding: 8px 23px;
  border: none;
  color: white;
  background: #c9b158;
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
.price_box {
  font-weight: bold;
  font-size: 24px;
}
@media (max-width: 760px) {
  .price {
    flex-direction: column;
    justify-content: center;
  }
  .title,
  .date {
    text-align: center;
  }
}
</style>
