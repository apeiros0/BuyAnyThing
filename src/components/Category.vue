<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <div class="row">
        <div class="col-12">
          <!-- 使用 query 傳遞參數 /product?category=value -->
          <router-link :to="{ path: '/products', query: { category: filterCategory[0] } }">
            <div
              class="bg-cover product-category-left-top product-category-food d-flex justify-content-center align-items-center"
            >
              <h2 class="h1 font-weight-bold product-category-title text-dark">
                {{ filterCategory[0] }}
              </h2>
            </div>
          </router-link>
        </div>
        <div class="col-12">
          <router-link :to="{ path: '/products', query: { category: filterCategory[1] } }">
            <div
              class="bg-cover product-category-left-bottom product-category-clothes mt-4 d-flex justify-content-center align-items-center"
            >
              <h2 class="h1 font-weight-bold product-category-title text-dark">
                {{ filterCategory[1] }}
              </h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <div class="col-12">
          <router-link :to="{ path: '/products', query: { category: filterCategory[2] } }">
            <div
              class="bg-cover product-category-right-top product-category-furniture mt-4 mt-sm-0 d-flex justify-content-center align-items-center"
            >
              <h2 class="h1 font-weight-bold product-category-title text-dark">
                {{ filterCategory[2] }}
              </h2>
            </div></router-link
          >
        </div>
        <div class="col-12">
          <router-link :to="{ path: '/products', query: { category: filterCategory[3] } }">
            <div
              class="bg-cover product-category-right-bottom product-category-service mt-4 d-flex justify-content-center align-items-center"
            >
              <h2 class="h1 font-weight-bold product-category-title text-dark">
                {{ filterCategory[3] }}
              </h2>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allProducts: [],
    };
  },
  created() {
    this.getAllProducts();
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
  },
  computed: {
    filterCategory() {
      const self = this;
      return self.allProducts
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
    },
  },
};
</script>

<style></style>
