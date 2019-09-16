<template>
  <section>
    <Carousel></Carousel>
    <section class="container">
      <Banner></Banner>
      <NewProducts></NewProducts>
      <Category></Category>
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
