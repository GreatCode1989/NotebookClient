<template>
  <div class="product-buttons">
    <button
      :class="{
        btn: true,
        'btn-primary': !size,
        'btn-secondary': size,
        disabled: isPartIdAdded,
      }"
      @click="addToCart"
      :disabled="isPartIdAdded"
    >
      <img src="@/assets/icons/cart.png" alt="heart-icon" class="icon" />
      {{ isPartIdAdded ? "Добавлено в корзину" : "Добавить в корзину" }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

const store = useStore();
const props = defineProps({
  size: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    required: true,
  },
});

const storedToken = localStorage.getItem("tokenData");
const tokenData = storedToken ? JSON.parse(storedToken) : null;

const isPartIdAdded = ref(false);

onMounted(() => {
  if (tokenData && props.item && props.item._id) {
    const partId = props.item._id;

    store
      .dispatch("checkPartId", {
        partId,
        userId: tokenData.id,
      })
      .then((result) => {
        if (typeof result === 'boolean') {
         
          isPartIdAdded.value = result;
        } else if (result && typeof result === 'object' && 'isPartIdAdded' in result) {
         
          isPartIdAdded.value = result.isPartIdAdded;
        } else {
          console.error("Invalid response format:", result);
        }
      });
  }
});


const addToCart = () => {
  if (tokenData && props.item && props.item._id) {
    store
      .dispatch("addToCart", {
        partId: props.item._id,
        username: tokenData.username,
        userId: tokenData.id,
      })
      .then((result) => {
        if (result) {
          isPartIdAdded.value = true
          const cart = result.data;
          console.log("Корзина успешно обновлена:", cart);

          return cart;
        } else {
          console.error("Произошла ошибка при добавлении в корзину.");
        }
      });
  } else {
    console.error(
      "Данные пользователя отсутствуют или отсутствует свойство id у item. Невозможно добавить в корзину."
    );
  }
};
</script>

<style scoped>
img {
  width: 20px;
  margin-right: 7px;
  margin-bottom: 5px;
}
</style>
