<template>
  <section>
    <Carousel></Carousel>
    <section class="container container-sm">
      <Banner></Banner>
      <HotProducts></HotProducts>
    </section>
  </section>
</template>

<script>
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import HotProducts from '@/components/HotProducts';

export default {
  components: {
    Carousel,
    Banner,
    HotProducts,
  },
};
</script>

<style></style>
