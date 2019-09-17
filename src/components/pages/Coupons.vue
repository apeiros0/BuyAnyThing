<template>
  <section class="coupon container mt-sm-5 fixed-margin-top">
    <h1 class="coupon-title h3 text-center">優惠活動</h1>
    <div class="coupon-content row align-items-center mt-3">
      <div class="col-lg-6 px-4 py-3 p-lg-5 ">
        <h2 class="mr-auto mb-0 text-center text-white">全館商品 8 折優惠</h2>
      </div>
      <div class="col-lg-6 px-4 pb-3 p-lg-5 text-center">
        <span class="text-white">優惠碼</span>
        <button
          type="button"
          class="btn btn-warning btn-lg btn-block mt-2"
          v-if="!isCoupon"
          @click="isCoupon = true"
        >
          點我領取
        </button>
        <div v-else>
          <span class="h2 mt-2 font-weight-bold text-white coupon-code">
            <span>BAT008</span>
            <i
              class="far fa-copy text-white icon-copy active"
              @click.prevent="copyCouponCode"
              v-if="!isCopied"
            ></i>
            <i class="far fa-check-circle icon-copy" v-else></i>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      isCoupon: false,
      isCopied: false,
    };
  },
  methods: {
    // copy 文字
    copyCouponCode() {
      // 先建立 input
      const temp = $('<input>');
      // 將 input append 到 body
      $('body').append(temp);
      // // 把 coupon (清除空白後) 附加到 input 上，並用 select 做全選
      temp.val($('.coupon-code').text().trim()).select();
      // 接著使用 execCommand:copy 複製到剪貼簿
      document.execCommand('copy');
      // 最後移除 input
      temp.remove();
      this.isCopied = true;
    },
  },
};
</script>

<style></style>
