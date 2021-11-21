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
        <input
          type="checkbox"
          class="form-check-input"
          id="remember"
          v-model="remember"
        />
        <label class="form-check-label" for="remember">Запомнить меня</label>
      </div>
    </form>
    
    <button class="btn_border w-100 mt-3" @click="sendUser()">Войти</button>
    
    <router-link to="/signup">Зарегистрироваться</router-link>
    <div class="text-center">
    <Loader v-if="loading"/>
    </div>
    
  </div>
</template>

<script>
import { loginUser } from "../api/auth.js";
import Loader from "../components/Loader.vue";
export default {
  name: "SignIn",
  components:{
    Loader
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      loading: false,
    };
  },
  methods: {
    sendUser() {
      this.loading = true;
      loginUser({
        email: this.email,
        password: this.password,
        remember: this.remember,
      })
        .then(() => {
          this.$router.push("/");
          location.reload();
          this.loading = false;
        })
        .catch(() => {
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
  background: #c9b158;
  font-size: 20px;
  transition: ease 0.5s;
}
.btn_border:hover {
  background: #b89e40;
  transition: ease 0.5s;
}
</style>
