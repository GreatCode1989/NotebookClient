<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #e3f2fd; position: sticky; top: 0; z-index: 1000"
  >
    <div class="container">
      <button
        class="navbar-toggler order-lg-first"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="navbarScroll"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header" style="background-color: #bfddf2">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Navigation</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" style="background-color: #e3f2fd">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'detail' }"
                >Resume</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'demo' }"
                >Home</router-link
              >
            </li>
            <!-- account -->
            <li v-if="!loggedIn" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul
                class="dropdown-menu"
                style="background-color: #e3f2fd"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link :to="{ name: 'login' }" class="dropdown-item"
                    >Sign In</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'register' }" class="dropdown-item"
                    >Sign Up</router-link
                  >
                </li>
              </ul>
            </li>

            <li v-if="loggedIn" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{
                  username.length > 10
                    ? `${username.slice(0, 10)}...`
                    : username
                }}
              </a>
              <ul
                class="dropdown-menu"
                style="background-color: #e3f2fd"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link :to="{ name: 'profile' }" class="dropdown-item"
                    >Profile</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'favorite' }" class="dropdown-item"
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
            </li>
          </ul>
        </div>
      </div>

      <div class="d-none d-lg-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'detail' }"
              >Resume</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'demo' }"
              >Home</router-link
            >
          </li>
          <!-- account -->
          <li v-if="!loggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul
              class="dropdown-menu"
              style="background-color: #e3f2fd"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link :to="{ name: 'login' }" class="dropdown-item"
                  >Sign In</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'register' }" class="dropdown-item"
                  >Sign Up</router-link
                >
              </li>
            </ul>
          </li>

          <li v-if="loggedIn" class="nav-item dropdown">
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
            <ul
              class="dropdown-menu"
              style="background-color: #e3f2fd"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link :to="{ name: 'profile' }" class="dropdown-item"
                  >Profile</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'favorite' }" class="dropdown-item"
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
          </li>
        </ul>
      </div>

      <!-- input -->
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

            <!-- cart -->

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasCart"
              aria-labelledby="offcanvasCartLabel"
            >
              <CartModal />
            </div>

            <!-- cartbutton -->

            <div
              @click="toggleCartCanvas"
              :style="{ color: isPartIdAdded ? 'green' : 'white' }"
              :class="{
                'btn-primary': !isPartIdAdded,
                'btn-warning': isPartIdAdded,
              }"
              class="btn add-to-cart"
            >
              <i class="fa-solid fa-shopping-cart"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>

  <!-- carusel -->
  <div v-if="carouselItem" class="col-md-12 container-xl">
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="require(`../assets/img/mongodb.png`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/nest.png`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/vue.jpg`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px"
            alt="..."
          />
        </div>
      </div>

      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CartModal from "./CartModal.vue";

const emit = defineEmits(["search"]);

const props = defineProps({
  cartItem: {
    type: Array,
  },
  carouselItem: {
    type: Boolean,
    default: true,
  },
});

const searchItem = ref("");
const username = ref("");
const loggedIn = ref(false);
const isPartIdAdded = true;

const toggleCartCanvas = () => {
  const offcanvas = new bootstrap.Offcanvas(
    document.getElementById("offcanvasCart")
  );
  offcanvas.toggle();
};

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
