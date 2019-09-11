import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/pages/Index';
import Products from '@/components/pages/Products';
import Coupons from '@/components/pages/Coupons';
import Checkout from '@/components/pages/Checkout';
import Carts from '@/components/Carts';
import CheckOrder from '@/components/CheckOrder';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/coupons',
      name: 'Coupons',
      component: Coupons,
    },
    {
      path: '/checkout',
      component: Checkout,
      children: [
        {
          path: '',
          name: 'Carts',
          component: Carts,
        },
        {
          path: 'checkOrder/:id',
          name: 'CheckOrder',
          component: CheckOrder,
        },
      ],
    },
  ],
});
