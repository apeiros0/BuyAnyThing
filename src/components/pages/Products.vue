<template>
  <section class="products fixed-margin-top container mt-sm-5">
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="list-group sticky-top">
          <h2 href="#" class="list-group-item bg-light h4 font-weight-bold">
            分類
          </h2>
          <a
            href="#"
            class="list-group-item list-group-item-action text-dark"
            @click.prevent="categoryName = ''"
            :class="{ active: categoryName === '' }"
            >全部商品</a
          >
          <template v-for="(item, index) in filterCategory">
            <a
              href="#"
              class="list-group-item list-group-item-action text-dark"
              @click.prevent="categoryName = item"
              :class="{ active: categoryName === item }"
              :key="index"
              >{{ item }}</a
            >
          </template>
        </div>
      </div>
      <div class="col-12 col-md-9 mt-3 mt-md-0">
        <div>
          <h1 class="h3 mr-auto" v-if="categoryName === ''">全部商品</h1>
          <h1 class="h3 mr-auto" v-else>{{ categoryName }}</h1>
        </div>

        <div class="row no-gutters">
          <template v-for="item in filterProduct">
            <div class="col-6 col-lg-4 mb-3" :key="item.id">
              <ProductCard :product="item"></ProductCard>
            </div>
          </template>
        </div>
        <div class="d-flex justify-content-end" v-if="categoryName === ''">
          <Pagination
            :pagination="pagination"
            @getPage="getProducts"
          ></Pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

export default {
  // 接收參數
  props: ['category'],
  data() {
    return {
      products: [],
      allProducts: [],
      pagination: {},
      isLoading: false,
      categoryName: '',
    };
  },
  created() {
    this.categoryName = this.$route.query.category || ''; // 如果其他頁面有傳遞 分類 的參數，便使用其值
    this.getProducts();
    this.getAllProducts();
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/products?page=${page}`;
      const self = this;
      self.isLoading = true;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.products = [...response.data.products];
          self.pagination = { ...response.data.pagination };
          self.isLoading = false;
        }
      });
    },
    // 取得全部商品 (分類用)
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
  },
  computed: {
    filterProduct() {
      const self = this;
      // 當為 空值 時，便回傳 全部商品 (有分頁)
      if (self.categoryName === '') {
        return self.products;
      }
      // 過濾 屬性 相同的產品
      return self.allProducts.filter(
        item => item.category === self.categoryName,
      );
    },
    filterCategory() {
      const self = this;
      return self.allProducts
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
    },
  },
  components: {
    ProductCard,
    Pagination,
  },
};
</script>

<style></style>
