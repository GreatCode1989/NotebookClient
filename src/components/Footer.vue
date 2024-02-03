<template>
    <div id="app">
    <footer class="footer mt-auto py-4" style="background-color: #e6fde3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span class="text-muted fs-10 mb-3"
              >Designed and Written by Anatoliy Trizna &copy; 2024</span
            >
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <a
              href="https://www.instagram.com/anatoliysavior/"
              class="me-2"
              target="_blank"
            >
              <img src="../assets/img/instagram.jpeg" alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/anatoliy-trizna-451340287/"
              class="me-2"
              target="_blank"
            >
              <img src="../assets/img/linkedin.png" alt="linkedin" />
            </a>
            <a href="tel:+123456789" class="me-2" target="_blank">
              <img src="../assets/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://t.me/night_coder_one" class="me-2" target="_blank">
              <img src="../assets/img/telegram.png" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
img {
  width: 30px;
}

img:hover {
  transform: scale(1.2);
}
#app {
  display: flex;
  flex-direction: column;
  position: relative;
}

.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #e6fde3;
  padding: 15px;
  text-align: center;
}
</style>
