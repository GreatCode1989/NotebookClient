<template>
  <div>
    <Header />
    <div>
      <Navbar />
    </div>
    <div>
      <div class="router">
        <p>Еще нет аккаунта?</p>
        <router-link class="link-auth" to="user">Зарегистрируйтесь!</router-link>
      </div>
      <form @submit.prevent="loginUser">
        <div>
          <label for="username">Имя Пользователя:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="button-group">
          <button type="submit">Вход</button>
        </div>
      </form>
      <div>
        <div
          v-if="errorMessage"
          :class="{
            'success-message': isSuccessMessage,
            'error-message': !isSuccessMessage,
          }"
        >
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";

const isLoginButtonClicked = ref(false);
const errorMessage = ref("");
const store = useStore();
const isSuccessMessage = ref(false);
const router = useRouter();

const username = ref("");
const password = ref("");

function clearForm() {
  username.value = "";
  password.value = "";
}

watchEffect(() => {
  if (isLoginButtonClicked.value) {
    if (username.value && password.value) {
      errorMessage.value = ""; 
    }
  }
});


function loginUser() {
  isLoginButtonClicked.value = true;


  if (!username.value || !password.value) {
    errorMessage.value = "Заполните все поля";
    isSuccessMessage.value = false;
    return;
  }

  
 

  store
    .dispatch("loginUser", {
      username: username.value,
      password: password.value,
    })
    .then((result) => {
      clearForm();
      isLoginButtonClicked.value = false;

      if (result.success) {
        if (result.data.warningMessage) {
          errorMessage.value = result.data.warningMessage;
        } else {
          errorMessage.value = "Успешный вход";
          isSuccessMessage.value = true;
          router.push({ name: "page" });
        }
      } else {
        errorMessage.value = "Неверный логин или пароль";
      }
    });
}


onMounted(() => {
  clearForm();
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'


form
  display: flex
  flex-direction: column
  max-width: 400px
  margin: 10px auto
  padding: 20px
  border: 1px solid #ccc
  border-radius: 5px
  align-items: flex-start

form div
  margin-bottom: 10px
  display: flex
  width: 100%
  flex-direction: column
  align-items: flex-start

label
  font-size: 16px
  margin-bottom: 5px

input[type="text"],
input[type="password"],
input[type="email"]
  width: 100%
  padding: 10px
  font-size: 16px
  border: 1px solid #ccc
  border-radius: 5px

button[type="submit"]
  padding: 10px 20px
  font-size: 16px
  background-color: #007bff
  color: #fff
  border: none
  margin-top: 15px
  border-radius: 5px
  cursor: pointer

button:hover
  background-color: #0099ff

.error-message
  display: flex
  justify-content: center
  margin: 0 auto
  margin-top: 20px
  padding: 10px
  width: 390px
  background-color: #ffffff
  color: #f04550
  border: 1px solid #c3e6cb
  border-radius: 5px
  font-size: 20px

.success-message
  display: flex
  justify-content: center
  margin: 0 auto
  margin-top: 20px
  padding: 10px
  width: 390px
  background-color: #ffffff
  color: #00a046
  border: 1px solid #c3e6cb
  border-radius: 5px
  font-size: 20px
.router
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 10px


p
  font-size: 18px
  margin-bottom: 10px
  margin-right: 15px


.link-auth
  text-decoration: none
  font-size: 18px
  color: #007bff
  text-decoration: none
  margin-top: 8px
  font-weight: bold

.link-auth:hover
  color: #ca38b2
</style>