<template>
  <div class="checkout-process">
    <div
      class="checkout-process-item d-flex justify-content-center align-items-center"
      :class="{ active: process === 'sendInfo' }"
    >
      填寫資料
    </div>
    <div
      class="checkout-process-item d-flex justify-content-center align-items-center"
      :class="{ active: process === 'checkOrder' }"
    >
      確認訂單
    </div>
    <div
      class="checkout-process-item d-flex justify-content-center align-items-center"
      :class="{ active: process === 'payment' }"
    >
      付款
    </div>
  </div>
</template>

<script>
export default {
  props: ['process'],
};
</script>

<style></style>
