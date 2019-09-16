<template>
  <header class="header bg-white pt-2 pt-sm-4 pb-2 pb-sm-4">
    <Alert></Alert>
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
        <div class="header-dropdown ml-3 ml-sm-0">
          <div class="form-group my-auto">
            <div class="input-group">
              <input
                class="form-control input-search"
                type="text"
                placeholder="請輸入商品"
                v-model="search"
                @input.prevent="openList(true)"
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
          <div
            class="header-dropdown-search-menu jq-header-dropdown-search-menu"
            style="display: none;"
          >
            <table class="table mb-0">
              <thead>
                <th colspan="2" class="py-0">
                  <small class="text-muted">搜尋結果</small>
                </th>
              </thead>
              <tbody>
                <tr v-for="item in searchResultArray" :key="item.id">
                  <th scope="row">
                    <a
                      href="#"
                      class="header-dropdown-search-menu-link"
                      @click.prevent="getProductInfo(item.id)"
                      >{{ item.title }}</a
                    >
                  </th>
                  <td class="text-success text-right">
                    {{ item.price | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr v-if="searchResultArray.length === 0">
                  <td colspan="2"><span class="text-danger">無此產品</span></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- Signin -->
        <router-link to="/signin" class="ml-3 d-none d-md-block">
          <div
            class="icon-btn active icon-size bg-primary d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-sign-in-alt text-white"></i>
          </div>
        </router-link>

        <!-- Cart DropDown -->
        <div class="header-dropdown ml-3 d-none d-md-block">
          <div
            class="icon-btn active icon-size bg-primary d-flex justify-content-center align-items-center"
            @click.prevent="openList()"
          >
            <i class="fas fa-cart-plus text-white">
              <span class="badge badge-danger icon-badge">{{
                carts.length
              }}</span>
            </i>
          </div>

          <div
            class="header-dropdown-cart-menu jq-header-dropdown-cart-menu pt-2"
            style="display: none;"
          >
            <h3 class="dropdown-header">購物車</h3>
            <div
              class="dropdown-item d-flex align-items-center mb-3"
              v-for="item in carts"
              :key="item.id"
            >
              <div
                class="cart-icon d-flex justify-content-center align-items-center mr-4"
                @click="deleteCartItem(item.id)"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="status.deleteCartItem === item.id"
                ></i>
                <i class="fas fa-trash-alt" v-else></i>
              </div>
              <div
                class="cart-dropdown-item-image bg-cover mr-3"
                :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
              ></div>
              <div class="mr-4">
                <h4 class="h6 mb-0">{{ item.product.title }}</h4>
                <span>數量：{{ item.qty }}</span>
              </div>
              <span class="ml-auto text-success">{{
                item.total | currency
              }}</span>
            </div>
            <hr />
            <div class="dropdown-item text-right mb-3">
              <span class="mr-3">總計</span>
              <span class="text-success">{{ total | currency }}</span>
            </div>
            <a
              class="btn btn-warning btn-block btn-lg"
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
import Alert from './Dashboard/AlertMessage';

export default {
  data() {
    return {
      carts: [],
      allProducts: [],
      searchResultArray: [],
      total: 0,
      status: {
        deleteCartItem: '',
      },
      search: '',
      isLoading: false,
    };
  },
  created() {
    const self = this;
    self.getCartList();
    this.getAllProducts();

    // 自定義名稱 'updateCart'
    self.$bus.$on('updateCart', () => {
      self.getCartList();
    });
  },
  methods: {
    getAllProducts() {
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/products/all`;
      const self = this;
      self.isLoading = true;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.allProducts = [...response.data.products];
          self.isLoading = false;
        }
      });
    },
    getCartList() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/cart`;
      self.isLoading = true;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.carts = [...response.data.data.carts];
          self.total = response.data.data.total;
          self.isLoading = false;
        }
      });
    },
    deleteCartItem(id) {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/cart/${id}`;
      self.status.deleteCartItem = '';
      self.status.deleteCartItem = id;
      self.$http.delete(api).then((response) => {
        if (response.data.success) {
          self.getCartList();
          self.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
    openList(isSearch = false) {
      if (isSearch) {
        if (this.search === '') {
          $('.jq-header-dropdown-search-menu').hide();
          return;
        }
        $('.jq-header-dropdown-search-menu').show();
        this.searchProducts();
      } else {
        $('.jq-header-dropdown-cart-menu').toggle();
        setTimeout(() => {
          $('.jq-header-dropdown-cart-menu').hide();
        }, 10000);
      }
    },
    goToCheckout() {
      const self = this;
      $('.cart-dropdown-menu').hide();
      if (self.$route.name === 'Checkout') return;
      self.$router.push('/checkout');
    },
    searchProducts() {
      const self = this;
      self.searchResultArray = self.allProducts.filter(item =>
        // 透過 match 找出要搜尋的產品 (透過 props 傳遞結果，顯示在產品上)
        item.title.match(self.search),
      );
    },
    getProductInfo(id) {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/product/${id}`;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          if (self.$route.path === `/product_info/${id}`) {
            return;
          }
          self.$router.push(`/product_info/${id}`);
          // 透過 go 重新整理頁面
          if (self.$route.name === 'ProductInfo') {
            self.$router.go(0);
          }
          self.search = '';
          self.openList(true);
        }
      });
    },
  },
  components: {
    Alert,
  },
};
</script>

<style></style>
