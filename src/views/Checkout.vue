<template>
  <!-- checkout -->
    <section class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8 px-2">
                <div class="deliver-recipient bg-main-darker px-4 py-4 text-main-lighter">
                    <div class="d-flex justify-content-center align-items-center pt-3 pb-5">
                        <div class="d-flex justify-content-center">
                            <span class="h1">訂單填寫</span>
                        </div>
                    </div>
                    <VForm class="needs-validation" v-slot="{ errors }" @submit="onSubmit">
                         <!-- {{ errors }} {{ values }} -->
                        <div class="form-row">
                            <div class="col-6 mb-3">
                                <label for="customerName">姓名</label>
                                <error-message name="姓名" class="invalid-feedback" v-slot="{ message }">
                                  <span class="ml-3 orderInfo-message text-danger">{{ message }}</span>
                                </error-message>
                                <VField name="姓名" id="customerName" type="text" class="form-control form-control-lg"
                                :rules="isRequired"
                                :class="{'is-invalid': errors['姓名']}"
                                v-model="user.name"
                                placeholder="黃小豪" required></VField>
                            </div>
                            <div class="col-6 mb-3">
                                <label for="customerPhone">電話</label>
                                <error-message name="電話" class="invalid-feedback" v-slot="{ message }">
                                  <span class="ml-3 orderInfo-message text-danger">{{ message }}</span>
                                </error-message>
                                <VField name="電話" id="customerPhone" type="tel" class="form-control form-control-lg"
                                :rules="isPhone"
                                :class="{'is-invalid': errors['電話']}"
                                v-model="user.tel"
                                placeholder="0912345678" required></VField>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col mb-3">
                                <label for="customerEmail">Email</label>
                                <error-message name="email" class="invalid-feedback" v-slot="{ message }">
                                  <span class="ml-3 orderInfo-message text-danger">{{ message }}</span>
                                </error-message>
                                <VField name="email" id="customerEmail" type="email" class="form-control form-control-lg"
                                :class="{'is-invalid': errors['email']}"
                                :rules="{ email: true , required: true}"
                                v-model="user.email"
                                placeholder="abc123@gmail.com" required></VField>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col mb-3">
                                <label for="customerAddress">寄送地址</label>
                                <error-message name="地址" class="invalid-feedback" v-slot="{ message }">
                                  <span class="ml-3 orderInfo-message text-danger">{{ message }}</span>
                                </error-message>
                                <VField name="地址" id="customerAddress" type="text" class="form-control form-control-lg"
                                :class="{'is-invalid': errors['地址']}"
                                :rules="{required: true}"
                                v-model="user.address"
                                placeholder="台中市大甲區大馬路 2 號" required></VField>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col mb-3">
                                <label for="customerPayment">付款方式</label>
                                <error-message name="付款方式" class="invalid-feedback" v-slot="{ message }">
                                  <span class="ml-3 orderInfo-message text-danger">{{ message }}</span>
                                </error-message>
                                <VField name="付款方式" id="customerPayment" class="form-control form-control-lg"
                                :class="{'is-invalid': errors['付款方式']}"
                                :rules="{required: true}"
                                v-model="user.payment" required as="select">
                                  <option value="" disabled>請選擇付款方式</option>
                                  <option selected value="超商取貨付款">超商取貨付款</option>
                                  <option value="信用卡">信用卡</option>
                                  <option value="ATM">ATM</option>
                                </VField>
                            </div>
                        </div>
                        <button class="mt-5 btn btn-lg btn-main-color btn-block py-3">
                          <router-link to="/success" class="text-light" href="success.html" type="submit">
                              送出訂單
                          </router-link>
                        </button>
                    </VForm>
                </div>
            </div>
            <div class="d-none d-md-block col-md-4">
                <div class="ml-3 card-summarybox border border-primary-lighter text-main-color">
                    <h3 class="text-center bg-main-lighter py-2">
                        訂單摘要
                    </h3>
                    <div class="d-flex justify-content-between py-3 px-2">
                        <span class="h5">小計</span>
                        <span class="h5">NT$ {{cartInfo.finalTotal}}</span>
                    </div>
                    <div class="d-flex justify-content-between pb-2 px-2">
                        <span class="h5">運費</span>
                        <span class="h5">NT$ <del class="h5 text-second-color">60</del> 0</span>
                    </div>
                    <div class="d-flex justify-content-between pb-2 px-2 ">
                        <span class="h4 font-weight-bold">合計</span>
                        <span class="h4 font-weight-bold">NT$ {{cartInfo.finalTotal}}</span>
                    </div>
                </div>

                <div class="d-none d-lg-block mt-4 ml-3 card-summarybox border border-primary-lighter text-main-color">
                    <h3 class="text-center bg-main-lighter py-2">
                        購物清單
                    </h3>
                    <div class="card-summaryimg py-2 px-2 d-flex justify-content-start align-items-center text-left"
                    v-for="item in cartData"
                    :key="item.id">
                        <div class="cart-image py-2"
                            :style="{'background-image': 'url(' + item.product.images + ')'}">
                        </div>
                        <div class="pr-3 pl-3">
                            <h5 class="text-main-darker">{{item.product.title}}</h5>
                            <span class="h6">NT${{item.product.price*item.quantity}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Checkout',
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2',
      cartData: [],
      cartInfo: [],
      user: {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: ''
      }
    }
  },
  methods: {
    getCartData () {
      const vm = this
      axios.get(`${vm.api_URL}/customer/${vm.api_path}/carts`)
        .then(function (response) {
          vm.cartData = response.data.carts
          vm.cartInfo = response.data
          console.log('購物車內容', vm.cartData)
          console.log('購物車資訊', vm.cartInfo)
          vm.$emit('emitGetCartNum', vm.cartData)
        })
        .catch(function (error) {
          console.log(error)
          console.log('取得購物車清單 失敗')
        })
    },
    onSubmit () {
      // 送出表單，最後用於驗證時使用
      console.log(this.user)
      const vm = this
      const data = {}
      data.user = vm.user
      // 對後台新增一個購買清單
      axios.post(`${vm.api_URL}/customer/${vm.api_path}/orders`, { data })
        .then(response => {
          console.log('對後台新增一個購買清單 成功')
          vm.getCartData()
        })
        .catch(error => {
          console.log(error)
          console.log('對後台新增一個購買清單 失敗')
        })
      this.$router.push('/success') // 將路由導向 success 頁面
    },
    isRequired (value) {
      if (!value) {
        return '必填'
      }
      return true
    },
    isPhone (phone) {
      if (!phone) {
        return '必填'
      }
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(phone) ? true : '錯誤'
    }
  },
  emits: ['emitGetCartNum'],
  created () {
    this.getCartData()
  }
}
</script>
