import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// AlertMessage
// self.$bus.$emit('message:push');
// 自定義名稱 'messsage:push'
// message (String): 傳入參數 (錯誤訊息)
// status (String): 樣式，預設值為 warning


// UpdateCart
// self.$bus.$emit('updateCart');
// 自定義名稱 'updateCart'

// UpdateCart:nav 更新 navbar 購物車
// self.$bus.$emit('updateCart:nav');
// 自定義名稱 'updateCart'
