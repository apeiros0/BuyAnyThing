import Vue from 'vue';
import Router from 'vue-router';
import User from '@/components/User';
import Checkout from '@/components/Checkout';

import Index from '@/components/pages/Index';
import Products from '@/components/pages/Products';
import Coupons from '@/components/pages/Coupons';
import Carts from '@/components/pages/Carts';
import CheckOrder from '@/components/pages/CheckOrder';
import ProductInfo from '@/components/pages/ProductInfo';
import Signin from '@/components/pages/Signin';

import Dashboard from '@/components/Dashboard/Dashboard';
import DashboardProducts from '@/components/Dashboard/pages/Products';
import DashboardOrders from '@/components/Dashboard/pages/Orders';
import DashboardCoupons from '@/components/Dashboard/pages/Coupons';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          // / 是指根目錄
          path: '/index',
          name: 'Index',
          component: Index,
        },
        {
          path: '/products',
          name: 'Products',
          component: Products,
          props: route => ({ category: route.query.category }),
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
              path: 'check_order/:orderId',
              name: 'CheckOrder',
              component: CheckOrder,
            },
          ],
        },
        {
          path: '/signin',
          name: 'Signin',
          component: Signin,
        },
        {
          path: '/product_info/:productId',
          name: 'ProductInfo',
          component: ProductInfo,
        },
      ],
    },
    {
      path: '/admin',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Dashboard_Products',
          component: DashboardProducts,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Dashboard_Orders',
          component: DashboardOrders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Dashboard_Coupons',
          component: DashboardCoupons,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
