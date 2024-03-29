<template>
  <div>
    <!-- header design -->

    <header class="header">
      <a href="#" class="logo"
        >Anatoliy.<span class="animate" style="--i: 1"></span
      ></a>

      <div class="fa-solid fa-bars" id="menu-icon">
        <span class="animate" style="--i: 2"></span>
      </div>

      <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <span class="active-nav"></span>
        <span class="animate" style="--i: 2"></span>
      </nav>
    </header>

    <!-- home section design -->

    <section class="home show-animate" id="home">
      <div class="home-content">
        <h1>Hi, I'm <span>Anatoliy Trizna</span></h1>
        <div class="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Passionate and skilled Full Stack Developer with a focus on building
          robust and efficient web applications. I specialize in creating
          seamless user experiences and have hands-on experience with
          technologies such as Vue.js, Nest.js, and MongoDB.
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
        <a href="https://github.com/GreatCode1989" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>

    <!-- about section design -->

    <section class="about" id="about">
      <h2 class="heading">
        About My <span>Project</span
        ><span class="animate scroll" style="--i: 1"></span>
      </h2>

      <div class="about-img">
        <img :src="require('../assets/img/my-photo.jpg')" alt="Photo" />
        <span class="circle-spin"></span>
        <span class="animate scroll" style="--i: 2"></span>
      </div>

      <div class="about-content">
        <h3>
          CurtainCraft - <span>Best Price!</span
          ><span class="animate scroll" style="--i: 3"></span>
        </h3>
        <p>
          "Passionate Full Stack Developer with hands-on experience
          demonstrating skills through a demo online curtain store. Leveraging
          the power of Vue3, MongoDB, Nest.js, and JWT for an immersive and
          secure shopping experience. Crafted an immersive online curtain store
          experience with seamless client-side navigation through Vue Router,
          efficient state management using Vuex, visually appealing and
          responsive UI components powered by Bootstrap 5, and ensured secure
          user authentication and authorization through JWT, featuring dynamic
          product listings and interactive elements to engage users."
          <span class="animate scroll" style="--i: 5"></span>
        </p>
      </div>

      <div class="btn-box btns">
        <a
          href="https://greatcode1989.github.io/CurtainCraft/"
          class="btn"
          target="_blank"
          >Store</a
        >
        <span class="animate scroll" style="--i: 5"></span>
      </div>
    </section>

    <!-- education section design -->

    <section class="education" id="education">
      <h2 class="heading journey">
        My <span>Journey</span>
        <span class="animate scroll" style="--i: 1"></span>
      </h2>

      <div class="education-row">
        <div class="education-column">
          <h3 class="title">
            Education<span class="animate scroll" style="--i: 2"></span>
          </h3>

          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days fw-bold"></i> &nbsp;2006 -
                  2011
                </div>
                <h3>Specialist in Marketing - Alfred Nobel University</h3>
                <p>
                  Developed and implemented comprehensive marketing strategies,
                  conducted in-depth consumer behavior analysis, applied digital
                  marketing techniques (SEO, social media marketing, and content
                  creation), and performed thorough market research to identify
                  trends, competitors, and opportunities for product
                  positioning.
                </p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; 2019-2020
                </div>
                <h3>FreeCodeCamp Certification</h3>
                <p>
                  Successfully completed the Full Stack Developer certification
                  on FreeCodeCamp, gaining proficiency in HTML, CSS, JavaScript,
                  Vue3, Node.js. Applied acquired skills to real-world projects,
                  solidifying understanding and problem-solving abilities.
                </p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; 2020-2021
                </div>
                <h3>Frontend Development Training</h3>
                <p>
                  Completed specialized training in frontend development,
                  acquiring proficiency in HTML, CSS, and JavaScript. Developed
                  practical skills in building responsive and user-friendly web
                  interfaces.
                </p>
              </div>
            </div>
            <span class="animate scroll" style="--i: 3"></span>
          </div>
        </div>

        <!-- experience -->

        <div class="education-column">
          <h3 class="title">
            Experience <span class="animate scroll" style="--i: 5"></span>
          </h3>

          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; 2021-2022
                </div>
                <h3>Frontend Developer - Best Solutions</h3>
                <p>
                  Collaborating in a dynamic team, I was actively involved in
                  solving problems using a robust technology stack including Vue
                  3, JavaScript, and TypeScript. Using advanced tools such as
                  ElementPlus, Pinia Store, Vue Router, SASS and SCSS, I
                  specialize in developing Element Plus websites and Single Page
                  Applications (SPAs).
                </p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; 2022-2023
                </div>
                <h3>Frontend Developer - CodeCrafters Tech</h3>
                <p>
                  Contributed to the development of user interfaces for web
                  applications using Vue3. Collaborated with backend developers
                  using Nest.js and MongoDB to ensure seamless integration of
                  frontend and backend functionalities.
                </p>
              </div>
            </div>

            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp; 2023-now
                </div>
                <h3>Full Stack Developer - Tech Innovators Ltd.</h3>
                <p>
                  Currently contributing to the development of innovative web
                  applications using Vue3 for frontend, Nest.js for backend, and
                  MongoDB for database management. Implementing scalable and
                  efficient solutions to meet project requirements.
                </p>
              </div>
            </div>
            <span class="animate scroll" style="--i: 5"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- skills section design -->

    <section class="skills" id="skills">
      <h2 class="heading">
        My <span>Skills</span
        ><span class="animate scroll" style="--i: 1"></span>
      </h2>

      <div class="skills-row">
        <div class="skills-column">
          <h3 class="title">
            Coding Skills<span class="animate scroll" style="--i: 2"></span>
          </h3>

          <div class="skills-box">
            <div class="skills-content">
              <div class="progressive">
                <h3>HTML <span>90%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>CSS <span>85%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>JavaScript <span>90%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>TypeScript <span>70%</span></h3>
                <div class="bar"><span></span></div>
              </div>
            </div>
            <span class="animate scroll" style="--i: 2"></span>
          </div>
        </div>

        <!-- professional skills -->

        <div class="skills-column">
          <h3 class="title">
            Professional Skills<span
              class="animate scroll"
              style="--i: 3"
            ></span>
          </h3>

          <div class="skills-box">
            <div class="skills-content">
              <div class="progressive">
                <h3>Vue3 <span>85%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>Nuxt 3 <span>70%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>Nest <span>95%</span></h3>
                <div class="bar"><span></span></div>
              </div>

              <div class="progressive">
                <h3>MongoDB <span>90%</span></h3>
                <div class="bar"><span></span></div>
              </div>
            </div>
            <span class="animate scroll" style="--i: 5"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- contact section design -->

    <section class="contact" id="contact">
      <h2 class="heading">
        Contact <span>Me!</span
        ><span class="animate scroll" style="--i: 1"></span>
      </h2>

      <form id="contactForm" action="#contact">
        <div class="input-box">
          <div class="input-field">
            <input type="text" placeholder="Full Name" required />
            <span class="focus"></span>
          </div>
          <div class="input-field">
            <input type="email" placeholder="Email Address" required />
            <span class="focus"></span>
          </div>
          <span class="animate scroll" style="--i: 3"></span>
        </div>

        <div class="input-box">
          <div class="input-field">
            <input
              type="tel"
              pattern="^\+380\d{9}$"
              placeholder="Mobile Number"
              title="Please enter a valid Ukrainian phone number starting with +380 and followed by 9 digits"
              required
            />

            <span class="focus"></span>
          </div>
          <div class="input-field">
            <input type="text" placeholder="Email Subject" required />
            <span class="focus"></span>
          </div>
          <span class="animate scroll" style="--i: 5"></span>
        </div>

        <div class="textarea-field">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span class="focus"></span>
          <span class="animate scroll" style="--i: 7"></span>
        </div>

        <div class="btn-box btns">
          <button type="submit" class="btn">Send</button>
          <span class="animate scroll" style="--i: 8"></span>
        </div>
      </form>
    </section>

    <!-- footer design -->

    <footer class="footer">
      <div class="footer-text">
        <p>Copyright &copy; 2024 by Trizna | All Rights Reserved.</p>
        <span class="animate scroll" style="--i: 3"></span>
      </div>

      <div class="footer-iconTop">
        <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
        <span class="animate scroll" style="--i: 4"></span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // toggle icon navbar
  let navbar = document.querySelector(".navbar");
  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // scroll sections
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to the appropriate navLink
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
        // active section for animation on scroll
        sec.classList.add("show-animate");
      }
      // if to use animation that repeats on scroll use this
      else {
        sec.classList.remove("show-animate");
      }
    });

    // sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("active");
    navbar.classList.remove("active");

    // animation footer on scroll
    let footer = document.querySelector("footer");

    footer.classList.toggle(
      "show-animate",
      window.innerHeight + window.scrollY >=
        document.scrollingElement.scrollHeight
    );
  });

  // form reset
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    form.reset();
  });
});
</script>

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
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: 0.3s;
}

.header.sticky {
  background: #112e42;
}

.logo {
  position: relative;
  font-size: 25px;
  color: whitesmoke;
  font-weight: 600;
}

.navbar {
  position: relative;
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
  position: relative;
  color: whitesmoke;
  cursor: pointer;
  display: none;
}

#menu-icon.active::before {
  content: "\f00d";
  font-size: 20px;
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
  position: relative;
  display: inline-block;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.3;
}

.home-content h1 span {
  color: whitesmoke;
}

.home-content .text-animate {
  position: relative;
  width: 410px;
  z-index: 1;
}

.home-content .text-animate h3 {
  font-size: 32px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 0.3px #fff;
  background-image: linear-gradient(#00abf0, #00abf0);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -285px 0;
}

.home.show-animate .home-content .text-animate h3 {
  animation: homeBgText 6s linear infinite;
}

/* .home-content .text-animate h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 2px solid #00abf0;
  z-index: -1;
  animation: homeCursorText 6s linear infinite;
  
} */

.home-content p {
  position: relative;
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

/* .home-imgHover:hover {
  background: url(../assets/img/my-photo.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  width: 300;
  border-radius: 90%;
  opacity: 0.8;
} */

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: #1a3d57;
  padding-top: 0;
}

.heading {
  position: relative;
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

.about .heading {
  margin-top: 100px;
}

span {
  color: #00abf0;
}

.about-img {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img img {
  width: 90%;
  border-radius: 50%;
  border: 2px solid #00abf0;
}

.about-img .circle-spin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-left: 2px solid #00abf0;
  border-right: 2px solid #00abf0;
  animation: aboutSpinner 8s linear infinite;
}

.about-content {
  text-align: justify;
  max-width: 700px;
}

.about-content h3 {
  position: relative;
  display: inline-block;
  font-size: 27px;
  font-weight: 700;
}

.about-content p {
  position: relative;
  font-size: 16px;
  margin: 20px 0 30px;
}

.btn-box.btns {
  display: inline-block;
  width: 150px;
}

.btn-box.btns a::before {
  background: #1a3d57;
}

.education {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  padding-bottom: 50px;
  background: #112e42;
}

.education .heading {
  font-weight: 700;
  margin-top: 30px;
}

.education .education-row {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.education-row .education-column {
  flex: 1 1 400px;
}

.education-column .title {
  position: relative;
  display: inline-block;
  font-size: 35px;
  margin: 20px 0 25px 20px;
  font-weight: 700;
}

.education-column .education-box {
  position: relative;
  border-left: 2px solid #00abf0;
}

.education-box .education-content {
  position: relative;
  padding-left: 25px;
}

.education-box .education-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: -11px;
  width: 20px;
  height: 20px;
  background: #00abf0;
  border-radius: 50%;
}

.education-content .content {
  position: relative;
  padding: 15px;
  border: 2px solid #00abf0;
  border-radius: 7px;
  margin-bottom: 20px;
  overflow: hidden;
  z-index: 1;
}

.education-content .content::before {
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

.education-content .content:hover::before {
  width: 100%;
}

.education-content .content .year {
  font-size: 19px;
  font-weight: 600;
  color: #00abf0;
  padding-bottom: 10px;
}

.education-content .content .year i {
  padding-right: 5px;
}

.education-content h3 {
  font-size: 25px;
  font-weight: 700;
}

.education-content p {
  font-size: 16px;
  padding-top: 8px;
}

.skills {
  min-height: auto;
  padding-bottom: 70px;
  background: #1a3d57;
}

.skills h2 {
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.skills .skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.skills-row .skills-column {
  flex: 1 1 400px;
}

.skills-column .title {
  position: relative;
  display: inline-block;
  font-size: 35px;
  margin: 20px 0 20px;
  font-weight: 700;
}

.skills-column .skills-box {
  position: relative;
}

.skills-box .skills-content {
  position: relative;
  border: 2px solid #00abf0;
  border-radius: 7px;
  padding: 5px 15px;
  z-index: 1;
  overflow: hidden;
}

.skills-box .skills-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #112e42;
  z-index: -1;
  transition: 0.5s;
}

.skills-box .skills-content:hover::before {
  width: 100%;
}

.skills-content .progressive {
  padding: 10px 0;
}

.skills-content .progressive h3 {
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}

.skills-content .progressive h3 span {
  color: whitesmoke;
  font-weight: 700;
}

.skills-content .progressive .bar {
  height: 25px;
  border-radius: 7px;
  border: 2px solid #00abf0;
  padding: 5px;
  margin: 10px 0;
}

.skills-content .progressive .bar span {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: #00abf0;
}

.skills-column:nth-child(1)
  .skills-content
  .progressive:nth-child(1)
  .bar
  span {
  width: 90%;
}
.skills-column:nth-child(1)
  .skills-content
  .progressive:nth-child(2)
  .bar
  span {
  width: 85%;
}
.skills-column:nth-child(1)
  .skills-content
  .progressive:nth-child(3)
  .bar
  span {
  width: 90%;
}
.skills-column:nth-child(1)
  .skills-content
  .progressive:nth-child(4)
  .bar
  span {
  width: 70%;
}

.skills-column:nth-child(2)
  .skills-content
  .progressive:nth-child(1)
  .bar
  span {
  width: 85%;
}
.skills-column:nth-child(2)
  .skills-content
  .progressive:nth-child(2)
  .bar
  span {
  width: 70%;
}
.skills-column:nth-child(2)
  .skills-content
  .progressive:nth-child(3)
  .bar
  span {
  width: 95%;
}
.skills-column:nth-child(2)
  .skills-content
  .progressive:nth-child(4)
  .bar
  span {
  width: 90%;
}

.contact {
  min-height: 900px;
  background: #112e42;
}

.contact h2 {
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.contact form {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.contact form .input-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;
}

.contact form .input-box .input-field {
  position: relative;
  width: 49%;
  margin: 8px 0;
}

.contact form .input-box .input-field input,
.contact form .textarea-field textarea {
  width: 100%;
  height: 100%;
  padding: 15px;
  font-size: 16px;
  color: whitesmoke;
  background: transparent;
  border-radius: 6px;
  border: 2px solid #00abf0;
}

.contact form .input-box .input-field input::placeholder,
.contact form .textarea-field textarea::placeholder {
  color: whitesmoke;
}

.contact form .focus {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #1a3d57;
  border-radius: 6px;
  z-index: -1;
  transition: 0.5s;
}

.contact form .input-box .input-field input:focus ~ .focus,
.contact form .input-box .input-field input:valid ~ .focus,
.contact form .textarea-field textarea:focus ~ .focus,
.contact form .textarea-field textarea:valid ~ .focus {
  width: 100%;
}

.contact form .textarea-field {
  position: relative;
  margin: 8px 0 30px;
  display: flex;
  z-index: 1;
}

.contact form .textarea-field textarea {
  resize: none;
}

.contact form .btn-box.btns .btn {
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 9%;
  background: #1a3d57;
}

.footer-text,
.footer-iconTop {
  position: relative;
}

.footer-text p {
  font-size: 16px;
}

.footer-iconTop a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 6px;
  z-index: 1;
  overflow: hidden;
}

.footer-iconTop a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: #112e42;
  z-index: -1;
  transition: 0.5s;
}

.footer-iconTop a:hover::before {
  width: 100%;
}

.footer-iconTop a i {
  font-size: 24px;
  color: #112e42;
  transition: 0.2s;
}

.footer-iconTop a:hover i {
  color: #00abf0;
}

/* ANIMATION RELOAD AND SCROLL */
.animate {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #112e42;
  z-index: 98;
}

.logo .animate,
.navbar .animate,
#menu-icon .animate,
.home.show-animate .animate {
  animation: showRight 1s ease forwards;
  animation-delay: calc(0.3s * var(--i));
}

.animate.scroll {
  transition: 1s ease;
  transition-delay: calc(0.3s / var(--i));
  animation: none;
}

section:nth-child(odd) .animate.scroll,
.footer .animate.scroll {
  background: #1a3d57;
}

.education .education-box .animate.scroll {
  width: 105%;
}

.about.show-animate .animate.scroll,
.education.show-animate .animate.scroll,
.skills.show-animate .animate.scroll,
.contact.show-animate .animate.scroll,
.footer.show-animate .animate.scroll {
  transition-delay: calc(0.3s * var(--i));
  width: 0;
}

/* BREAKPOINTS */
@media (max-width: 1200px) {
  .logo {
    font-size: 22px;
  }
  .navbar a {
    font-size: 15px;
  }
  #menu-icon {
    font-size: 27px;
  }
  .home-content h1 {
    font-size: 50px;
  }
  .home-content .text-animate h3 {
    font-size: 28px;
  }
  .home-content p {
    font-size: 13px;
  }
  .btn-box {
    width: 300px;
  }
  .btn-box .btn {
    font-size: 14px;
    width: 130px;
    height: 90%;
  }
  .home-sci {
    width: 150px;
  }
  .home-sci a {
    width: 37px;
    height: 37px;
    font-size: 18px;
  }
  .heading {
    font-size: 44px;
  }
  .about-content h3 {
    font-size: 24px;
  }
  .about-content p {
    font-size: 13px;
  }
  .education-column .title {
    font-size: 32px;
  }
  .education-content .content .year {
    font-size: 15px;
  }
  .education-content h3 {
    font-size: 21px;
  }
  .education-content p {
    font-size: 13px;
  }
  .skills-column .title {
    font-size: 30px;
  }
  .skills-content .progressive h3 {
    font-size: 15px;
  }
  .contact form .input-box .input-field input,
  .contact form .textarea-field textarea {
    font-size: 14px;
  }
  .footer-text p {
    font-size: 13px;
  }
  .footer-iconTop a {
    padding: 6px;
  }
  .footer-iconTop a i {
    font-size: 20px;
  }
}

@media (max-width: 991px) {
  .header {
    padding: 20px 4%;
  }
  .heading {
    font-size: 42px;
  }
  .about .heading {
    margin-top: 0;
  }
  .education-column .title {
    font-size: 30px;
  }
  .skills-column .title {
    font-size: 28px;
  }
  section {
    padding: 100px 4% 20px;
  }
  .home {
    padding: 0 4%;
  }
  .footer {
    padding: 20px 4%;
  }
}

@media (max-width: 768px) {
  .header {
    background: #1a3d57;
  }

  #menu-icon {
    display: block;
    font-size: 20px;
  }

  .navbar {
    display: block;
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 10px 4%;
    background: #00abf0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.25s ease;
    transition-delay: 0.25s;
    z-index: 1;
  }

  .navbar.active {
    left: 0;
    transition-delay: 0s;
  }

  .navbar .active-nav {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #1a3d57;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    z-index: -1;
    transition: 0.25s ease;
    transition-delay: 0s;
  }

  .navbar.active .active-nav {
    transition-delay: 0.25s;
    left: 0;
  }

  .navbar a {
    display: block;
    font-size: 15px;
    margin: 28px 0;
    transform: rotateX("-200px");
    transition: 0.25s;
    transition-delay: 0s;
  }

  .navbar.active a {
    transform: translateX(0);
    transition-delay: 0.25s;
  }
}

@media (max-width: 520px) {
  .logo {
    font-size: 18px;
  }
  .navbar a {
    font-size: 14px;
  }
  #menu-icon {
    font-size: 22px;
  }
  .home-content h1 {
    font-size: 35px;
  }
  .home-content .text-animate h3 {
    font-size: 22px;
  }

  .home-content p {
    font-size: 12px;
  }
  .btn-box {
    width: 270px;
  }
  .btn-box .btn {
    font-size: 13px;
    width: 120px;
    height: 85%;
  }
  .home-sci {
    width: 120px;
  }
  .home-sci a {
    width: 32px;
    height: 32px;
    font-size: 15px;
  }
  .heading {
    font-size: 35px;
  }
  .about-content h3 {
    font-size: 22px;
  }
  .about-content p {
    font-size: 12px;
  }
  .education-column .title {
    font-size: 27px;
  }
  .education-content .content .year {
    font-size: 14px;
  }
  .education-content h3 {
    font-size: 19px;
  }
  .education-content p {
    font-size: 12px;
  }
  .skills-column .title {
    font-size: 25px;
  }
  .skills-content .progressive h3 {
    font-size: 14px;
  }
  .contact form .input-box .input-field input,
  .contact form .textarea-field textarea {
    font-size: 12px;
  }
  .footer-text p {
    font-size: 12px;
  }
  .footer-iconTop a {
    padding: 5px;
  }
  .footer-iconTop a i {
    font-size: 18px;
  }
}

@media (max-width: 470px) {
  .logo {
    font-size: 13px;
  }
  .header {
    padding: 10px 14px;
  }
  .navbar a {
    font-size: 11px;
  }
  #menu-icon {
    font-size: 15px;
  }
  #menu-icon.active::before {
    font-size: 15px;
  }
  .home-content h1 {
    font-size: 30px;
  }
  .home-content .text-animate h3 {
    font-size: 18px;
  }
  .home-content p {
    font-size: 10px;
  }
  .btn-box {
    width: 230px;
  }

  .btn-box .btn {
    font-size: 10px;
    width: 100px;
    height: 70%;
  }
  .home-sci {
    width: 100px;
    bottom: 70px;
  }
  .home-sci a {
    width: 27px;
    height: 27px;
    font-size: 12px;
  }
  .heading {
    margin-top: 30px;
    font-size: 27px;
  }

  section {
    padding: 30px 5%;
  }
  .about-content h3 {
    font-size: 17px;
  }
  .about-content p {
    font-size: 10px;
  }
  .education-column .title {
    font-size: 21px;
  }
  .education-content .content .year {
    font-size: 12px;
  }
  .education-content h3 {
    font-size: 17px;
  }
  .education-content p {
    font-size: 10px;
  }
  .skills-column .title {
    font-size: 21px;
  }
  .skills-content .progressive h3 {
    font-size: 12px;
  }

  .contact form .input-box .input-field {
    width: 100%;
  }

  .contact form .input-box .input-field input,
  .contact form .textarea-field textarea {
    font-size: 10px;
  }
  .footer-text p {
    font-size: 10px;
  }
  .footer-iconTop a {
    padding: 4px;
  }
  .footer-iconTop a i {
    font-size: 15px;
  }
}

/* keyframes */
@keyframes homeBgText {
  0%,
  10%,
  100% {
    background-position: -410px 0;
  }
  65%,
  85% {
    background-position: 0 0;
  }
}
/* 
@keyframes homeCursorText {
  0%,
  10%,
  100% {
    width: 0;
  }

  65%,
  78%,
  85% {
   width: 100%;
   opacity: 1;
  }

  78%,
  81% {
    opacity: 0;
  }
} */

@keyframes aboutSpinner {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes showRight {
  100% {
    width: 0;
  }
}
</style>
