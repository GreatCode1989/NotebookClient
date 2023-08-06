<template>
  <div class="product-buttons">
    <button class="remove-from-favorites-button">
      <img src="../assets/icons/heart.png" alt="heart-icon" class="icon" />
      Удалить из избранного
    </button>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import '../assets/styles/main'

.product-buttons
  margin-top: 15px
  display: flex
  flex-direction: column

.remove-from-favorites-button
  padding: 3px
  border: none
  border-radius: 5px
  color: #fff
  font-size: 13px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  transition: background-color 0.3s ease
  margin-bottom: 10px

  &:active
    background-color: darken($accent, 70%)

.icon
  width: 20px
  height: 17px
  margin-right: 10px
  vertical-align: middle

.remove-from-favorites-button
  background-color: $accent

@media (max-width: 768px)
  .product-buttons
    flex-direction: column
    align-items: stretch

  .remove-from-favorites-button
    width: 100%
    margin-bottom: 10px
</style>
