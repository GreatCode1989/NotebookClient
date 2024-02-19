<template>
  <div>
    <Header :cart-item="items"/>
    <NavbarMenu />
    <div class="container mt-4">
      <div class="table-responsive-xl">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Изображение</th>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th scope="col">Пол</th>
              <th scope="col">Действия</th>
              <th scope="col">Итого</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-if="items && items.length > 0">
            <tr v-for="item in items" :key="item._id">
              <td>
                <router-link
                  :to="{ name: 'details', params: { id: item.partId } }"
                >
                  <img
                    :src="require(`../assets/img/${item.image[0]}.jpg`)"
                    :alt="item.name"
                    class="img-thumbnail"
                    style="width: 100%; max-width: 100px; height: auto;"
                  />
                </router-link>
              </td>
              <td>{{ item.text }}</td>
              <td>{{ item.price }} грн.</td>
              <td>{{ item.old ? "Женские" : "Мужские" }}</td>
              <td class="text-center">
                <div class="btn-group" role="group">
                  <button
                    @click="decrementCount(item)"
                    class="btn btn-sm btn-danger"
                  >
                    -
                  </button>
                  <span class="mx-2">{{ item.count }}</span>
                  <button
                    @click="incrementCount(item)"
                    class="btn btn-sm btn-success"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <span class="mx-2">{{ item.count }}</span>
              </td>
              <td>
                <ButtonDeleteCart :item="item" />
              </td>
            </tr>
            <tr>
              <td colspan="7" class="text-center">
                <strong>Общая цена: {{ totalPrice }} грн.</strong>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7" class="text-center">
                <h2 class="my-4">У вас пока нет товаров в корзине!</h2>
                <router-link :to="{ name: 'catalog' }" class="btn btn-primary">
                  Вернуться к покупкам
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>



<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import ButtonDeleteCart from "@/components/ButtonDeleteCart.vue";
import Footer from "@/components/Footer.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";

const items = ref( );

function incrementCount(item) {
  item.count++;
}

function decrementCount(item) {
  if (item.count > 1) {
    item.count--;
  }
}

const totalPrice = computed(() => {
  return items.value.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
});

const storedToken = localStorage.getItem("tokenData");
const tokenData = storedToken ? JSON.parse(storedToken) : null;

const getToCart = async () => {
  if (tokenData && tokenData.id) {
    try {
      const result = await axios.post("http://localhost:3000/cart/get", {
        userId: tokenData.id,
      });

      if (result) {
        const cart = result.data;
        items.value = cart;
        console.log("Корзина успешно обновлена:", cart);
        return cart;
      } else {
        console.error("Произошла ошибка при отображении корзины.");
      }
    } catch (error) {
      console.error("Server error:", error);
    }
  } else {
    console.error(
      "Данные пользователя отсутствуют или неполные. Невозможно отобразить корзину."
    );
  }
};

onMounted(() => {
  getToCart();
});
</script>

<style  scoped></style>
