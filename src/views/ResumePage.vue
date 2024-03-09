<template>
  <div>
    <!-- header design -->

    <header class="header">
      <a href="#" class="logo">Anatoliy.</a>

      <div class="fa-solid fa-bars" id="menu-icon"></div>

      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <router-link class="link" :to="{ name: 'home' }">Store</router-link>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="skills">Skills</a>
        <a href="contact">Contact</a>
      </nav>
    </header>

    <!-- home section design -->

    <section class="home" id="home">
      <div class="home-content">
        <h1>Hi, I'm <span>Anatoliy Trizna</span></h1>
        <div class="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Hello! I am Anatoliy Trizna, a dedicated Vue.js and Nuxt.js developer
          with over 2 years of experience. I specialize in creating dynamic and
          responsive user interfaces using cutting-edge technologies. Below is a
          summary of my key skills and experiences.
        </p>
        <div class="btn-box">
          <a
            href="https://www.linkedin.com/in/anatoliy-trizna-451340287/"
            target="_blank"
            class="btn"
            >Hire me</a
          >
          <a href="https://t.me/night_coder_one" target="_blank" class="btn"
            >Let's Talk</a
          >
        </div>
      </div>

      <div class="home-sci">
        <a href="https://www.facebook.com/triznaanatoliy/" target="_blank"
          ><i class="fa-brands fa-facebook-f"></i
        ></a>
        <a href="https://www.instagram.com/triznaanatoliy/" target="_blank">
          <i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://www.tiktok.com/@user94057772430012" target="_blank">
          <i class="fa-brands fa-tiktok"></i
        ></a>
      </div>
    </section>

    <!-- about section design -->

    <section class="about" id="about">
      <h2 class="heading">About <span>Me</span></h2>

      <div class="about-img">
        <img src="../assets/img/my-photo.jpg" alt="Photo" />
      </div>

      <div class="about-content">
        <h3>Frontend Developer!</h3>
        <p>
          Hello! I am Anatoliy Trizna, a dedicated Vue.js and Nuxt.js developer
          with over 2 years of experience. I specialize in creating dynamic and
          responsive user interfaces using cutting-edge technologies. Below is a
          summary of my key skills and experiences:
        </p>
      </div>

      <div class="btn-box btns">
        <router-link class="btn" :to="{ name: 'home' }">Store</router-link>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
}

:root {
  --bg-color: #081b29;
  --second-bg-color: #112e42;
  --text-bg-color: #ededed;
  --main-color: #00abf0;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  background: #081b29;
  color: var(--text-bg-color);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: #1a3d57;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 25px;
  color: whitesmoke;
  font-weight: 600;
}

.navbar a {
  font-size: 18px;
  color: whitesmoke;
  font-weight: 500;
  margin-left: 35px;
  transition: 0.3s;
}

.navbar a:hover,
.navbar a.active {
  color: #00abf0;
}

#menu-icon {
  font-size: 30px;
  color: whitesmoke;
  cursor: pointer;
  display: none;
}

section {
  min-height: 100vh;
  padding: 100px 9% 20px;
  background: #1a3d57;
  color: whitesmoke;
}

.home {
  display: flex;
  align-items: center;
  padding: 0 9%;
  background: url(../assets/img/resume.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.home-content {
  max-width: 600px;
}

.home-content h1 {
  font-size: 54px;
  font-weight: 700;
  line-height: 1.3;
}

.home-content .text-animate {
  position: relative;
  width: 328px;
}

.home-content .text-animate h3 {
  font-size: 32px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 0.5px #fff;
  background-image: linear-gradient(#00abf0, #00abf0);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -410px 0;

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
  margin: 20px 0 40px;
}

.btn-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 50px;
}

.btn-box .btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  background: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 80px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: #1a3d57;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}

.btn-box .btn:hover {
  color: #00abf0;
}

.btn-box .btn:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #00abf0;
  z-index: -1;
  transition: 0.5s;
}

.btn-box .btn:nth-child(2):hover {
  color: #1a3d57;
}

.btn-box .btn:nth-child(2) {
  background: #1a3d57;
  color: #00abf0;
}

.btn-box .btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #1a3d57;
  z-index: -1;
  transition: 0.5s;
}

.btn-box .btn:hover::before {
  width: 100%;
}

.home-sci {
  position: absolute;
  bottom: 120px;
  width: 170px;
  display: flex;
  justify-content: space-between;
}

.home-sci a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #00abf0;
  border-radius: 50%;
  font-size: 20px;
  color: #00abf0;
  z-index: 1;
  overflow: hidden;
}

.home-sci a:hover {
  color: #1a3d57;
}

.home-sci a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #00abf0;
  z-index: -1;
  transition: 0.5s;
}

.home-sci a:hover::before {
  width: 100%;
}

.home-imgHover {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background: transparent;

  transition: 0.7s;
}

.home-imgHover:hover {
  background: url(../assets/img/my-photo.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  width: 300;
  border-radius: 90%;
  opacity: 0.8;
}

.about {
  
}
</style>
