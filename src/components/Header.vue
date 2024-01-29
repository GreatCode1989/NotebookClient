<template>
  <header class="header-container">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img class="img-fluid" src="@/assets/img/usa.png" alt="Изображение" />
        </div>
        <div class="col-md-6">
          <div class="name-header-container">
            <h1 class="name-header">Магический Мир Ваших Желаний</h1>
            <p class="subtitle">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>

const props = defineProps(["title"]);
</script>

<style scoped>
.header-container {
  background-color: #6ea4ca;
  padding: 20px 0;
}

.img-fluid {
  width: 150px;
}

.name-header-container {
  overflow: hidden;
}

.name-header {
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  color: #fff;
}

.subtitle {
  font-size: 21px;
  margin-top: 10px;
  color: #fff;
}

@media (max-width: 767px) {
  .img-fluid {
    width: 100px;
  }

  .name-header {
    font-size: 21px;
  }

  .subtitle {
    font-size: 17px;
  }
}
</style>
