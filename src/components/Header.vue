<template>
  <header class="header">
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
                      <a
                        href="https://github.com/GreatCode1989"
                        class="dropdown-item"
                        target="_blank"
                        >Client</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://github.com/GreatCode1989"
                        class="dropdown-item"
                        target="_blank"
                        >Server</a
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

    <div class="header-middle bg-white py-4" >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <router-link class="header-logo h1 fw-bold" :to="{ name: 'resume' }"
              >NotebookeR</router-link
            >
          </div>
          <div class="col-sm-6 mt-2 mt-md-0">

       <span class="header-logo2 h1 fw-bold">Best laptop of the American</span>

          </div>

        </div>
      </div>
    </div>
    <!-- ./header-middle -->
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CartModal from "./CartModal.vue";

const emit = defineEmits(["search"]);

const props = defineProps({
  cartItem: {
    type: Array,
  },
});

const searchItem = ref("");
const username = ref("");
const loggedIn = ref(false);
const isPartIdAdded = (true)

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
