<template>
  <div>
    <section class="featured-products">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>popular products</span>
            </h2>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-6 mb-3"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <div class="product-card" style="height: 100%">
              <div class="product-card-offer">
                <div class="offer-hit ms-1">Hit</div>
                <div class="offer-new ms-1">New</div>

                <ButtonAddToFavorites />
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
                        item.about.slice(0, 80) +
                        (item.about.length > 80 ? "..." : "")
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
                    <ButtonAddToCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import ButtonAddToCart from "./ButtonAddToCart.vue";
import ButtonAddToFavorites from "./ButtonAddToFavorites.vue";

const store = useStore();
const items = ref([]);

const filteredItems = computed(() => {
  let itemsCopy = [...items.value];

  itemsCopy = itemsCopy.filter((item) => {
    return item.old;
  });

  return itemsCopy.slice(0, 12);
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

onMounted(() => {
  notebookRandom();
});
</script>

<style lang="scss" scoped></style>
