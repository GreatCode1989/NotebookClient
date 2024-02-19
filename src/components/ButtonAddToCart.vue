<template>
  <div
  :style="{ color: isPartIdAdded ? 'green' : 'white' }" 
  :class="{ 'btn-primary': !isPartIdAdded, 'btn-warning': isPartIdAdded}"
    class="btn add-to-cart"
  >
    <i @click="handleButtonClick" class="fa-solid fa-shopping-cart"></i>
  </div>
  
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

const router = useRouter();
const store = useStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const storedToken = localStorage.getItem("tokenData");
const tokenData = storedToken ? JSON.parse(storedToken) : null;

const isPartIdAdded = ref(true);

onMounted(() => {
  if (tokenData && props.item && props.item._id) {
    const partId = props.item._id;

    const headers = {
      Authorization: `Bearer ${tokenData.access_token}`,
    };

    store
      .dispatch("checkPartId", {
        partId,
        userId: tokenData.id,
        headers,
      })
      .then((result) => {
        if (typeof result === "boolean") {
          isPartIdAdded.value = result;
        } else if (
          result &&
          typeof result === "object" &&
          "isPartIdAdded" in result
        ) {
          isPartIdAdded.value = result.isPartIdAdded;
        } else {
          console.error("Invalid response format:", result);
        }
      });
  }
});

const handleButtonClick = () => {
  if (isPartIdAdded.value) {
    router.push({ name: "cart" });
  } else {
    addToCart();
  }
};

const addToCart = () => {
  if (tokenData && props.item && props.item._id) {
    const headers = {
      Authorization: `Bearer ${tokenData.access_token}`,
    };

    store
      .dispatch("addToCart", {
        partId: props.item._id,
        username: tokenData.username,
        userId: tokenData.id,
        headers: headers,
      })
      .then((result) => {
        if (result) {
          isPartIdAdded.value = true;
          const cart = result.data;
          console.log("Корзина успешно обновлена:", cart);
          router.push({ name: "cart" });
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
