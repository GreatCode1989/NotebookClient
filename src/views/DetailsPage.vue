<template>
  <div>
    <Header :title="'ОПИСАНИЕ ТОВАРА'" />
    <div>
      <NavbarMenu />
    </div>

    <div v-if="clothPartDetails" class="product-list">
      <div class="product-item">
        <div class="product-details">
          <!-- Slider -->
          <div class="slider-container">
            <div class="slider">
              <div
                v-for="(image, index) in clothPartDetails.image"
                :key="index"
                :class="{ active: index === currentImageIndex }"
              >
                <img
                  :src="require(`../assets/img/${image}.jpg`)"
                  :alt="clothPartDetails.text"
                  class="product-image"
                />
              </div>
            </div>
            <!-- Навигация (стрелки) -->
            <div class="slider-nav">
              <div class="arrow" @click="prevImage">&lt;</div>
              <div class="arrow" @click="nextImage">&gt;</div>
            </div>
          </div>
          <!-- Info -->
          <div class="product-info">
            <div class="product-name">
              {{ clothPartDetails.text }}
            </div>

            <div class="product-price" v-if="clothPartDetails.price">
              Цена: <span>{{ clothPartDetails.price }}</span> грн.
            </div>

            <div class="product-availability">
              Наличие в магазине:
              <span> {{ clothPartDetails.in_shop ? "Да" : "Нет" }}</span>
            </div>

            <div>
              Наличие на складе:
              <span>{{ clothPartDetails.in_stock }} шт.</span>
            </div>
            <div>
              Размер: <span>{{ clothPartDetails.size }}</span>
            </div>
            <div>
              Пол:
              <span> {{ clothPartDetails.old ? "Женский" : "Мужской" }}</span>
            </div>
            <div>
              <span>{{ clothPartDetails.description }}</span>
            </div>
            <div class="button">
              <ButtonAdd :item="clothPartDetails" :size="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const clothPartDetails = ref(null);
const route = useRoute();
const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % clothPartDetails.image.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + clothPartDetails.image.length) % clothPartDetails.image.length;
};

onMounted(async () => {
  const clothPartId = route.params.id;

  try {
    const result = await store.dispatch("fetchClothPartDetails", clothPartId);

    if (result.success) {
      console.log("Данные о товаре:", result.data);
      clothPartDetails.value = result.data;
    } else {
      console.error("Ошибка при получении данных о товаре");
    }
  } catch (error) {
    console.error("Ошибка при выполнении экшена:", error);
  }
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
  
.product-details
  width: 1200px
  margin: 50px auto
  padding: 20px
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: center
  border: 2px solid gray
  border-radius: 5px 5px
  box-shadow: 0 0 5px 5px $gray2

.product-image
  width: 500px
  border-radius: 3px 3px
  margin-right: 50px
  box-shadow: 0 0 5px 5px  $bluelight

.product-info
  padding: 20px
  font-size: 25px
  line-height: 1.6

.product-name
  font-weight: bold
  margin-bottom: 20px

.button
  margin-top: 50px
  max-width: 200px

span
  margin-left: 10px

@media screen and (max-width: 768px)

  .product-details
    width: 500px
  .product-info
    padding: 0
    font-size: 18px
    text-align: left

  .product-image
    width: 200px
    border-radius: 3px 3px
    margin-right: 100px

  .product-name
    font-weight: bold
    margin-bottom: 20px


  span
    margin-left: 10px
</style>
