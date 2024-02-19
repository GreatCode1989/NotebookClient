<template>
  <div>
    <Header />
    <div>
      <NavbarMenu />
    </div>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="ms-2 text-muted">Регистрация</h3>
            </div>
            <div class="card-body">
              <!-- Registration Form -->
              <form @submit.prevent="registerUser">
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

                <!-- Email Field -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
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

                <div class="mb-3">
                  <label for="confirmPassword" class="form-label"
                    >Повторите пароль:</label
                  >
                  <div class="input-group">
                    <input
                      :type="showConfirmPassword ? 'text' : 'password'"
                      class="form-control"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      required
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="toggleShowConfirmPassword"
                    >
                      {{ showConfirmPassword ? "Скрыть" : "Показать" }}
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

                <button type="submit" class="btn btn-primary">
                  Зарегистрироваться
                </button>
                <router-link to="/login" class="btn btn-link ms-5 mt-2"
                  >Уже есть аккаунт? Войти</router-link
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
import { ref, onMounted, watchEffect, nextTick } from "vue";
import { useStore } from "vuex";
import NavbarMenu from "@/components/NavbarMenu.vue";
import { useRouter } from "vue-router";

const store = useStore();
const errorMessage = ref("");
const successMessage = ref("");
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
  confirmPassword.value = "";
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

function registerUser() {
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Пароли не совпадают!";
    return;
  }

  if (!passwordRegex.test(password.value)) {
    errorMessage.value =
      "Пароль должен содержать минимум 8 символов, цифры и заглавные буквы!";
    return;
  }

  store
    .dispatch("registerUser", {
      username: username.value,
      password: password.value,
      email: email.value,
    })
    .then(async (result) => {
      await nextTick();

      if (result.success) {
        if (result.data.warningMessage) {
          errorMessage.value = result.data.warningMessage;
        } else {
          successMessage.value = "Успешная регистрация!";
          clearForm();
          router.push({ name: "login" });
        }
      } else {
        errorMessage.value = result.message;
      }
    })
    .catch((error) => {
      console.error("Ошибка при регистрации:", error);
      errorMessage.value =
        "Ошибка при регистрации. Пожалуйста, проверьте введенные данные.";
    });
}

onMounted(() => {
  clearForm();
});
</script>

>
