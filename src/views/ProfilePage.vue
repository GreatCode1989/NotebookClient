<template>
  <div>
    <Header />
    <NavbarMenu :carouselItem="false" />

    <section class="home">
      <div class="home-image">
        <!-- Ваш код для изображения -->
      </div>
      <div class="home-content">
        <h1>Hi, I'm Anatoliy Trizna</h1>
        <h3>Frontend Developer</h3>
        <p>
          Hello! I am Anatoliy Trizna, a dedicated Vue.js and Nuxt.js developer
          with over 2 years of experience. I specialize in creating dynamic and
          responsive user interfaces using cutting-edge technologies. Below is a
          summary of my key skills and experiences.
        </p>

        <div class="home-sci">
          <a
            href="https://www.linkedin.com/in/anatoliy-trizna-451340287/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/AnatoliySavior" target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/triznaanatoliy/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>

        <a href="#" class="btn">My works</a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.fa-brands.fa-instagram {
  font-weight: bold;
}

.home {
  max-width: 1800px;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(-90deg, #031540 65%, #fff 35%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
}

.home-image {
  width: 500px;
  height: 500px;
  background: url(../assets/img/my-photo.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  border: 25px solid #fff;
}

.home-content {
  max-width: 600px;
  color: #fff;
  text-align: right;
  word-wrap: break-word;
}

.home-content h1 {
  font-size: 55px;
  line-height: 1.2;
  font-weight: 600;
}

.home-content h3 {
  font-size: 40px;
  color: transparent;
  -webkit-text-stroke: 0.5px #fff;
  background-image: linear-gradient(#00abf0, #00abf0);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -410px 0;
  font-weight: 600;
  animation: animateText 6s linear infinite;
}

@keyframes animateText {
  0%,
  95%,
  100% {
    background-position: -410px 0;
  }
  65%,
  85% {
    background-position: 0 0;
  }
}

.home-content p {
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
  margin-left: 20px;
}

.home-sci {
  margin: 25px 0 40px;
}

.home-sci a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50%;
  font-size: 20px;
  color: #00abf0;
  text-decoration: none;
  margin-left: 12px;
  transition: 0.5s;
}

.home-sci a:hover {
  background: #00abf0;
  color: #fff;
  border-color: #00abf0;
  box-shadow: 0 0 10px #00abf0;
}

.btn {
  padding: 12px 35px;
  background: #00abf0;
  border-radius: 40px;
  font-size: 17px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 0 10px #00abf0;
  transition: 0.5s;
}

.btn:hover {
  box-shadow: none;
}

@media screen and (max-width: 1400px) {
  .home {
    padding: 0 5% 0 10%;
  }

  .home-image {
    width: 450px;
    height: 450px;
  }
}
@media screen and (max-width: 1280px) {
  .home {
    padding: 0 5% 0 7%;
  }

  .home-content {
    max-width: 600px;
    margin-left: 20px;
  }
}
@media screen and (max-width: 1240px) {
  .home {
    padding: 0 5% 0 4%;
  }

  .home-content {
    max-width: 600px;
    margin-left: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .home {
    padding: 0 5% 0 10%;
    position: relative;
  }

  .home-image {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 80px;
    left: 190px;
  }

  .home-content {
    position: absolute;
    right: 30px;
  }

  .home-content h1 {
    font-size: 45px;
  }
  .home-content h3 {
    font-size: 33px;
  }
  .home-content p {
    font-size: 13px;
    margin-top: 20px;
    font-weight: 500;
  }
}
@media screen and (max-width: 1100px) {
  .home {
    background: linear-gradient(-90deg, #031540 75%, #fff 25%);
  }
  .home-content {
    bottom: 200px;
    max-width: 520px;
  }
}
@media screen and (max-width: 890px) {
  .home {
    flex-direction: column;
    background: linear-gradient(-90deg, #031540 90%, #fff 10%);
  }

  .home-content {
    bottom: 190px;
  }

  .home-content h1 {
    font-size: 40px;
  }
  .home-content h3 {
    font-size: 30px;
  }
  .home-content p {
    font-size: 12px;
    margin-left: 25px;
  }
}
@media screen and (max-width: 720px) {
  .home {
    flex-direction: column;
    padding: 0;
    background: linear-gradient(-90deg, #031540 100%);
  }

  .home-image {
    width: 300px;
    height: 300px;
  }

  .home-content {
    max-width: 490px;
    bottom: 230px;
  }

  .home-content h1 {
    font-size: 35px;
  }
  .home-content h3 {
    font-size: 27px;
  }
  .home-content p {
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin-left: 30px;
  }

  .home-sci a {
    width: 30px;
    height: 30px;
  }

  .btn {
    padding: 8px 25px;
    font-size: 15px;
  }
}
@media screen and (max-width: 620px) {
  .home-content {
    max-width: 450px;
  }
}
@media screen and (max-width: 520px) {
  .home-image {
    width: 250px;
    height: 250px;
    top: 50px;
    left: 100px;
  }

  .home-content {
    max-width: 390px;
    bottom: 290px;
  }
  .home-content h1 {
    font-size: 25px;
  }
  .home-content h3 {
    font-size: 20px;
  }
  .home-content p {
    font-size: 11px;
    margin-left: 37px;
  }
}
@media screen and (max-width: 415px) {
  .home-content {
    bottom: 270px;
  }
}
@media screen and (max-width: 400px) {
  .home-content {
    bottom: 220px;
  }
}
</style>
