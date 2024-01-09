<template>
  <div>
    <div class="navbar">
      <div class="nav-item">
        <router-link class="nav-link" :to="{ name: 'list' }">
          Главная
        </router-link>
        <router-link class="nav-link" :to="{ name: 'user' }">
          Регистрация/Вход
        </router-link>
        <router-link class="nav-link" :to="{ name: 'page' }">
          Избранное
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.navbar
  position: relative
  background: $graynav
  padding: 15px
  text-align: center
  justify-content: space-between

.nav-link
  text-decoration: none
  color: #fff
  font-weight: bold
  font-size: 18px
  margin: 0 70px
  letter-spacing: 1px

.nav-link:hover
  color: $violet

@media screen and (max-width: 768px)
  .navbar
    flex-direction: column
    align-items: center


  .nav-link
    margin: 10px 5px
</style>
