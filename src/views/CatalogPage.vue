<template>
  <div>
    <Header @search="searchValue($event)" />
    <div>
  <NavbarMenu  @search="searchValue($event)"/>
    </div>
    <div class="container mt-4">
      <!-- Selects -->
      <div class="row">
        <FilterPrice @filter="handlePriceFilter" />
        <FilterSize @filter="handleSizeFilter" />
        <FilterGender @filter="handleGenderFilter" />
      </div>

      <div>
        <div
          v-if="items && filteredItems"
          class="row row-cols-1 row-cols-md-3 g-4"
        >
          <div v-for="item in filteredItems" :key="item._id" class="col">
            <div class="card h-100">
              <router-link :to="{ name: 'details', params: { id: item._id } }">
                <img
                  :src="require(`../assets/img/${item.image[0]}.jpg`)"
                  :alt="item.name"
                  class="card-img-top"
                />
              </router-link>
              <div class="card-body">
                <h5 class="card-title">{{ item.text }}</h5>
                <p class="card-text">Цена: {{ item.price }} грн.</p>
                <p class="card-text">
                  Наличие: {{ item.in_shop ? "Да" : "Нет" }}
                </p>
                <div class="card-buttons">
                  <ButtonAddToCart :item="item" />
                  <ButtonAddToFavorites :item="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="d-flex justify-content-center spinner">
            <div class="spinner-border text-primary p-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer position="none" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import Header from "../components/Header.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Footer from "@/components/Footer.vue";
import ButtonAddToCart from "@/components/ButtonAddToCart.vue";
import ButtonAddToFavorites from "@/components/ButtonAddToFavorites.vue";
import FilterSize from "@/components/FilterSize.vue";
import FilterGender from "@/components/FilterGender.vue";
import FilterPrice from "@/components/FilterPrice.vue";

const store = useStore();
const items = ref([]);
const priceFilter = ref("");
const genderFilter = ref("");
const sizeFilter = ref("");
const searchItem = ref('')

const filteredItems = computed(() => {
  let itemsCopy = [...items.value];

  itemsCopy =
    priceFilter.value === "asc"
      ? itemsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      : priceFilter.value === "desc"
      ? itemsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      : itemsCopy;

  itemsCopy = itemsCopy.filter((item) => {
    return genderFilter.value === "female"
      ? item.old
      : genderFilter.value === "male"
      ? !item.old
      : true;
  });
  return itemsCopy;
});

const handleSizeFilter = (filter) => {
  sizeFilter.value = filter;
};
const handleGenderFilter = (filter) => {
  genderFilter.value = filter;
};
const handlePriceFilter = (filter) => {
  priceFilter.value = filter;
  console.log(priceFilter.value);
};
const searchValue = (event) => {
  searchItem.value = event;
};

function searchNotebook() {
  if (searchItem.value.length > 0) {
    store
      .dispatch("searchNotebook", {
        search: searchItem.value,
      })
      .then((data) => {
        items.value = data;

      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }
}

const notebookRandom = () => {
  store
    .dispatch("getAllNotebooks")
    .then((data) => {
      items.value = data;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
};

onMounted(() => {
  if (searchItem.value !== "") {
    searchNotebook();
  } else {
    notebookRandom();
  }
});

watch(() => searchItem.value, () => {
  searchNotebook();
});
</script>

<style scoped>
.spinner {
  margin-top: 70px;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
