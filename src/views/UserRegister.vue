<template>
  <div>
    <Header />
    <div>
      <NavbarMenu />
    </div>
    <div>
      <div class="router">
        <p>Уже есть аккаунт?</p>
        <router-link class="link-auth" to="login">Войти</router-link>
      </div>
      <form @submit.prevent="registerUsers">
        <div>
          <label for="username">Имя Пользователя:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
          />
          <div class="button-input">
            <button type="button" @click="toggleShowPassword">
              {{ showPassword ? "Скрыть" : "Показать" }}
            </button>
          </div>
        </div>
        <div>
          <label for="confirmPassword">Повторите пароль:</label>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            id="confirmPassword"
            v-model="confirmPassword"
          />
          <div class="button-input">
            <button type="button" @click="toggleShowConfirmPassword">
              {{ showConfirmPassword ? "Скрыть" : "Показать" }}
            </button>
          </div>
        </div>

        <div class="button-group">
          <button type="submit">Регистрация</button>
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
import { ref, onMounted, watchEffect, nextTick } from "vue";
import { useStore } from "vuex";
import NavbarMenu from "@/components/NavbarMenu.vue";
import { useRouter } from "vue-router";

const isRegistrationButtonClicked = ref(false);
const errorMessage = ref("");
const store = useStore();
const isSuccessMessage = ref(false);
const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

function clearForm() {
  username.value = "";
  email.value = "";
  password.value = "";
}

function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}

function toggleShowConfirmPassword() {
  showConfirmPassword.value = !showConfirmPassword.value;
}

watchEffect(() => {
  if (
    username.value &&
    email.value &&
    password.value &&
    confirmPassword.value
  ) {
    errorMessage.value = "";
  }
});

function registerUsers() {
  isRegistrationButtonClicked.value = true;

  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    errorMessage.value = "Заполните все поля!";
    isSuccessMessage.value = false;
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Пароли не совпадают!";
    isSuccessMessage.value = false;
    return;
  }

  if (!passwordRegex.test(password.value)) {
    errorMessage.value =
      "Пароль должен содержать минимум 8 символов, цифры и заглавные буквы!";
    isSuccessMessage.value = false;
    return;
  }

  store
    .dispatch("registerUser", {
      username: username.value,
      password: password.value,
      email: email.value,
    })
    .then(async (result) => {
      clearForm();
      isRegistrationButtonClicked.value = false;

      await nextTick();

      if (result.success) {
        if (result.data.warningMessage) {
          errorMessage.value = result.data.warningMessage;
        } else {
          errorMessage.value = "Успешная регистрация!";
          isSuccessMessage.value = true;
          router.push({ name: "login" });
        }
      } else {
        errorMessage.value = "Ошибка сервера";
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

button[type="submit"]:hover
  background-color: #0099ff

.error-message
  display: flex
  justify-content: center
  margin: 0 auto
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

button[type="button"]
  margin-top: 7px
  cursor: pointer

.button-input
  margin-bottom: 0
  display: flex
  align-items: flex-end 
</style>
