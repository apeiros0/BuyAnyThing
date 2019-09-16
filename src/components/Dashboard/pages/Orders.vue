<template>
  <section>
    <loading :active.sync="isLoading"></loading>
    <div class="mt-6 mt-sm-4 d-flex justify-content-end">
      <Pagination :pagination="pagination" @getPage="getOrders"></Pagination>
    </div>
    <div class="table-responsive-lg mt-5">
      <table class="table">
        <thead>
          <tr>
            <th width="120">購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th width="100" class="text-right">應付金額</th>
            <th width="100">是否付款</th>
            <th width="80">修改訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in orders"
            :key="item.id"
            :class="{ 'text-danger': item.is_paid === false }"
          >
            <td>{{ item.create_at | timeFormat }}</td>
            <td>{{ item.user.email }}</td>
            <td>
              <!-- 直接從每筆訂單的 products 取出產品資料 -->
              <template v-for="product in item.products">
                <div class="row no-gutters" :key="product.id">
                  <div class="col-12 col-lg-6">
                    <span>{{ product.product.title }}</span>
                  </div>
                  <div class="col-12 col-lg-6">
                    <span>數量：{{ product.qty }}</span>
                  </div>
                </div>
              </template>
            </td>
            <td class="text-right">
              <span v-if="item.total">{{ item.total | currency }}</span>
              <span v-else>{{ 0 | currency }}</span>
            </td>
            <td>
              <span v-if="item.is_paid === true" class="text-success"
                >已付款</span
              >
              <span v-else class="text-danger">未付款</span>
            </td>
            <td>
              <button class="btn btn-primary btn-sm" @click="openModal(item)">
                修改
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>修改訂單</span>
            </h5>
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <label class="h5">購買款項</label>
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="item in tempOrder.products"
                    :key="item.id"
                  >
                    <div class="row no-gutters">
                      <div class="col-9">
                        <span>{{ item.product.title }}</span>
                      </div>
                      <div class="col-3">
                        <span>數量：{{ item.qty }}</span>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item form-inline">
                    <div class="form-group d-flex justify-content-end">
                      <label for="inputTotal">總計：</label>
                      <input
                        type="number"
                        class="form-control w-25"
                        id="inputTotal"
                        placeholder="請輸入金額"
                        min="0"
                        v-model.number="tempOrder.total"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="form-group container mt-4">
                <label class="h5 mb-3" for="is_enabled">是否付款</label>
                <div class="form-check px-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_enabled"
                    v-model.number="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="is_enabled">
                    <span class="text-success" v-if="tempOrder.is_paid"
                      >已付款</span
                    >
                    <span class="text-danger" v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-dark">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateOrder">
              更新
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../Pagination';

export default {
  data() {
    return {
      isLoading: false,
      orders: [],
      pagination: {},
      tempOrder: {},
      page: 1,
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/admin/orders?page=${page}`;
      const self = this;
      self.page = page;
      self.isLoading = true;
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.isLoading = false;
          self.orders = [...response.data.orders];
          self.pagination = { ...response.data.pagination };
        }
      });
    },
    openModal(order) {
      this.tempOrder = Object.assign({}, order);
      $('#orderModal').modal('show');
    },
    updateOrder() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/admin/order/${self.tempOrder.id}`;
      // console.log(api);
      self.$http.put(api, { data: self.tempOrder }).then((response) => {
        if (response.data.success) {
          $('#orderModal').modal('hide');
          self.getOrders(self.page);
          self.$bus.$emit('message:push', response.data.message, 'success');
        } else {
          self.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
  },
  components: {
    Pagination,
  },
};
</script>

<style></style>
