<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" v-model="formData.username" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="formData.password" />
        </div>
        <div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const formData = ref({
    username: '',
    email: '',
    password: ''
  });
  
  const submitForm = async () => {
    try {
      const success = await store.dispatch('registerUser', formData.value);
  
      if (success) {
        // Ваш код в случае успешной регистрации
        console.log('Пользователь успешно зарегистрирован!');
      } else {
        // Ваш код в случае неудачной регистрации
        console.log('Ошибка при регистрации пользователя.');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  </script>
  