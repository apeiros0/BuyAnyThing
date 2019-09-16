<template>
  <section>
    <Navbar></Navbar>
    <Alert></Alert>
    <Sidebar></Sidebar>
    <div class="row">
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Alert from './AlertMessage';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
};
</script>

<style></style>
