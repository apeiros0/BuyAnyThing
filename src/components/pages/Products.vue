<template>
  <section class="products fixed-margin-top container mt-sm-5">
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="list-group">
          <h2
            href="#"
            class="list-group-item bg-light h4 font-weight-bold"
            disabled
          >
            分類
          </h2>
          <a
            href="#"
            class="list-group-item active list-group-item-action text-dark"
            >沉默食材</a
          >
          <a href="#" class="list-group-item list-group-item-action text-dark"
            >退潮衣物</a
          >
          <a href="#" class="list-group-item list-group-item-action text-dark"
            >質感家俱</a
          >
          <a href="#" class="list-group-item list-group-item-action text-dark"
            >情感服務</a
          >
        </div>
      </div>
      <div class="col-12 col-md-9 mt-3 mt-md-0">
        <section class="d-flex">
          <h1 class="h3 mr-auto">所有商品</h1>
          <Pagination></Pagination>
        </section>
        <div class="row">
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
          <div class="col-6 col-md-4 mb-3"><ProductCard></ProductCard></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

export default {
  components: {
    ProductCard,
    Pagination,
  },
};
</script>

<style></style>
