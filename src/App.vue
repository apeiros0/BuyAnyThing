<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
