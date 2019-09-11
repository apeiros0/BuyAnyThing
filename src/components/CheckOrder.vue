<template>
  <section class="row">
    <div class="col-12 col-sm-2">
      <ProcessBar></ProcessBar>
    </div>
    <div class="col-12 col-sm-10 mt-4 mt-sm-0">
      <section class="row">
        <div class="col-12 col-lg-7">
          <h2 class="h3">確認訂單</h2>
          <table class="table mt-3">
            <!-- <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> -->
            <tbody>
              <tr>
                <th scope="row">姓名</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">電話</th>
                <td>789456123</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>Larry@yy.aa</td>
              </tr>
              <tr>
                <th scope="row">收件地址</th>
                <td>ZZZAAAEE</td>
              </tr>
              <tr>
                <th scope="row">付款狀態</th>
                <td>
                  <span class="text-danger">尚未付款</span>
                  <span class="text-success">已付款</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12 col-lg-5">
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
              <tr>
                <th scope="row">超好用商品</th>
                <td class="text-right">20</td>
                <td class="text-right text-success">$100</td>
              </tr>
              <tr>
                <th scope="row">超商品</th>
                <td class="text-right">2</td>
                <td class="text-right">$100,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right text-success">$10,000</td>
              </tr>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right"><del>$10,000</del></td>
              </tr>
              <tr>
                <td colspan="2" class="text-right">打折後</td>
                <td class="text-right text-success">$9,000</td>
              </tr>
            </tfoot>
          </table>
          <div class="d-flex justify-content-end mt-3">
            <router-link
              class="btn btn-outline-dark btn-block btn-lg mr-auto"
              to="/products"
              >繼續購物</router-link
            >
            <button type="button" class="btn btn-warning btn-block btn-lg mt-0">
              付款去
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
