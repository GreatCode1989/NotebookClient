<template>
  <div class="product-buttons">
    <button class="btn d-flex" @click="removeFromCart">
      <img src="@/assets/icons/trash.png" alt="trash-icon" class="icon" />
    </button>
  </div>
</template>

<script setup>
import axios from 'axios';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const removeFromCart = () => {
  if (props.item && props.item._id) {
    axios.post("http://localhost:3000/cart/delete", {
    cartId: props.item._id,
  })
  .then((result) => {
    console.log(props.item._id);
    if (result) {
      const cart = result.data;
      window.location.reload();
      return cart;
    } else {
      console.error("Произошла ошибка при удалении из корзины.");
    }
  });

  } else {
    console.error(
      "Данные пользователя отсутствуют или отсутствует свойство id у item. Невозможно удалить из корзины."
    );
  }
};
</script>

<style scoped>
img {
  width: 25px;
  margin-right: 10px;
}
</style>
