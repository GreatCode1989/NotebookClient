<template>
  <div>
    <section class="featured-products">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>new products</span>
            </h2>
            <h4>
              <span class="scroll">Scroll me</span>
            </h4>
          </div>
        </div>

        <!-- Swiper start -->

        <swiper
          :slides-per-view="windowWidth"
          :space-between="20"
          class="slide-container"
        >
          <swiper-slide
            class="sw-slide"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <div class="product-card" style="height: 100%">
              <div class="product-card-offer">
                <div class="offer-new ms-1">New</div>

                <ButtonAddToFavorites :item="item" />
              </div>

              <div class="product-thumb mt-4 mb-2 me-3 ms-3">
                <router-link
                  :to="{ name: 'details', params: { id: item._id } }"
                >
                  <img
                    :src="require(`../assets/img/${item.image[0]}.jpg`)"
                    :alt="item.name"
                    class="rounded"
                  />
                </router-link>
              </div>

              <div class="product-details">
                <router-link
                  :to="{ name: 'details', params: { id: item._id } }"
                >
                  <h4>
                    <h4>
                      {{
                        item.about.slice(0, 70) +
                        (item.about.length > 70 ? "..." : "")
                      }}
                    </h4>
                  </h4>
                </router-link>

                <div
                  class="product-bottom-details d-flex justify-content-between"
                >
                  <div class="product-price">
                    <h4>{{ item.price }} $</h4>
                  </div>
                  <div class="product-links">
                    <ButtonAddToCart :item="item" />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          ...
        </swiper>

        <!-- Swiper end -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useStore } from "vuex";
import ButtonAddToCart from "./ButtonAddToCart.vue";
import ButtonAddToFavorites from "./ButtonAddToFavorites.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

const store = useStore();
const items = ref([]);
const windowWidth = ref();

const handleWindowResize = () => {
  if (window.innerWidth < 530) {
    windowWidth.value = 1;
  } else if (window.innerWidth < 1000) {
    windowWidth.value = 2;
  } else if (window.innerWidth < 1200) {
    windowWidth.value = 3;
  } else {
    windowWidth.value = 4;
  }

  console.log("Windowwidth:", windowWidth.value);
};

const filteredItems = computed(() => {
  let itemsCopy = [...items.value];

  itemsCopy = itemsCopy.filter((item) => {
    return item.popularity;
  });

  return itemsCopy;
});

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

watch(() => {
  handleWindowResize();
});

onMounted(() => {
  notebookRandom();
  window.addEventListener("resize", handleWindowResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleWindowResize);
});
</script>

<style scoped>
.scroll {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: rgb(47, 255, 186);
}
</style>
