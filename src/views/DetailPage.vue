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
                                <li><span>Product Name</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

     <div class="container">
                <div class="row">
                    <div class="col-md-5 col-lg-4 mb-3">
                        <div class="bg-white h-100">
                            <div id="carouselExampleFade" class="carousel carousel-dark slide carousel-fade">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/img/products/1.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/img/products/2.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/img/products/3.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/img/products/4.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/img/products/5.jpg" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 col-lg-8 mb-3">
                        <div class="bg-white product-content p-3 h-100">
                            <h1 class="section-title h3"><span>Product Name</span></h1>

                            <div class="product-price">
                                <small>$70</small>
                                $65
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus adipisci alias,
                                minus totam fugiat quia unde ipsum aliquam suscipit officia ut iure sunt quis,
                                doloremque quibusdam, similique eos veritatis.</p>

                            <div class="product-add2cart">
                                <div class="input-group">
                                    <input type="number" class="form-control" value="1" min="1">
                                    <button class="btn btn-warning"><i class="fas fa-shopping-cart"></i> Add to
                                        cart</button>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-lg-4 mb-2">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="card-title"><i class="fa-solid fa-shield-halved"></i> Гарантия
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
                                            <h5 class="card-title"><i class="fa-solid fa-truck-fast"></i> Доставка</h5>
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
                                            <h5 class="card-title"><i class="fa-regular fa-credit-card"></i> Оплата</h5>
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

                <div class="row mt-3">
                    <div class="col-12">
                        <div class="product-content-details bg-white p-4">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="description-tab" data-bs-toggle="tab"
                                        data-bs-target="#description-tab-pane" type="button" role="tab"
                                        aria-controls="description-tab-pane" aria-selected="true">Description</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="features-tab" data-bs-toggle="tab"
                                        data-bs-target="#features-tab-pane" type="button" role="tab"
                                        aria-controls="features-tab-pane" aria-selected="false">Features</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="video-tab" data-bs-toggle="tab"
                                        data-bs-target="#video-tab-pane" type="button" role="tab"
                                        aria-controls="video-tab-pane" aria-selected="false">Video</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="description-tab-pane" role="tabpanel"
                                    aria-labelledby="description-tab" tabindex="0">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam ratione
                                        voluptatibus reiciendis? Vitae ex nesciunt repudiandae sunt deserunt! Quis
                                        numquam cum architecto illum, officia quo possimus! Earum, illo quaerat!</p>
                                    <p>Dolores illum sed officia? Assumenda iusto quis exercitationem eligendi, totam
                                        laudantium dignissimos quae corrupti soluta quasi ipsum nemo recusandae!
                                        Recusandae quibusdam maiores beatae et inventore architecto amet obcaecati vel
                                        neque.</p>
                                    <p>Obcaecati libero atque, excepturi facere magnam nulla, iure tempora ipsum dolorem
                                        autem eius cum exercitationem ad perspiciatis laboriosam rerum! Id, unde
                                        recusandae velit quam exercitationem quia minus nihil molestias dolorem?</p>
                                </div>
                                <div class="tab-pane fade" id="features-tab-pane" role="tabpanel"
                                    aria-labelledby="features-tab" tabindex="0">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Colors</th>
                                                <td>white, black, pink</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Sizes</th>
                                                <td>S, M, L</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="video-tab-pane" role="tabpanel"
                                    aria-labelledby="video-tab" tabindex="0">
                                    <div class="ratio ratio-16x9">
                                        <video src="assets/clothing.mp4" controls></video>
                                        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/I10XB1-IIbA"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- popular -->
          <PopularItem/>
</div>
<Footer/>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import PopularItem from "@/components/PopularItem.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";
import Header from "../components/Header.vue";
import Footer from "@/components/Footer.vue";


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

<style lang="scss" scoped>

</style>