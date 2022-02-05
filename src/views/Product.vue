<template>
  <!-- PRODUCT -->
    <div class="container mt-5">
        <!-- alert message zone -->
          <AlertMessage></AlertMessage>
        <!-- BANNER -->
          <div class="container">
              <div class="banner-main-img bg-cover pt-5 banner-img-2">

                <div class="container d-flex align-items-center">
                    <h2 class="ml-auto text-bg product-header-text p-3 text-main-darker">
                        每天都是 －<br>
                        <span class="mt-4">享受的好日子。</span>
                    </h2>
                </div>
              </div>
          </div>
        <div class="row d-flex justify-content-around mt-5">
          <!-- 左側列表 -->
            <div class="col-md-3 mb-5">
                <div class="list-group sticky-top text-center">
                    <h5 class="list-group-item mb-0 bg-main-color text-white">產品類別</h5>
                    <a href="#" data-toggle="list" class="list-group-item list-group-item-action active"
                    @click.prevent="selectCategory('全部')">全部產品</a>
                    <a href="#" data-toggle="list" class="list-group-item list-group-item-action"
                    @click.prevent="selectCategory('床架')">精選床架</a>
                    <a href="#" data-toggle="list" class="list-group-item list-group-item-action"
                    @click.prevent="selectCategory('收納')">居家收納</a>
                    <a href="#" data-toggle="list" class="list-group-item list-group-item-action"
                    @click.prevent="selectCategory('窗簾')">遮光窗簾</a>
                </div>
            </div>

          <!-- 右側 item -->
            <div class="col-md-8">
                <div class="tab-content">
                    <div class="tab-pane fade active show">
                        <div class="row">
                            <ProductCard v-for="item in sameCategoryItem"
                            :key="item.id" v-bind:product-data="item" :card-size="productCardSize"
                            :cart-data="cartData"
                            @emit-getCartData="getCartData">
                            </ProductCard>
                        </div>
                    </div>
                </div>

                <!-- 頁次(disable) -->
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center  mt-5">
                        <li class="page-item text-main-color disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item text-main-color disabled"><a class="page-link" href="#">1</a></li>
                        <li class="page-item text-main-color disabled"><a class="page-link" href="#">2</a></li>
                        <li class="page-item text-main-color disabled"><a class="page-link" href="#">3</a></li>
                        <li class="page-item text-main-color disabled">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductCard from '@/components/ProductCard.vue'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2',
      productData: [],
      productCardSize: '6',
      cartData: [],
      sameCategoryItem: []
    }
  },
  // 在此撰寫 JavaScript
  methods: {
    getData: function () {
      const vm = this
      axios.get(`${vm.api_URL}/customer/${vm.api_path}/products`)
        .then(function (response) {
          vm.productData = response.data.products
          console.log('全部item', vm.productData)
          vm.sameCategoryItem = vm.productData
        })
        .catch(function (error) {
          console.log(error)
          console.log('取得產品列表 失敗')
        })
    },
    getCartData () {
      const vm = this
      axios.get(`${vm.api_URL}/customer/${vm.api_path}/carts`)
        .then(function (response) {
          vm.cartData = response.data.carts
          console.log('購物車內容', vm.cartData)
          vm.$emit('emitGetCartNum', vm.cartData)
        })
        .catch(function (error) {
          console.log(error)
          console.log('取得購物車清單 失敗')
        })
    },
    selectCategory (cate) {
      const vm = this
      let newItems = []
      // 淺拷貝
      if (cate === '全部') {
        newItems = vm.productData
      } else {
        vm.productData.forEach(item => {
          if (cate === item.category) {
            newItems.push(item)
          }
        })
      }
      console.log(newItems)
      vm.sameCategoryItem = newItems
    }
  },
  emits: ['emitGetCartNum'],
  components: {
    ProductCard,
    AlertMessage
  },
  created () {
    this.getData()
    this.getCartData()
  }
}
</script>
