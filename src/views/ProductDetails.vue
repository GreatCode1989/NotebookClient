<template>
  <div>
    <Header :title="'ОПИСАНИЕ ТОВАРА'" />
    <div>
      <Navbar />
    </div>

    <div v-if="clothPartDetails" class="product-list">
      <div class="product-item">
        <div class="product-details">
          <div>
            <img
              v-if="clothPartDetails.images"
              :src="require(`../assets/img/${clothPartDetails.images}.jpg`)"
              :alt="clothPartDetails.name"
              class="product-image"
            />
          </div>

          <div class="product-info">
            <div class="product-name">
              {{ clothPartDetails.name }}
            </div>

            <div class="product-price" v-if="clothPartDetails.price">
              Цена: <span>{{ clothPartDetails.price }}</span> грн.
            </div>

            <div class="product-availability">
              Наличие в магазине:
              <span> {{ clothPartDetails.bestseller ? "Да" : "Нет" }}</span>
            </div>

            <div>
              Наличие на складе:
              <span>{{ clothPartDetails.in_stock }} шт.</span>
            </div>
            <div>
              Размер: <span>{{ clothPartDetails.popularity }}</span>
            </div>
            <div>
              Совместимость: <span> {{ clothPartDetails.compatibility }}</span>
            </div>
            <div>
              Описание: <span>{{ clothPartDetails.description }}</span>
            </div>
            <div class="button">

            <ButtonAdd :item="clothPartDetails" :size="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Header from "../components/Header.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const clothPartDetails = ref(null);
const route = useRoute();

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
  width: 400px
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
