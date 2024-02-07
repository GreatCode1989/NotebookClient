<template>
  <div>
    <Header :title="`Джинсовая ткань, которая делает вас`" />
    <div>
      <NavbarMenu />
    </div>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="ms-2 text-muted">Авторизация</h3>
            </div>
            <div class="card-body">
              <!-- Registration Form -->
              <form @submit.prevent="loginUser">
                <!-- Username Field -->
                <div class="mb-3">
                  <label for="username" class="form-label">Никнейм:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="username"
                    required
                  />
                </div>

                <!-- Password Field -->
                <div class="mb-3">
                  <label for="password" class="form-label">Пароль:</label>
                  <div class="input-group">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      id="password"
                      v-model="password"
                      required
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="toggleShowPassword"
                    >
                      {{ showPassword ? "Скрыть" : "Показать" }}
                    </button>
                  </div>
                </div>

                <div>
                  <div v-if="errorMessage" class="alert alert-danger">
                    {{ errorMessage }}
                  </div>

                  <div v-if="successMessage" class="alert alert-success">
                    {{ successMessage }}
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">Войти</button>
                <router-link to="/register" class="btn btn-link ms-5 mt-2"
                  >Нет аккаунта? Зарегистрируйтесь</router-link
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { ref, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";
import NavbarMenu from "@/components/NavbarMenu.vue";
import { useRouter } from "vue-router";

// const isLoginButtonClicked = ref(false);
const errorMessage = ref("");
const store = useStore();
const successMessage = ref("");
const router = useRouter();

const username = ref("");
const password = ref("");
const showPassword = ref(false);

function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}

function clearForm() {
  username.value = "";
  password.value = "";
}

watchEffect(() => {
  if (username.value && password.value) {
    errorMessage.value = "";
  }
});

function loginUser() {
  // isLoginButtonClicked.value = true;

  // if (!username.value || !password.value) {
  //   errorMessage.value = "Заполните все поля!";
  //   isSuccessMessage.value = false;
  //   return;
  // }

  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

  if (!passwordRegex.test(password.value)) {
    errorMessage.value =
      "Пароль должен содержать минимум 8 символов, цифры и заглавные буквы!";
    return;
  }

  store
    .dispatch("loginUser", {
      username: username.value,
      password: password.value,
    })
    .then((result) => {
      if (result.success) {
        const { access_token, refresh_token, username, id } = result.data;

        const tokenData = {
          access_token,
          refresh_token,
          username,
          id,
        };

        localStorage.setItem("tokenData", JSON.stringify(tokenData));

        successMessage.value = "Успешный вход!";
        clearForm();
        router.push({ name: "catalog" });
      } else {
        errorMessage.value = "Неверный логин или пароль!";
      }
    })
    .catch((error) => {
      console.error("Ошибка при входе пользователя:", error);
      errorMessage.value =
        error.response?.data.errorMessage ||
        "Ошибка при входе. Пожалуйста, проверьте введенные данные.";
    });
}

onMounted(() => {
  clearForm();
});
</script>
