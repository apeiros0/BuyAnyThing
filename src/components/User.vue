<template>
  <section>
    <Header></Header>
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default {
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style></style>
