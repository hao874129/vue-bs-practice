<template>
  <div :class="`col-md-${cardSize} mb-6`">
      <div class="px-md-2">
          <div class="item-card">
              <div class="item-image bg-cover border border-main-light"
                  :style="{ 'background-image': 'url(' + productData.images + ')' }" >
              </div>
              <div :id="itemLabel" class="item-label">{{ itemLabel }}</div>
              <div class="item-body d-flex text-center text-main-darker justify-content-center align-items-center">
                  <div class="col item-name">{{ productData.title }}</div>
                  <div class="col item-price font-weight-bold">
                      <del class="text-second-color">NT${{ productData.origin_price }}</del>
                      <p>NT${{ productData.price }}</p>
                  </div>
              </div>
          </div>
          <a href="#" class="btn btn-block btn-lg btn-second-color text-main-darker py-3"
          :data-id="productData.id" @click.prevent="addItem(productData.id)" >加入購物車</a>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import emitter from '../emitter'

export default {
  name: 'ProductCard',
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2',
      itemLabel: ''
    }
  },
  methods: {
    getItemLabel () {
      const vm = this
      if (vm.productData.category === '床架') {
        vm.itemLabel = '精選床架'
      } else if (vm.productData.category === '收納') {
        vm.itemLabel = '居家收納'
      } else {
        vm.itemLabel = '遮光窗簾'
      }
    },
    addItem (itemID) {
      const vm = this
      let num = 1
      vm.cartData.forEach(item => {
        if (itemID === item.product.id) {
          num = item.quantity + 1
        }
      })
      axios.post(`${vm.api_URL}/customer/${vm.api_path}/carts`, {
        data: {
          productId: itemID,
          quantity: num
        }
      })
        .then(response => {
          console.log(`ID:${vm.productData.title},已加入第${num}個`)
          this.$emit('emit-getCartData')
          emitter.emit('getAlertMessage', '商品已加入購物車')
        })
        .catch(error => {
          console.log(error)
          console.log('將產品加入購物車 失敗')
        })
    }
  },
  props: {
    productData: Object,
    cardSize: String,
    cartData: Object
  },
  created () {
    this.getItemLabel()
  }
}
</script>
