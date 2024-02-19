<template>
  <div>
    <Header />
    
      <NavbarMenu />
  

    <section class="advantages">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>Our advantages</span>
            </h2>
          </div>
        </div>

        <div class="row gy-3 items">
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-shipping-fast"></i>
              </p>
              <p>Direct deliveries from brand manufacturersв</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-cubes"></i>
              </p>
              <p>Wide range of products. More than 10 thousand items</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fas fa-hand-holding-usd"></i>
              </p>
              <p>Pleasant and competitive prices</p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <p>
                <i class="fa-solid fa-user-graduate"></i>
              </p>
              <p>Consultations from professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-products">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>popular products</span>
            </h2>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-6 mb-3"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <div class="product-card" style="height: 100%" >
             
              <div class="product-card-offer">
                <div class="offer-hit ms-1">Hit</div>
                <div class="offer-new ms-1">New</div>

              <ButtonAddToFavorites/>
              </div>

              <div class="product-thumb mt-4 mb-2 me-3 ms-3">
                
                <router-link
                  :to="{ name: 'details', params: { id: item._id } }"
                >
                  <img
                    :src="require(`../assets/img/${item.image[0]}.jpg`)"
                    :alt="item.name"
                   class="rounded"
                  />
                </router-link>
              </div>

              <div class="product-details">
                <router-link
                  :to="{ name: 'details', params: { id: item._id } }"
                >
                  <h4>
                    <h4>
                      {{
                        item.about.slice(0, 80) +
                        (item.about.length > 80 ? "..." : "")
                      }}
                    </h4>
                  </h4>
                </router-link>

                <div
                  class="product-bottom-details d-flex justify-content-between"
                >
                  <div class="product-price">
                    <h4>{{ item.price }} $</h4>
                  </div>
                  <div class="product-links">
                   
                    <ButtonAddToCart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-us" id="about">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12">
            <h2 class="section-title">
              <span>About Us</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              <span class="text-primary font-weight-bold">NotebookeR</span> - is
              a store of quality used laptops from the USA. Here you will find a
              wide selection of laptops from famous brands: Asus, Dell, Lenovo,
              Acer, HP, MSI and others.
            </p>
            <p>
              We provide different categories of laptops: for work and business,
              for complex graphics tasks, video editing, for active daily games,
              for surfing the Internet, watching movies, etc.
            </p>
            <p>
              We have more than 8 years of experience in laptop sales and
              thousands of satisfied customers.
            </p>
            <p>
              All equipment undergoes thorough selection, maintenance and
              testing. An operating system and a set of necessary programs are
              installed on the laptop.
            </p>
          </div>
        </div>
        <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.1070529675467!2d2.3478712780714384!3d48.85881153486507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1ee52239cb%3A0x2cacf4239af49ccb!2zMTggUnVlIFNhaW50LURlbmlzLCA3NTAwMSBQYXJpcywg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sua!4v1683972127217!5m2!1sru!2sua"
          width="100%"
          height="450"
          style="border: 0; display: block"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
  <Footer/>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonAddToCart from "@/components/ButtonAddToCart.vue";
import ButtonAddToFavorites from "@/components/ButtonAddToFavorites.vue";

const store = useStore();
const items = ref([]);

const filteredItems = computed(() => {
  let itemsCopy = [...items.value];

  itemsCopy = itemsCopy.filter((item) => {
    return item.old;
  });

  return itemsCopy.slice(0, 12);
});

const notebookRandom = () => {
  store
    .dispatch("getAllNotebooks")
    .then((data) => {
      items.value = data;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных:", error);
    });
};

onMounted(() => {
  notebookRandom();
});
</script>
