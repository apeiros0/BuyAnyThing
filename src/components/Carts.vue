<template>
  <section class="row">
    <div class="col-12 col-sm-2">
      <ProcessBar></ProcessBar>
    </div>
    <div class="col-12 col-sm-10 mt-4 mt-sm-0">
      <section class="row">
        <div class="col-12 col-lg-7">
          <h2 class="h3">填寫寄送資料</h2>
          <form class="mt-3">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName">姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="請輸入姓名"
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputTel">電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputTel"
                  placeholder="請輸入電話"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="請輸入 Email"
                required
              />
            </div>
            <div class="form-group">
              <label for="inputAddress">收件地址</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="請輸入地址"
                required
              />
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-5">
          <table
            class="table table-borderless border border-primary mt-4 mt-lg-0"
          >
            <thead class="bg-primary">
              <tr>
                <th scope="col" width="50"></th>
                <th scope="col">商品名稱</th>
                <th scope="col" class="text-right" width="60">數量</th>
                <th scope="col" class="text-right" width="100">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    class="cart-icon d-flex justify-content-center align-items-center"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </div>
                </td>
                <th scope="row">超好用商品</th>
                <td class="text-right">20</td>
                <td class="text-right text-success">$100</td>
              </tr>
              <tr>
                <td>
                  <div
                    class="cart-icon d-flex justify-content-center align-items-center"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </div>
                </td>
                <th scope="row">超商品</th>
                <td class="text-right">2</td>
                <td class="text-right">$100,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right text-success">$10,000</td>
              </tr>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right"><del>$10,000</del></td>
              </tr>
              <tr>
                <td colspan="3" class="text-right">打折後</td>
                <td class="text-right text-success">$9,000</td>
              </tr>
            </tfoot>
          </table>
          <div class="form-row justify-content-end align-items-center">
            <label for="inputCoupon" class="mb-3 mr-2 d-block"
              >請輸入優惠碼</label
            >
            <div class="form-group col-3">
              <input type="text" class="form-control" id="inputCoupon" />
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <router-link
              class="btn btn-outline-dark btn-block btn-lg mr-auto"
              to="/products"
              >繼續購物</router-link
            >
            <button type="button" class="btn btn-warning btn-block btn-lg mt-0">
              結帳
            </button>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import ProcessBar from './ProcessBar';

export default {
  components: {
    ProcessBar,
  },
};
</script>

<style></style>
