<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #e3f2fd">
    <div class="container-xl">

      <button
        class="navbar-toggler order-lg-first"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="offcanvas offcanvas-start" tabindex="-1" id="navbarScroll" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Navigation</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'resume' }">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'demo' }">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalog
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
               
                <li><a class="dropdown-item" href="#">Category 1</a></li>
                <li><a class="dropdown-item" href="#">Category 2</a></li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="d-none d-lg-flex">

     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'resume' }">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'demo' }">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalog
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
               
                <li><a class="dropdown-item" href="#">Category 1</a></li>
                <li><a class="dropdown-item" href="#">Category 2</a></li>
               
              </ul>
            </li>
          </ul>
      </div>
    </div>
  </nav>

  <div class="col-md-12 container-xl">
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner"> 
        <div class="carousel-item active">
          <img
            :src="require(`../assets/img/mongodb.png`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px;" 
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/note1.jpg`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/note2.jpeg`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px; "
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/nest.png`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px; "
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`../assets/img/vue.jpg`)"
            class="d-block w-100 img-fluid"
            style="max-height: 340px; "
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
        
</template>


