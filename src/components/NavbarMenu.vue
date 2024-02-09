<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #e3f2fd"
  >
    <div class="container-xl">
      <router-link
        class="nav-link p-0 fw-bold"
        style="color: green; text-transform: uppercase; font-size: bold"
        :to="{ name: 'demo' }"
        >Levis jeans</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'resume' }"
              >Резюме</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'catalog' }"
              >Каталог товаров</router-link
            >
          </li>
          <li v-if="!loggedIn" class="nav-item me-5">
            <router-link class="nav-link" :to="{ name: 'register' }"
              >Регистрация/Вход</router-link
            >
          </li>
          <li v-if="loggedIn" class="nav-item dropdown me-5">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{
                username.length > 10 ? `${username.slice(0, 10)}...` : username
              }}
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="{ name: 'profile' }"
                  >Личные данные</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'favorite' }"
                  >Избранное</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'cart' }"
                  >Корзина</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="dropdown-item cursor-pointer">Выход</li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent="searchCloth">
          <input
            class="form-control me-2"
            type="search"
            v-model="searchItem"
            placeholder="Поиск"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, defineEmits, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits();

const searchItem = ref("");
const items = ref();
const username = ref("");
const loggedIn = ref(true);

const storedToken = localStorage.getItem("tokenData");
const tokenData = storedToken ? JSON.parse(storedToken) : null;

const logged = () => {
  if (tokenData && tokenData.username && tokenData.username.length > 0) {
    username.value = tokenData.username;
    loggedIn.value = true;
  } else {
    loggedIn.value = false;
  }
};
function searchCloth() {
  if (searchItem.value.length > 0) {
    store
      .dispatch("searchCloth", {
        search: searchItem.value,
      })
      .then((data) => {
        items.value = data;

        emit("searchItem", items.value);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }
}

const clothRandom = () => {
  store
    .dispatch("getAllCloth")
    .then((data) => {
      items.value = data;
      emit("searchItem", items.value);
      console.log("Данные успешно получены:", data);
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
};

onMounted(() => {
  logged();
  if (searchItem.value !== "") {
    searchCloth();
  } else {
    clothRandom();
  }
});
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
