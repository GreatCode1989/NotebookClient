<template>
  <div>
    <Header />

    <NavbarMenu :carouselItem="false" />

    <!-- product -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="breadcrumbs">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="category.html">Category</a></li>
              <li><span>{{ itemDetails.text }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

<!-- Carousel start -->

    <div class="container mb-3 ">

        <div class="col-md-12 col-lg-12 ">
          <div class="bg-white h-100">
            <div
              id="carouselExampleFade"
              class="carousel carousel-dark slide carousel-fade"
            >
              <div class="carousel-inner ">

                <div
                  class="carousel-item"
                  v-for="(image, index) in itemDetails.image"
                  :key="index"
                  :class="{ active: index === 0 }"
                >
                  <img
                    v-if="itemDetails.image && image"
                    :src="require(`../assets/img/${image}.jpg`)"
                    :alt="index"
                    class="img-detail"
                  />
                </div>

              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>


    </div>

     

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-12 mb-3">
          <div class="bg-white product-content p-3 h-100">
            <h1 class="section-title h3"><span>Product Name</span></h1>

            <div class="product-price">
              <small>$70</small>
              ${{ itemDetails.price }}
            </div>

            <p>
              {{ itemDetails.about }}
            </p>

            <div class="product-add2cart">
              <div class="input-group">
                <input type="number" class="form-control" value="1" min="1" />
                <ButtonAddToCart text="Add To Cart"/>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-lg-4 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fa-solid fa-shield-halved"></i> Гарантия
                    </h5>
                    <ul class="list-unstyled">
                      <li>Гарантия 1 год</li>
                      <li>Возвращение товара в течение 14 дней</li>
                      <li>Гарантия качества</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fa-solid fa-truck-fast"></i> Доставка
                    </h5>
                    <ul class="list-unstyled">
                      <li>Доставка по всей стране</li>
                      <li>Доставка почтой</li>
                      <li>Самовывоз</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-2">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                      <i class="fa-regular fa-credit-card"></i> Оплата
                    </h5>
                    <ul class="list-unstyled">
                      <li>Наличный рассчет</li>
                      <li>Безналичный рассчет</li>
                      <li>VISA/MasterCard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Specification -->

      <div class="row mt-3 d-flex">
        <div class="col-lg-8 col-md-12">
          <div class="product-content-details bg-white p-4">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
            
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="features-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="features-tab-pane"
                  aria-selected="true"
                >
                  Features
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link "
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="description-tab-pane"
                  aria-selected="false"
                >
                  Description
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="video-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#video-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="video-tab-pane"
                  aria-selected="false"
                >
                  Video
                </button>
              </li>

            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade "
                id="description-tab-pane"
                role="tabpanel"
                aria-labelledby="description-tab"
                tabindex="0"
              >
                <p>
               {{ itemDetails.description }}
                </p>
               
              </div>

              <div
                class="tab-pane fade show active"
                id="features-tab-pane"
                role="tabpanel"
                aria-labelledby="features-tab"
                tabindex="0"
              >
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row" style="width: 30%;">Brand: </th>
                      <td style="width: 70%;">{{ itemDetails.brand }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;   ">Display: </th>
                      <td style="width: 70%;">{{ itemDetails.display }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%; text-transform: uppercase;">Cpu: </th>
                      <td style="width: 70%;">{{ itemDetails.cpu }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Graphics: </th>
                      <td style="width: 70%;">{{ itemDetails.gpu2 }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Memory: </th>
                      <td style="width: 70%;">{{ itemDetails.memory }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Brand: </th>
                      <td style="width: 70%;">{{ itemDetails.brand }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Brand: </th>
                      <td style="width: 70%;">{{ itemDetails.brand }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Brand: </th>
                      <td style="width: 70%;">{{ itemDetails.brand }}</td>
                    </tr>
                    <tr>
                      <th scope="row" style="width: 30%;">Brand: </th>
                      <td style="width: 70%;">{{ itemDetails.brand }}</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

              <div
                class="tab-pane fade"
                id="video-tab-pane"
                role="tabpanel"
                aria-labelledby="video-tab"
                tabindex="0"
              >
                <div class="ratio ratio-16x9">
                  <video src="assets/clothing.mp4" controls></video>
                </div>
              </div>
            </div>
          </div>
       
        </div>
        <div class="col-md-4">
    <img src="../assets/img/girl.jpg" alt="" class="img-girl">
  </div>
      </div>
    </div>

    <!-- popular -->
    <PopularItem />
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import PopularItem from "@/components/PopularItem.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";
import ButtonAddToCart from "@/components/ButtonAddToCart.vue";

const store = useStore();
const route = useRoute();

const itemDetails = ref([]);

onMounted(async () => {
  const notebookPartId = route.params.id;
  console.log(notebookPartId);
  try {
    const result = await store.dispatch("notebookPartDetails", notebookPartId);

    if (result.success) {
      console.log("Данные о товаре:", result.data);
      itemDetails.value = result.data;
      console.log(itemDetails.value);
    } else {
      console.error("Ошибка при получении данных о товаре");
    }
  } catch (error) {
    console.error("Ошибка при выполнении экшена:", error);
  }
});
</script>

<style scoped>
.img-detail {
  border-radius: 10px;
  max-height: 800px;
  width: 100%;
  object-fit: contain;
}

.img-girl{
  border-radius: 10px;
 
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 992px) {
  .img-girl{
    display: none;
  }
  
}

</style>
