<template>
  <section>
    <!-- Nav -->
    <section class="navbar-shadow d-none d-md-block">
      <nav
        class="navbar navbar-expand-md navbar-light d-flex align-items-center container">
        <ul class="navbar-nav">
          <li class="nav-item mr-2">
            <router-link class="nav-link font-weight-bold" to="/index"
              >首頁</router-link
            >
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link font-weight-bold" to="/products"
              >商品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold" to="/coupons"
              >優惠</router-link
            >
          </li>
        </ul>
      </nav>
    </section>

    <!-- Nav-sm -->
    <section class="navbar-fixed d-block d-md-none bg-white">
      <nav
        class="navbar navbar-expand-sm navbar-light navbar-shadow-bottom py-0"
      >
        <ul
          class="navbar-nav w-100 flex-row justify-content-between align-items-center px-2"
        >
          <li class="nav-item mr-2">
            <router-link class="nav-link font-weight-bold" to="/index">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <i class="fas fa-pager icon-size mb-1"></i>
                首頁
              </div>
            </router-link>
          </li>
          <li class="nav-item mr-2">
            <router-link class="nav-link font-weight-bold" to="/products">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <i class="fas fa-archive icon-size mb-1"></i>
                商品
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold" to="/coupons">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <i class="fas fa-money-bill-wave-alt icon-size mb-1"></i>
                優惠
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link font-weight-bold" to="/checkout">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <i class="fas fa-cart-plus icon-size mb-1">
                  <span class="badge badge-danger icon-badge">0</span>
                </i>
                購物車
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
