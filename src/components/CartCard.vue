<template>
  <div class="d-flex flex-column flex-md-row justify-content-md-between border-bottom border-main-lighter py-2">
      <div class="flex-fill cart-row-detail d-flex align-items-center">
          <div class="cart-image py-2" :style="{'background-image': 'url(' + cartItem.product.images +')' }">
          </div>
          <div class="flex-fill d-flex flex-column flex-md-row align-items-md-center align-items-start px-2">
              <div class="text-left d-flex flex-column align-items-start w-50 mr-2">
                  <h5 class="text-main-darker"> {{cartItem.product.title}} </h5>
                  <span class="h6 text-main-color">NT${{cartItem.product.price}}</span>
              </div>
              <div class="cart-quantity w-50">
                  <div class="input-group">
                      <div class="input-group-prepend">
                          <button type="button" class="cart-quantity-btn-add btn btn-white btn-outline-main-lighter text-main-color
                          d-flex justify-content-center align-items-center" @click.prevent="removeItemQty">—</button>
                      </div>
                      <span class="cart-quantity-qty bg-white border border-main-lighter d-flex justify-content-center align-items-center">
                          {{cartItem.quantity}}
                      </span>
                      <div class="input-froup-append">
                          <button type="button" class="cart-quantity-btn-remove btn btn-white btn-outline-main-lighter text-main-color
                          d-flex justify-content-center align-items-center" @click.prevent="addItemQty">＋</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row-price d-flex align-items-center justify-content-end py-2">
          <span class="h5 mb-0 text-main-darker">NT${{cartItem.product.price*cartItem.quantity}}</span>
          <a class="btn text-main-color" @click.prevent="dltItem" href="#removeModal">
              <i class="fas fa-trash-alt"></i>
          </a>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import emitter from '../emitter'

export default {
  name: 'CartCard',
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2'
    }
  },
  methods: {
    dltItem () {
      const vm = this
      const id = vm.cartItem.id
      axios.delete(`${vm.api_URL}/customer/${vm.api_path}/carts/${id}`)
        .then(response => {
          console.log('刪除購物車內特定產品 成功')
          this.$emit('emit-getCartData')
          emitter.emit('getAlertMessage', '商品已從購物車移除')
        })
        .catch(error => {
          console.log(error)
          console.log('刪除購物車內特定產品 失敗')
        })
    },
    addItemQty () {
      const vm = this
      const id = vm.cartItem.id
      let num = vm.cartItem.quantity
      num++
      const data = {
        data: {
          id,
          quantity: num
        }
      }
      axios.patch(`${vm.api_URL}/customer/${vm.api_path}/carts/`, data)
        .then(response => {
          console.log('增加購物車內特定產品數量 成功')
          this.$emit('emit-getCartData')
          emitter.emit('getAlertMessage', '已增加此商品數量')
        })
        .catch(error => {
          console.log(error)
          console.log('增加購物車內特定產品數量 失敗')
        })
    },
    removeItemQty () {
      const vm = this
      const id = vm.cartItem.id
      let num = vm.cartItem.quantity
      num--
      const data = {
        data: {
          id,
          quantity: num
        }
      }
      if (num === 0) {
        vm.dltItem()
      } else {
        axios.patch(`${vm.api_URL}/customer/${vm.api_path}/carts/`, data)
          .then(response => {
            console.log('減少購物車內特定產品數量 成功')
            this.$emit('emit-getCartData')
            emitter.emit('getAlertMessage', '已減少此商品數量')
          })
          .catch(error => {
            console.log(error)
            console.log('減少購物車內特定產品數量 失敗')
          })
      }
    }
  },
  props: {
    cartItem: Object
  }
}
</script>
