<template>
  <section>
    <loading :active.sync="isLoading"></loading>
    <div class="text-center my-4">
      <h2 class="products-title font-weight-bold mb-0">即將上市</h2>
    </div>

    <div class="row no-gutters justify-content-center align-items-center">
      <div
        class="col-6 col-lg-3"
        v-for="item in filterNewProduct"
        :key="item.id"
      >
        <ProductCard :product="item"></ProductCard>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
  data() {
    return {
      allProducts: [],
      isLoading: false,
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
    filterNewProduct() {
      const self = this;
      return self.allProducts.filter(item => item.is_enabled !== 1);
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style></style>
