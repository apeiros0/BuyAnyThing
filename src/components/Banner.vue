<template>
  <section class="row">
    <div class="col-sm-5 mt-3 mt-sm-4">
      <div class="bg-cover banner-image banner-image-newproduct">
        <router-link to="/products">
          <div
            class="banner-image-content d-flex justify-content-center align-items-center"
          >
            <span
              class="banner-image-content-title mb-0 text-dark font-weight-bold text-center"
            >
              新品上市
            </span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="col-sm-7 mt-3 mt-sm-4">
      <div class="bg-cover banner-image banner-image-allhave">
        <router-link to="/products">
          <div
            class="banner-image-content d-flex justify-content-center align-items-center"
          >
            <span
              class="banner-image-content-title mb-0 text-white font-weight-bold text-center"
              >超值好物</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
