<template>
  <section>
    <div class="text-center my-4">
      <h2 class="hot-products-title font-weight-bold mb-0">熱銷產品</h2>
    </div>

    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-6 col-lg-3">
        <ProductCard></ProductCard>
      </div>
      <!-- DELETE -->
      <div class="col-6 col-lg-3">
        <ProductCard></ProductCard>
      </div>
      <div class="col-6 col-lg-3">
        <ProductCard></ProductCard>
      </div>
      <div class="col-6 col-lg-3">
        <ProductCard></ProductCard>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
  components: {
    ProductCard,
  },
};
</script>

<style></style>
