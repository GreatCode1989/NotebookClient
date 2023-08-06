<template>
  <div>
    <Header :title="'ОПИСАНИЕ ТОВАРА'" />
    <div>
      <Navbar />
    </div>
    <div class="product-details">
      <div>
        <img
          v-if="details && details.image"
          :src="require(`../assets/img/${details.image}`)"
          :alt="details.name"
          class="product-image"
        />
      </div>

      <div class="product-info">
        <div class="product-name">{{ details.name }}</div>
        <div class="product-price">
          Цена: <span>{{ details.price }}</span> грн.
        </div>
        <div class="product-availability">
          Наличие: <span> {{ details.available ? "Да" : "Нет" }}</span>
        </div>
        <div>
          ID: <span> {{ details.id }}</span>
        </div>
        <div>
          Цвет: <span>{{ details.color }}</span>
        </div>
        <div>
          Размер: <span>{{ details.size }}</span>
        </div>
        <div>
          Категория: <span>{{ details.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Header from "../components/Header.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const details = ref({});

onMounted(() => {
  const productId = route.params.id;

  axios.get(`http://localhost:3000/products/${productId}`).then((response) => {
    const data = response.data;

    details.value = data;
  });
});
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.product-details
  width: 900px
  margin: 20px auto
  padding: 20px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  border: 2px solid gray
  border-radius: 5px 5px
  box-shadow: 5px 5px 7px $gray2


.product-image
  width: 400px
  border-radius: 3px 3px
  margin-right: 100px
  box-shadow: 5px 5px 7px $bluelight

.product-info
  padding: 20px
  font-size: 25px
  line-height: 1.6

.product-name
  font-weight: bold
  margin-bottom: 20px

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
