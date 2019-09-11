<template>
  <section class="coupon container mt-sm-5 fixed-margin-top">
    <h1 class="coupon-title h3 text-center">優惠活動</h1>
    <div
      class="coupon-content row align-items-center mt-3"
    >
      <div class="col-12 col-lg-6 px-4 py-3 p-lg-5 ">
        <h2 class="mr-auto mb-0 text-center text-white">全館商品 8 折優惠</h2>
      </div>
      <div class="col-12 col-lg-6 px-4 pb-3 p-lg-5 text-center">
        <span class="text-white">優惠碼</span>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block d-block mt-2"
          v-if="!isCoupon"
          @click="isCoupon = true"
        >
          點我領取
        </button>
        <span class="h2 mt-2 font-weight-bold d-block text-white" v-else>123456</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isCoupon: false,
    };
  },
};
</script>

<style></style>
