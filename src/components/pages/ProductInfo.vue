<template>
  <section class="container fixed-margin-top mt-sm-5">
    <loading :active.sync="isLoading"></loading>
    <Alert></Alert>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white px-0">
        <li class="breadcrumb-item">
          <router-link to="/products">商品</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ path: '/products', query: { category: product.category } }">{{ product.category }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-12 col-lg-7">
        <div
          class="product-images bg-cover"
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        ></div>
      </div>
      <div class="col-12 col-lg-5">
        <div class="product-info ml-0 ml-lg-3 mt-4 mt-lg-0">
          <h1 class="h2">{{ product.title }}</h1>
          <div class="mt-3">
            <del
              class="h5 mt-1 mb-0 text-secondary d-block"
              v-if="product.origin_price !== product.price"
              >{{ product.origin_price | currency }}</del
            >
            <span class="h1 mt-1 d-block text-primary font-weight-bold">{{
              product.price | currency
            }}</span>
          </div>
          <div class="mt-4 d-flex align-items-end">
            <div>
              <span>數量</span>
              <div class="input-group qty-group mt-1">
                <a
                  class="qty-btn bg-primary"
                  @click.prevent="calculateQty(false)"
                  :class="{ disabled: product.is_enabled !== 1 }"
                  >-</a
                >
                <input
                  type="text"
                  value="1"
                  maxlength="2"
                  class="form-control jq-qty-number qty-input"
                  v-model="productQty"
                  :disabled="product.is_enabled !== 1"
                />
                <a
                  class="qty-btn bg-primary"
                  @click.prevent="calculateQty(true)"
                  :class="{ disabled: product.is_enabled !== 1 }"
                  >+</a
                >
              </div>
            </div>
            <span class="ml-3">/ {{ product.unit }}</span>
            <div class="ml-auto">
              <span class="d-block text-left">總計</span>
              <span class="h2 d-block mb-0 text-primary">{{
                calculatePrice | currency
              }}</span>
            </div>
          </div>
          <div class="mt-5">
            <button
              type="button"
              class="btn btn-warning btn-xl btn-block"
              @click="addToCart"
              :disabled="product.is_enabled !== 1"
            >
              <i class="fas fa-spinner fa-pulse" v-if="status.cartLoading"></i>
              <span v-if="product.is_enabled !== 1">即將上市</span>
              <span v-else>加入購物車</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6">
      <h2>商品描述</h2>
      <div class="mt-2">
        <p class="product-description">{{ product.description }}</p>
      </div>

      <h2 class="mt-5">特色</h2>
      <div class="mt-2">
        <p class="product-description">
          在哪裡跌倒，因為沒有人在看你，但房東不准，人若不帥，再暖都是變態。弱者等待時機，我承認自己的結論有九十九次是過錯的。
          我要把雙手身出來讓世人看，我儘管奪患有這麼多土地，逝世後卻連一點塵埃也沒有帶走，你不能以一個握緊的拳頭握手
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import Alert from '../Dashboard/AlertMessage';

export default {
  data() {
    return {
      productId: '',
      product: {},
      productQty: 1,
      isLoading: false,
      status: {
        cartLoading: false,
      },
    };
  },
  created() {
    // 取得產品 Id
    this.productId = this.$route.params.productId;
    this.getProduct();
  },
  methods: {
    getProduct() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/product/${self.productId}`;
      self.isLoading = true;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.product = { ...response.data.product };
          self.isLoading = false;
        }
      });
    },
    addToCart() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/cart`;
      if (isNaN(self.productQty)) {
        self.productQty = 1;
      }
      const cart = {
        product_id: self.productId,
        qty: Math.abs(self.productQty),
      };
      self.status.cartLoading = true;
      self.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          self.productQty = 1;
          self.status.cartLoading = false;
          self.$bus.$emit('message:push', response.data.message, 'success');
          self.$bus.$emit('updateCart');
          self.$bus.$emit('updateCart:nav');
        }
      });
    },
    calculateQty(isAdd) {
      // 10 = 十進位
      let num = parseInt($.trim($('.jq-qty-number').val()), 10);
      if (isNaN(num)) {
        num = 1;
      }

      if (isAdd) {
        if (num >= 99) return;
        num += 1;
      } else {
        if (num <= 1) return;
        num -= 1;
      }

      $('.jq-qty-number').val(num);
      this.productQty = num;
    },
  },
  computed: {
    calculatePrice() {
      let qty = Math.abs(this.productQty);
      if (isNaN(this.productQty)) {
        qty = 1;
      }
      return qty * this.product.price;
    },
  },
  components: {
    Alert,
  },
};
</script>

<style></style>
