<template>
  <header class="header sticky-top">
    <div class="header-top py-1">
      <div class="container">
        <div class="row">
          <div class="col-6 col-sm-4">
            <div class="header-top-phone d-flex align-items-center h-100">
              <i class="fa-solid fa-mobile-screen"></i>
              <a href="tel:+380962226347" class="ms-2">096-222-63-47</a>
            </div>
          </div>

          <div class="col-sm-4 d-none d-sm-block">
            <ul class="social-icons d-flex justify-content-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/anatoliy-trizna-451340287/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AnatoliySavior"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/anatoliysavior/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-sm-4">
            <div class="header-top-account d-flex justify-content-end">
              <div class="btn-group me-2">
                <div v-if="!loggedIn" class="dropdown">
                  <button
                    class="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{ name: 'login' }" class="dropdown-item"
                        >Sign In</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'register' }"
                        class="dropdown-item"
                        >Sign Up</router-link
                      >
                    </li>
                  </ul>
                </div>

                <div v-if="loggedIn" class="dropdown" style="z-index: 10000">
                  <button
                    class="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{
                      username.length > 10
                        ? `${username.slice(0, 10)}...`
                        : username
                    }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link
                        :to="{ name: 'profile' }"
                        class="dropdown-item"
                        >Profile</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'favorite' }"
                        class="dropdown-item"
                        >Favorite</router-link
                      >
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li @click="deleteAccount">
                      <router-link
                        :to="{ name: 'resume' }"
                        @click="deleteAccount"
                        class="dropdown-item"
                        >Exit</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="btn-group">
                <div class="dropdown">
                  <button
                    class="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link
                        :to="{ name: 'resume' }"
                        class="dropdown-item"
                        >Resume</router-link
                      >
                    </li>
                    <li>
                      <a
                        href="https://github.com/GreatCode1989"
                        class="dropdown-item"
                        target="_blank"
                        >GitHub</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- ./header-top-account -->
          </div>
        </div>
      </div>
    </div>
    <!-- ./header-top -->

    <div class="header-middle bg-white py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <router-link class="header-logo h1 fw-bold" :to="{ name: 'resume' }"
              >NotebookeR</router-link
            >
          </div>

          <div class="col-sm-6 mt-2 mt-md-0">
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  name="s"
                  v-model="searchItem"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="button-search"
                />
                <button
                  @click.prevent="searchNotebook"
                  class="btn btn-outline-warning"
                  type="submit"
                  id="button-search"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <span
                  class="input-group-text"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  :title="cartItemCount > 0 ? 'Товары в корзине' : 'Корзина пуста'"
                >
                  <router-link :to="{ name: 'cart' }">
                    <i
                      class="fa-solid fa-shopping-cart custom-cart-icon"
                      style="color: grey"
                      :class="{ 'text-primary': cartItemCount > 0 }"
                    ></i>
                  </router-link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ./header-middle -->
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["search"]);

const props = defineProps({
  cartItem: {
    type: Array,
  },
});

const searchItem = ref("");
const username = ref("");
const loggedIn = ref(false);

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

function deleteAccount() {
  localStorage.removeItem("tokenData");
  window.location.reload();
}

function searchNotebook() {
  emit("search", searchItem.value);
}

onMounted(() => {
  logged();
});
</script>
