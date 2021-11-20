<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link
          class="navbar-brand d-flex flex-column align-items-center"
          to="/"
        >
          <img src="@/assets/logo.png" alt="logo" height="60" />
          <span class="logo-text">Каспийский Лотос</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-2" id="navbarSupportedContent">
          <div class="nav-item">
            <span class="nav-link pt-0 pb-0 ps-0">8-927-284-41-93</span>
            <span class="nav-link pt-0 pb-0 ps-0">soc_zinovevana@pvrr.ru</span>
          </div>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/houses">Домики</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events"
                >Мероприятия</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts"
                >Контакты</router-link
              >
            </li>
          </ul>
          <router-link class="btn_border" to="/booking"
            >Забронировать</router-link
          >

          <ul v-if="isAuthenticated" class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/account"
                >Личный кабинет</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logoutClick()">Выход</a>
            </li>
          </ul>
          <ul v-else class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/signup"
                >Регистрация</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">Вход</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { logoutUser } from "../api/auth";
export default {
  name: "Header",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.isAuthenticated = localStorage.getItem("token") || false;
  },
  methods: {
    logoutClick() {
      logoutUser();
      location.reload()
      this.$router.push("/signin");
    },
  },
};
</script>
<style scoped>
.navbar_set {
  height: 100px;
}
nav a,
span {
  color: white !important;
  font-size: 20px;
}

.logo-text {
  color: #fdd704 !important;
}
.btn_border {
  border: solid 3px #fdd704;
  background: transparent;
  color: white;
  padding: 5px 15px;
  font-size: 20px;
  margin: 0px 10px;
  transition: 0.5s ease;
  text-decoration: none;
}
.btn_border:hover {
  border: solid 3px #fdd704;
  background: #fdd704;
  color: #000;
  padding: 5px 15px;
  transition: 0.5s ease;
}
span .nav-link {
  cursor: pointer;
}
</style>
