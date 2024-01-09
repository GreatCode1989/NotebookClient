<template>
  <div>
    <Header />
    <div>
      <Navbar />
    </div>
    <div>
      <div class="router">
        <p>Еще нет аккаунта?</p>
        <router-link class="link-auth" to="user">Зарегестрируйтесь!</router-link>
        </div>
      <form @submit.prevent="loginUsers">
        <div>
          <label for="username">Имя Пользователя:</label>
          <input type="text" id="username" v-model="formData.username" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="formData.password" />
        </div>
        <div class="button-group">
          <button type="submit">Вход</button>
          
        </div>
      </form>
      <div>
        <div v-if="errorMessage" class="success-message">
          Заполните все поля!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Navbar from "@/components/Navbar.vue";

const formData = ref({
  username: "",
  email: "",
  password: "",
});

const isLoginButtonClicked = ref(false);

const errorMessage = computed(() => {
  if (isLoginButtonClicked.value) {
    return !formData.value.username ||
      !formData.value.email ||
      !formData.value.password
      ? "Заполните все поля"
      : "";
  }
  return "";
});

const store = useStore();

function clearForm() {
  formData.value.username = "";
  formData.value.email = "";
  formData.value.password = "";
}

function loginUsers() {
  isLoginButtonClicked.value = true;

  if (
    !formData.value.username ||
    !formData.value.email ||
    !formData.value.password
  ) {
    return;
  }

  store
    .dispatch("loginUser", formData.value)
    .then(() => {
      clearForm();
      isLoginButtonClicked.value = false;
    })
    .catch((error) => {
      console.error("Registration failed:", error);
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

.success-message
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