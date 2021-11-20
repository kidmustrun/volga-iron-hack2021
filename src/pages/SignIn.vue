<template>
  <div class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Войти в систему</h1>

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
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
        />
        <label for="password">Пароль</label>
      </div>

      <div class="form-check">
    <input type="checkbox" class="form-check-input" id="remember" v-model="remember">
    <label class="form-check-label" for="remember">Запомнить меня</label>
  </div>
    </form>
    <button class="btn_border w-100 mt-3" @click="sendUser()">
      Войти
    </button>
    <div v-if="loading" class="cssload-spinner">
      <div class="cssload-ball cssload-ball-1"></div>
      <div class="cssload-ball cssload-ball-2"></div>
      <div class="cssload-ball cssload-ball-3"></div>
      <div class="cssload-ball cssload-ball-4"></div>
    </div>
    <div v-show="show400" class="mt-2 alert alert-danger">
      Неправильный пароль или email.
    </div>
    <div v-show="show503" class="mt-2 alert alert-danger">
      Что-то пошло не так
    </div>
    <router-link to="/signup">Зарегистрироваться</router-link>
  </div>
</template>

<script>
import { loginUser } from "../api/auth.js";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      show400: false,
      show503: false,
      loading: false,
    };
  },
  methods: {
    sendUser() {
      this.loading = true;
      this.show400 = false;
      this.show503 = false;
      console.log(this.loading);
      loginUser({ email: this.email, password: this.password, remember: this.remember })
        .then(() => {
          this.$router.push("/account");
          location.reload()
          this.show400 = false;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) this.show400 = true;
          else this.show503 = true;
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

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
