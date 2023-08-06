<template>
  <div>
    <Header :title="'РЕГИСТРАЦИЯ'" />
    <div>
      <Navbar />
    </div>
  </div>
  <div>
    <form @submit.prevent="registerUsers">
      <div>
        <label for="username">Имя Пользователя:</label>
        <input
          type="text"
          id="username"
          v-model="formData.username"
          @input="errorsName"
          required
        />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          @input="errorsPasword"
          required
          autocomplete="current-password"
        />
      </div>
      <div>
        <button type="submit">Регистрация</button>
      </div>
    </form>
    <div>
      <div v-if="registerNorm" class="success-message">
        Вы зарегистрированы!
      </div>
      <div v-if="usernameRegex" class="success-message">
        Неверное имя пользователя. Имя пользователя должно содержать только
        английские буквы.
      </div>
      <div v-if="passwordRegex" class="success-message">
        Неверный пароль. Пароль должен быть не менее 8 символов и содержать не
        менее 3 цифр.
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Header from "../components/Header.vue";

const registerNorm = ref(false);
const usernameRegex = ref(false);
const passwordRegex = ref(false);

const formData = ref({
  username: "",
  password: "",
});

function errorsName() {
  const validUsernameRegex = /^[A-Za-z]+$/;

  if (formData.value.username === "") {
    usernameRegex.value = false;
  } else {
    if (validUsernameRegex.test(formData.value.username)) {
      usernameRegex.value = false;
    } else {
      usernameRegex.value = true;
    }
  }
}

function errorsPasword() {
  const validPasswordRegex = /^(?=.*[0-9].*[0-9].*[0-9])[a-zA-Z0-9]{8,}$/;

  if (formData.value.password === "") {
    passwordRegex.value = false;
  } else {
    if (validPasswordRegex.test(formData.value.password)) {
      passwordRegex.value = false;
    } else {
      passwordRegex.value = true;
    }
  }
}

function clearForm() {
  formData.value.username = "";
  formData.value.password = "";
}

async function registerUsers() {
  errorsName();
  errorsPasword();

  if (!usernameRegex.value && !passwordRegex.value) {
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        formData.value
      );

      registerNorm.value = true;
      clearForm();
      setTimeout(() => {
        registerNorm.value = false;
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }
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
  max-width: 300px
  margin: 20px auto
  padding: 20px
  border: 1px solid #ccc
  border-radius: 5px

form div
  margin-bottom: 10px

label
  font-size: 16px

input[type="text"],
input[type="password"]
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
  border-radius: 5px
  cursor: pointer

.success-message
  display: flex
  justify-content: center
  margin: 0 auto
  margin-top: 20px
  padding: 10px
  width: 390px
  background-color: #d4edda
  color: #155724
  border: 1px solid #c3e6cb
  border-radius: 5px
</style>
