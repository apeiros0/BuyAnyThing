<template>
  <section class="row">
    <loading :active.sync="isLoading"></loading>
    <div class="col-12 col-sm-2">
      <ProcessBar process="sendInfo"></ProcessBar>
    </div>
    <div class="col-12 col-sm-10 mt-4 mt-sm-0">
      <section class="row">
        <div class="col-12 col-lg-6 order-1 order-sm-0">
          <h2 class="h3 mt-4 mt-sm-0">填寫寄送資料</h2>
          <form class="mt-3" @submit.prevent="createOrder">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName"
                  ><span class="text-danger">*</span>姓名</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="請輸入姓名"
                  required
                  v-model="user.name"
                  name="username"
                  v-validate="'required'"
                  :class="{ 'is-invalid': errors.has('username') }"
                />
                <span v-if="errors.has('username')" class="text-danger ml-1"
                  >姓名欄位請勿空白</span
                >
              </div>
              <div class="form-group col-md-6">
                <label for="inputTel"
                  ><span class="text-danger">*</span>電話</label
                >
                <input
                  type="tel"
                  class="form-control"
                  id="inputTel"
                  placeholder="請輸入電話"
                  required
                  v-model="user.tel"
                  name="電話"
                  v-validate="'required|numeric'"
                  :class="{ 'is-invalid': errors.has('電話') }"
                />
                <span v-if="errors.has('電話')" class="text-danger ml-1">{{
                  errors.first('電話')
                }}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail"
                ><span class="text-danger">*</span>Email</label
              >
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="請輸入 Email"
                required
                v-validate="'required|email'"
                v-model="user.email"
                name="Email"
                :class="{ 'is-invalid': errors.has('Email') }"
              />
              <span v-if="errors.has('Email')" class="text-danger ml-1">{{
                errors.first('Email')
              }}</span>
            </div>
            <div class="form-group">
              <label for="inputAddress"
                ><span class="text-danger">*</span>收件地址</label
              >
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="請輸入地址"
                required
                v-validate="'required'"
                v-model="user.address"
                name="address"
                :class="{ 'is-invalid': errors.has('address') }"
              />
              <span v-if="errors.has('address')" class="text-danger ml-1"
                >地址欄位請勿空白</span
              >
            </div>
            <div class="d-flex justify-content-end mt-5">
              <button
                type="submit"
                class="btn btn-warning btn-block btn-lg mt-0"
                v-if="finalTotal"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="status.checkoutLoading"
                ></i>
                結帳
              </button>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 order-0 order-sm-1">
          <table
            class="table table-borderless border border-primary mt-5 mt-md-0"
          >
            <thead class="bg-primary">
              <tr>
                <th scope="col" width="50"></th>
                <th scope="col">商品名稱</th>
                <th scope="col" class="text-right" width="90">數量</th>
                <th scope="col" class="text-right" width="100">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.id">
                <td>
                  <div
                    class="cart-icon d-flex justify-content-center align-items-center"
                    @click="deleteCartItem(item.id)"
                  >
                    <i
                      class="fas fa-spinner fa-pulse"
                      v-if="status.deleteCartItem === item.id"
                    ></i>
                    <i class="fas fa-trash-alt" v-else></i>
                  </div>
                </td>
                <th scope="row">
                  {{ item.product.title }}
                  <small class="d-block text-success" v-if="item.coupon"
                    >已套用優惠券：{{ item.coupon.title }}</small
                  >
                </th>
                <td class="text-right">
                  {{ item.qty }}/{{ item.product.unit }}
                </td>
                <td class="text-right">
                  {{ item.total | currency }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr v-if="!status.isAddCoupon">
                <td colspan="3" class="text-right">
                  總計
                </td>
                <td class="text-right text-success font-weight-bold h5">
                  {{ total | currency }}
                </td>
              </tr>
              <tr v-if="status.isAddCoupon">
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">
                  <del>{{ total | currency }}</del>
                </td>
              </tr>
              <tr v-if="status.isAddCoupon">
                <td colspan="3" class="text-right">打折後</td>
                <td class="text-right text-success font-weight-bold h5">
                  {{ finalTotal | currency }}
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <div class="form-row justify-content-end align-items-center">
                    <div class="form-group col-12 mb-0">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="inputCoupon"
                          v-model="couponCode"
                          placeholder="請輸入優惠碼"
                        />
                        <div class="input-group-append">
                          <button
                            type="button"
                            class="btn btn-primary"
                            @click="addCoupon"
                          >
                            <i
                              class="fas fa-spinner fa-pulse"
                              v-if="status.addCouponLoading"
                            ></i>
                            確認
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <router-link
                    class="btn btn-dark btn-block btn-lg mr-auto"
                    to="/products"
                    >繼續購物</router-link
                  >
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

export default {
  data() {
    return {
      carts: [],
      total: 0,
      finalTotal: 0,
      couponCode: '',
      status: {
        isAddCoupon: false,
        deleteCartItem: '',
        checkoutLoading: false,
        addCouponLoading: false,
      },
      user: {
        name: '',
        tel: '',
        email: '',
        address: '',
      },
      isLoading: false,
    };
  },
  created() {
    this.getCartList();
  },
  methods: {
    getCartList() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/cart`;
      if (!self.status.deleteCartItem) {
        self.isLoading = true;
      }
      self.$http.get(api).then((response) => {
        if (response.data.success) {
          self.carts = [...response.data.data.carts];
          self.total = response.data.data.total;
          self.finalTotal = response.data.data.final_total;
          self.isLoading = false;
          // 當有套用優惠券時，isAddCoupon 就為 true (避免重新整理後，isAddCoupon 的 data 跑掉)
          self.status.isAddCoupon = self.carts.some((item) => {
            if (item.coupon) {
              return item.coupon.is_enabled === 1;
            }
            return false;
          });
        }
      });
    },
    deleteCartItem(id) {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/cart/${id}`;
      // 保持 Loading 效果
      self.status.deleteCartItem = '';
      self.status.deleteCartItem = id;
      self.$http.delete(api).then((response) => {
        if (response.data.success) {
          self.getCartList();
          self.$bus.$emit('message:push', response.data.message, 'danger');
          self.$bus.$emit('updateCart');
          self.$bus.$emit('updateCart:nav');
        }
      });
    },
    addCoupon() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/coupon`;
      const coupon = {
        code: self.couponCode,
      };
      self.status.addCouponLoading = true;
      self.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          self.status.isAddCoupon = true;
          self.$bus.$emit('message:push', response.data.message, 'success');
          self.getCartList();
        } else {
          self.couponCode = '';
          self.$bus.$emit('message:push', response.data.message, 'danger');
        }
        self.status.addCouponLoading = false;
      });
    },
    createOrder() {
      const self = this;
      const api = `${process.env.API_URL}/api/${process.env.API_PATH}/order`;
      const user = { ...self.user };
      // 送出前驗證表單內容是否有填寫完整
      self.$validator.validate().then((valid) => {
        // 驗證成功，送出訂單
        if (valid) {
          self.status.checkoutLoading = true;
          self.$http.post(api, { data: { user } }).then((response) => {
            if (response.data.success) {
              self.$router.push(
                `/checkout/check_order/${response.data.orderId}`,
              );
              self.user = {};
              self.$bus.$emit('updateCart');
            } else {
              self.$bus.$emit('message:push', response.data.message, 'danger');
            }
            self.status.checkoutLoading = false;
          });
        }
      });
    },
  },
  components: {
    ProcessBar,
  },
};
</script>

<style></style>
