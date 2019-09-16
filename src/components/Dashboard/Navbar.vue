<template>
  <div>
    <nav
      class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
    >
    <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/admin">後台管理</router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white" href="#" @click.prevent="signout"
            >登出</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const api = `${process.env.API_URL}/logout`;
      const self = this;
      this.$http.post(api).then((response) => {
        // 直接傳入 api 就能出發 logout 事件 (透過 coolie 傳送)
        if (response.data.success) {
          // 回到登入頁
          self.$router.push('/signin');
        }
      });
    },
  },
};
</script>

<style></style>
