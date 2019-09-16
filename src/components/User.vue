<template>
  <section>
    <Header></Header>
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style></style>
