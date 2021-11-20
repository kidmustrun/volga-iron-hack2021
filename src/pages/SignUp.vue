<template>
  <div class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Зарегистрироваться</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="name@example.com"
        />
        <label for="email">Email</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="+7(9__)___-__-__"
          v-model="phone"
        />
        <label for="phone">Телефон</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Иван"
          v-model="name"
        />
        <label for="name">Имя</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="surname"
          v-model="surname"
          placeholder="Иванов"
        />
        <label for="surname">Фамилия</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="lastname"
          v-model="lastname"
          placeholder="Иванович"
        />
        <label for="lastname">Отчество</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Пароль"
        />
        <label for="password">Пароль</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password2"
          v-model="password2"
          placeholder="Пароль еще раз"
        />
        <label for="password2">Повторите пароль</label>
      </div>
      <div class="form-check form-check-inline mt-2 mb-2">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="man"
          value="male"
          v-model="gender"
        />
        <label class="form-check-label" for="man"> Мужской </label>
      </div>
      <div class="form-check form-check-inline mt-2 mb-2">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="woman"
          value="female"
          v-model="gender"
        />
        {{gender}}
        <label class="form-check-label" for="woman"> Женский </label>
      </div>
      <div v-show="showError" class="mt-2 alert alert-danger" >
        {{ this.errorMessage }}
      </div>
    </form>
    <button class="btn_border w-100 mt-3" @click="sendUser()">
      Зарегистрироваться
    </button>
    <router-link to="/signin">Войти</router-link>
    <div class="text-center">
    <Loader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../api/auth.js";
import Loader from "../components/Loader.vue";
export default {
  name: "SignUp",
  components:{
    Loader
  },
  data() {
    return {
      email: "",
      phone: "",
      name: "",
      surname: "",
      lastname: "",
      password: "",
      password2: "",
      org: "",
      gender: "",
      role: "",
      showError: false,
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    sendUser() {
      this.loading = true;
      this.showError = false;
      registerUser({
        email: this.email,
        phone: this.phone,
        first_name: this.name,
        second_name: this.surname,
        last_name: this.lastname,
        password: this.password,
        password_confirmation: this.password2,
        organisation: +this.org,
        gender: this.gender,
        role: this.role,
        remember: true,
      })
        .then(() => {
          this.$router.push("/");
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
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
