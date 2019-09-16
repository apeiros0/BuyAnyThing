<template>
  <section class="container mt-sm-5 fixed-margin-top">
    <h1 class="h2 text-center"></h1>
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-5 border border border-primary px-3 pt-4">
        <form>
          <div class="form-group">
            <label for="inputEmail">帳號</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="inputEmail"
              aria-describedby="emailHelp"
              autocomplete="email"
              placeholder="請輸入帳號"
              required
            />
          </div>
          <div class="form-group mt-4 mb-0">
            <label for="inputPassword">密碼</label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="inputPassword"
              autocomplete="current-password"
              placeholder="請輸入密碼"
              required
              @input="isSigninError = false"
              @keyup.enter="signin"
            />
          </div>
          <small class="text-danger ml-1" v-if="isSigninError"
            >帳號或密碼錯誤</small
          >
          <div class="ml-1 mt-1">
            <a href="#">註冊</a>
            <span>或</span>
            <a href="#">忘記密碼</a>
          </div>
        </form>
        <button
          type="submit"
          class="btn btn-primary btn-block btn-lg mt-4"
          @click="signin"
        >
          登入
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isSigninError: false,
    };
  },
  methods: {
    signin() {
      const api = `${process.env.API_URL}/admin/signin`;
      const self = this;
      self.$http
        .post(api, {
          username: self.user.email,
          password: self.user.password,
        })
        .then((response) => {
          if (response.data.success) {
            self.$router.push('/admin/products');
          } else {
            self.isSigninError = true;
            self.user.password = '';
          }
        });
    },
  },
};
</script>

<style></style>
