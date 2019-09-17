<template>
  <section class="fixed-margin-top">
    <div id="carouselBanner" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-block w-100 bg-cover carousel-image carousel-image1">
            <div class="carousel-content">
              <p class="carousel-title font-weight-bold d-none d-md-block">
                只要你想要，沒有買不到
              </p>
              <p class="carousel-title font-weight-bold">
                全館商品
                <span class="text-danger mx-2 carousel-title-text">8</span>
                折出售
              </p>
              <router-link
                class="btn btn-primary px-5 py-3 mt-0 mt-md-3 carousel-link"
                to="/coupons"
              >
                點我領取優惠券</router-link
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 bg-cover carousel-image carousel-image2">
            <div class="carousel-content carousel-content-dark p-5">
              <p class="carousel-title font-weight-bold">全家同購物</p>
              <p class="carousel-title font-weight-bold">荷包不必省</p>
              <router-link
                class="btn btn-primary px-5 py-3 mt-0 mt-md-3 carousel-link"
                to="/products"
              >
                來去看商品</router-link
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-block w-100 bg-cover carousel-image carousel-image3">
            <div class="carousel-content carousel-content-light p-5">
              <p class="carousel-title font-weight-bold">
                優質服務，真誠回饋
              </p>
              <router-link
                class="btn btn-primary px-5 py-3 mt-0 mt-md-3 carousel-link"
                to="/login"
              >
                快來加入會員</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselBanner"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselBanner"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
