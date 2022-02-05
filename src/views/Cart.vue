<template>
  <!-- cart -->
    <!-- alert message zone -->
      <AlertMessage></AlertMessage>
    <section class="container my-5">
        <div class="row">
            <div class="col-md-8 pb-2 px-2">
                <h4 class="bg-main-lighter text-main-color text-center py-4">您的購物車</h4>
                <CartCard v-for="item in cartData"
                :key="item.id"
                :cart-item="item"
                @emit-getCartData="getCartData">
                </CartCard>
            </div>

            <div class="col-md-4 px-2">
                <div class="card-summarybox px-3 bg-main-darker mx-2">
                    <h4 class="text-white text-center pt-4 pb-2">
                        訂單摘要
                    </h4>
                    <hr class="border-white">
                    <div class="d-flex justify-content-between text-white pb-2">
                        <span class="h5">小計</span>
                        <span class="h5">NT$ {{cartInfo.finalTotal}}</span>
                    </div>
                    <div class="d-flex justify-content-between text-white pb-2">
                        <span class="h5">運費</span>
                        <span class="h5">NT$ <del class="h5 text-second-color">60</del> 0</span>
                    </div>
                    <div class="d-flex justify-content-between text-white pb-2">
                        <span class="h4">合計</span>
                        <span class="h4 font-weight-bold">NT$ {{cartInfo.finalTotal}}</span>
                    </div>
                </div>
                <div class="mx-2">
                    <router-link to="/checkout" href="checkout-1.html" class="btn btn-main-color btn-block text-light btn-lg py-3">
                        結帳
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import CartCard from '@/components/CartCard'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2',
      cartData: [],
      cartInfo: []
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
          // // cartData物件備份
          // {
          //     "status": true,
          //     "carts": [
          //         {
          //             "id": "XVsMX24xF6Ol7Z78ULw3",
          //             "quantity": 1,
          //             "product": {
          //                 "price": 15000,
          //                 "category": "床架",
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tTQQggBAfhl0vEeM7WmTwij1JbAwC7MBD2TSyjHbZHvBjnLU5tOtoGszOmODOEu6DRjzdjIpcEzeCCkmRWaL8JDJwaaWglER7P3V4JXKT7FT5gm0UL45CaHpSVlEXbKK.png",
          //                 "description": "Charles 雙人床架有著多種異材組合，北美黃楊木打造的床架，仿真皮革的床頭靠枕再加上烤漆金屬的床腳，體現實木床架Mid-Century Modern(世紀中期現代風)美學；且床腳筆直設計，床底寬敞空間考量現代人收納儲物需求，推薦給尋覓復古風雙人床架的你，同款式另有雙人標準床架(5*6.2)尺寸。",
          //                 "title": "Charles 雙人床架",
          //                 "origin_price": 17000,
          //                 "id": "RFGwmojxDfgFCZEd0psR"
          //             }
          //         },
          //         {
          //             "id": "YJM3N9XBF8d3gSXi2vvx",
          //             "quantity": 1,
          //             "product": {
          //                 "origin_price": 22000,
          //                 "price": 18000,
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/B87OUPkvlBvBl7Wyv3xj9ErOazczyGO8AFM5Nll38yEUvXMJHFXnid4g9YMzJOMq6t54ucmfgO4p7xw1azkleNYyhkEIINs8zJNbCPz1JUAZwaTKqIkaVQ3mRo2VBzAH.png",
          //                 "description": "法式古典Louvre雙人床架，經典百年手工浮雕工藝，床架宮廷式紡錘腳，與法式鄉村家具手工刷舊工藝，展現仿舊典雅質感～且床腳筆直設計，床架寬敞床底可收納儲物，雙人床架推薦給打造法式古典宮廷風寢室的你，同款式另有雙人標準床架(5x6.2)尺寸。",
          //                 "id": "4qQDjCSEjURax2Nc7dBJ",
          //                 "category": "床架",
          //                 "title": "Louvre 雙人床架／雙人加大"
          //             }
          //         },
          //         {
          //             "id": "uoi5MVgzXZxDVpzSHNzk",
          //             "quantity": 1,
          //             "product": {
          //                 "id": "Shchhh6KcTaiAYfdo7LP",
          //                 "description": "Antony 遮光窗簾讓你享有尊貴感。",
          //                 "category": "窗簾",
          //                 "price": 1200,
          //                 "title": "Antony 遮光窗簾",
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xgI6wM3uUCpkEEcauvHs67BFjGqG6Qxa9JTfOZTys6C0yJjqw5c8nJuA31gX77YVf04kZotGP9ZFQU7hLXkuoaRwNSssScpFnzfyPzYKODuyhw2QJrT1bDSim7aOBryv.png",
          //                 "origin_price": 3980
          //             }
          //         }
          //     ],
          //     "total": 42980,
          //     "finalTotal": 34200
          // }
        })
        .catch(function (error) {
          console.log(error)
          console.log('取得購物車清單 失敗')
        })
    }
  },
  components: {
    CartCard,
    AlertMessage
  },
  emits: ['emitGetCartNum'],
  created () {
    this.getCartData()
  }
}
</script>
