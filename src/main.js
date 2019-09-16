// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; // 絕對路徑
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
// 絕對路徑必須放在相對路徑前
import App from './App'; // 相對路徑
import router from './router';
import './bus';
import CurrencyFilter from './filters/currency';
import timeFormatFilter from './filters/timeFormat';

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;

Vue.use(VueAxios, axios);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhTW',
});

Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW,
  },
  events: 'change|blur'
});

Vue.component('Loading', Loading);

Vue.filter('currency', CurrencyFilter);
Vue.filter('timeFormat', timeFormatFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n,
});

// 換頁時，檢查是否有持續登入
router.beforeEach((to, from, next) => {
  // 判斷是否需要驗證
  if (to.meta.requiresAuth) {
    const api = `${process.env.API_URL}/api/user/check`;
    // 由於 this.$http 並不在 Vue 中，所以用 axios 取代
    axios.post(api).then((response) => {
      // console.log('check', response.data);
      if (response.data.success) {
        // 檢查成功，換頁
        next();
      } else {
        next({
          // 失敗則跳到登入頁
          path: '/signin',
        });
      }
    });
  } else {
    next();
  }
});
