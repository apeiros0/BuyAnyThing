<template>
  <header class="header bg-white pt-2 pt-sm-4 pb-2 pb-sm-4">
    <!-- bg-white -->
    <div class="container d-flex justify-content-center align-items-center">
      <!-- Logo -->
      <router-link to="/index" class="mr-auto">
        <h1 class="header-logo-text d-none d-lg-block mb-0">BuyANYThing</h1>
        <div
          class="header-logo bg-cover d-block d-lg-none"
          alt="shop_logo"
        ></div>
      </router-link>

      <!-- Nav Button -->
      <div class="d-flex">
        <!-- Search-->
        <div class="form-group my-auto ml-2">
          <div class="input-group">
            <input
              class="form-control input-search"
              type="text"
              placeholder="請輸入商品"
            />
            <div class="input-group-append">
              <div
                class="icon-btn icon-size bg-primary d-flex justify-content-center align-items-center"
              >
                <i class="fas fa-search text-white search-btn"></i>
              </div>
            </div>
          </div>
        </div>

        <router-link to="" class="ml-3 d-none d-md-block">
          <div
            class="icon-btn icon-size bg-primary d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-user-cog text-white"></i>
          </div>
        </router-link>

        <router-link to="" class="ml-3 d-none d-md-block">
          <div
            class="icon-btn icon-size bg-primary d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-sign-in-alt text-white"></i>
          </div>
        </router-link>

        <!-- Cart DropDown -->
        <div class="cart-dropdown ml-3 d-none d-md-block">
          <div
            class="icon-btn icon-size bg-primary d-flex justify-content-center align-items-center"
            @click.prevent="openCart"
          >
            <i class="fas fa-cart-plus text-white">
              <span class="badge badge-danger icon-badge">09</span>
            </i>
          </div>

          <div class="cart-dropdown-menu pt-2" style="display: none;">
            <h3 class="dropdown-header">購物車</h3>
            <div class="dropdown-item d-flex align-items-center mb-3">
              <div
                class="cart-icon d-flex justify-content-center align-items-center mr-4"
              >
                <i class="fas fa-trash-alt"></i>
              </div>
              <div class="cart-dropdown-item-image bg-cover mr-3"></div>
              <div class="mr-4">
                <h4 class="h6 mb-0">好好用商品12346021111111115</h4>
                <span>數量：12399</span>
              </div>
              <span class="ml-auto text-success">$100</span>
            </div>
            <div class="dropdown-item d-flex align-items-center mb-3">
              <div
                class="cart-icon d-flex justify-content-center align-items-center mr-4"
              >
                <i class="fas fa-trash-alt"></i>
              </div>
              <div class="cart-dropdown-item-image bg-cover mr-3"></div>
              <div class="mr-4">
                <h4 class="h6 mb-0">好好用商品12346021111111115111</h4>
                <span>數量：12399</span>
              </div>
              <span class="ml-auto text-success">$100</span>
            </div>
            <div class="dropdown-item d-flex align-items-center mb-3">
              <div
                class="cart-icon d-flex justify-content-center align-items-center mr-4"
              >
                <i class="fas fa-trash-alt"></i>
              </div>
              <div class="cart-dropdown-item-image bg-cover mr-3"></div>
              <div class="mr-4">
                <h4 class="h6 mb-0">好好用商品12346021</h4>
                <span>數量：12399</span>
              </div>
              <span class="ml-auto text-success">$100</span>
            </div>
            <hr>
            <div class="dropdown-item text-right mb-3">
              <span class="mr-3">總計</span>
              <span class="text-success">$100,000</span>
            </div>
            <a
              class="btn btn-primary btn-block btn-lg"
              href="#"
              @click.prevent="goToCheckout"
              >結帳</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {};
  },
  methods: {
    openCart() {
      $('.cart-dropdown-menu').toggle();
    },
    goToCheckout() {
      const self = this;
      $('.cart-dropdown-menu').hide();
      if (self.$route.name === 'Checkout') return;
      self.$router.push('/checkout');
    },
  },
};
</script>

<style></style>
