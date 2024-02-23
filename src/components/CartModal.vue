<template>
  <div >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasCartLabel">Cart</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="table-responsive">
        <table class="table offcanvasCart-table">
          <tbody>
            <tr>
              <td class="product-img-td">
                <a href="product.html"
                  ><img src="assets/img/products/1.jpg" alt=""
                /></a>
              </td>
              <td>
                <a href="product.html"
                  >Product 1 Lorem ipsum dolor, sit amet consectetur
                  adipisicing.</a
                >
              </td>
              <td>$65</td>
              <td>&times;1</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="product-img-td">
                <a href="product.html"
                  ><img src="assets/img/products/2.jpg" alt=""
                /></a>
              </td>
              <td><a href="product.html">Product 2</a></td>
              <td>$80</td>
              <td>&times;2</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="product-img-td">
                <a href="product.html"
                  ><img src="assets/img/products/3.jpg" alt=""
                /></a>
              </td>
              <td><a href="product.html">Product 3</a></td>
              <td>$100</td>
              <td>&times;1</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fa-regular fa-circle-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end">Total:</td>
              <td>$325</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="text-end mt-3">
        <a href="#" class="btn btn-outline-warning">Cart</a>
        <a href="#" class="btn btn-outline-secondary">Checkout</a>
      </div>

      <div class="dropdown mt-3">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item closecart" href="#footer" data-href="footer"
              >Footer</a
            >
          </li>
          <li>
            <a class="dropdown-item closecart" href="#about" data-href="about"
              >About</a
            >
          </li>
          <li>
            <a class="dropdown-item closecart" href="#map" data-href="map"
              >Map</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
