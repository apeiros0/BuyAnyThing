<template>
  <section>
    <section class="container">
      <Carousel></Carousel>
      <Banner></Banner>
      <Category></Category>
      <NewProducts></NewProducts>
    </section>
  </section>
</template>

<script>
import Carousel from '@/components/Carousel';
import Banner from '@/components/Banner';
import NewProducts from '@/components/NewProducts';
import Category from '@/components/Category';

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Carousel,
    Banner,
    NewProducts,
    Category,
  },
};
</script>

<style></style>
