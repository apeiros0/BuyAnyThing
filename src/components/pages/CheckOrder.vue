<template>
  <section class="row">
    <Alert></Alert>
    <div class="col-12 col-sm-2">
      <ProcessBar process="checkOrder" v-if="!order.is_paid"></ProcessBar>
      <ProcessBar process="payment" v-else></ProcessBar>
    </div>
    <div class="col-12 col-sm-10 mt-4 mt-sm-0">
      <section class="row">
        <div class="col-12 col-lg-6 order-1 order-sm-0">
          <h2 class="h3">確認訂單</h2>
          <table class="table mt-3">
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th scope="row">收件地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th scope="row">付款狀態</th>
                <td>
                  <span class="text-success" v-if="order.is_paid">已付款</span>
                  <span class="text-danger" v-else>尚未付款</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr v-if="!order.is_paid">
                <td colspan="2">
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg mt-3"
                    @click="payment"
                  >
                    <i
                      class="fas fa-spinner fa-pulse"
                      v-if="status.payLoading"
                    ></i>
                    付款去
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-12 col-lg-6 order-0 order-sm-1">
          <table
            class="table table-borderless border border-primary mt-4 mt-lg-0"
          >
            <thead class="bg-primary">
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col" class="text-right" width="60">數量</th>
                <th scope="col" class="text-right" width="100">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <th scope="row">{{ item.product.title }}</th>
                <td class="text-right">
                  {{ item.qty }}/{{ item.product.unit }}
                </td>
                <td class="text-right">
                  {{ item.final_total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right text-success font-weight-bold h5">
                  {{ order.total | currency }}
                </td>
              </tr>
              <tr v-if="order.is_paid">
                <td colspan="3">
                  <div class="d-flex justify-content-end mt-3">
                    <router-link
                      class="btn btn-dark btn-block btn-lg mr-auto"
                      to="/products"
                      >繼續購物</router-link
                    >
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import ProcessBar from '../ProcessBar';
import Alert from '../Dashboard/AlertMessage';

export default {
  data() {
    return {
      order: {
        products: {},
        user: {},
      },
      orderId: '',
      status: {
        payLoading: false,
      },
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/order/${self.orderId}`;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.order = { ...response.data.order };
        }
      });
    },
    payment() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/pay/${self.orderId}`;
      self.status.payLoading = true;
      self.$http.post(api).then((response) => {
        if (response.data.success) {
          this.getOrder();
          self.status.payLoading = false;
          self.$bus.$emit('message:push', response.data.message, 'success');
          self.$bus.$emit('updateCart');
          self.$bus.$emit('updateCart:nav');
        }
      });
    },
  },
  components: {
    ProcessBar,
    Alert,
  },
};
</script>

<style></style>
