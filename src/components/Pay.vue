<template>
  <div class="container">
    <div class="block_back d-flex">
      <img src="@/assets/back.png" alt="" />
      <router-link class="btn align-right mt-3" :to="roomOpen()"
        >НАЗАД</router-link
      >
    </div>
    <div v-if="room.room_name" class="view">
      <img
        :src="`http://domenblin.std-941.ist.mospolytech.ru/lotos/${room.photo}`"
        alt="house"
      />
      <div class="desc">
        <div class="content">
          <p class="time">Количество ночей: {{ sum.data[1] }}</p>
          <p class="period">
            {{ $route.params.start }} - {{ $route.params.end }}
          </p>
          <p class="house">Домик:</p>
          <div class="choice">
            <p class="type_house">{{ room.room_name }}</p>
            <p class="type_price">{{ room.price_per_night }}</p>
          </div>
          <p class="house">Дополнительные услуги:</p>
          <div class="choice">
            <div class="choice_services">
              <p class="type_house">3-разовое питание</p>
              <p class="type_house">аренда катера</p>
            </div>
            <div>
              <p class="type_price">200 руб</p>
              <p class="type_price">1800 руб</p>
            </div>
          </div>
          <p class="outcome">Итог: {{ sum.data[0] }} руб.</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <Loader />
    </div>
    <div v-if="room.room_name" class="d-flex justify-content-end">
      <button
        class="btn_border align-right mt-3"
        @click="onPay()"
      >
        Оплатить
      </button>
    </div>
  </div>
</template>
<script>
import { getSomething } from "../api/get";
import { postSomething } from "../api/post";
import Loader from "./Loader.vue";
export default {
  name: "Pay",
  components: {
    Loader,
  },
  data() {
    return {
      room: {},
      user: {},
      sum: 0,
      services: [],
    };
  },
  created() {
    getSomething(`rooms/${this.$route.params.id}`).then(
      (resp) => (this.room = resp.data)
    );
    getSomething("api/v1/user").then((response) => (this.user = response.datа));
    postSomething(`rooms/booking/checksum/${this.$route.params.id}`, {
      start: this.$route.params.start,
      end: this.$route.params.end,
      services: this.services,
    }).then((response) => (this.sum = response));
  },
  methods: {
    onPay() {
      postSomething(`rooms/booking/${this.$route.params.id}`, {
        start: this.$route.params.start,
        end: this.$route.params.end,
        services: this.services,
      }).then(() => {
        this.$router.push("/");
        location.reload();
      });
    },
    roomOpen: function () {
      return `/booking/${this.$route.params.id}/${this.$route.params.start}/${this.$route.params.end}`;
    },
  },
};
</script>
<style scoped>
.block_back img {
  margin-top: 3vh;
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
  margin-bottom: 1vh;
  padding-bottom: 3vh;
  display: flex;
  column-gap: 8vh;
}
.view img {
  width: 50%;
  height: auto;
}
.desc {
  padding: 2%;
  border: rgba(50, 69, 76, 0.19) 1px solid;
  height: 67vh;
  width: 100%;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  background-color: #fbfbfb;
}
.number,
.period,
.house,
.type_price {
  font-size: 1.2rem;
  font-weight: bold;
}
.time {
  font-size: 1.2rem;
  font-weight: bold;
  color: #7e7d8c;
}
.type_house {
  font-size: 1.2rem;
  color: #c9b158;
}
.choice {
  display: flex;
  justify-content: space-between;
}
.content {
  margin-left: 5vh;
}
.outcome {
  font-size: 2rem;
  font-weight: bold;
}
.btn_border {
  text-align: center;
  width: 82vh;
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