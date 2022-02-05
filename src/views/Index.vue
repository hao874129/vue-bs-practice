<template>
  <!-- HEADER -->
    <!-- alert message zone -->
      <AlertMessage></AlertMessage>
    <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active banner-main-img bg-cover banner-img-1">
                </div>
                <div class="carousel-item banner-main-img bg-cover banner-img-2">
                </div>
                <div class="carousel-item banner-main-img bg-cover banner-img-3">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
        </div>
        <div class="header">
            <h1 class="text-hide">2HOME FURNITURE</h1>
            <div class="row header-box-section d-flex justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <a href="#精選床架" class="col-4 header-box-wrap d-flex justify-content-center align-items-center">
                            <span class="header-box-text h4 font-weight-bold">精選床架</span>
                            <div class="header-box-cover"></div>
                            <div class="header-box-img bg-cover header-box-1">
                            </div>
                        </a>
                        <a href="#居家收納" class="col-4 header-box-wrap d-flex justify-content-center align-items-center header-box-border">
                            <span class="header-box-text h4 font-weight-bold">居家收納</span>
                            <div class="header-box-cover"></div>
                            <div class="header-box-img bg-cover header-box-2">
                            </div>
                        </a>
                        <a href="#遮光窗簾" class="col-4 header-box-wrap d-flex justify-content-center align-items-center">
                            <span class="header-box-text h4 font-weight-bold">遮光窗簾</span>
                            <div class="header-box-cover"></div>
                            <div class="header-box-img bg-cover header-box-3">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!-- 為什麼選擇了製作傢俱 -->
    <section class="section my-md-9">
        <div class="row justify-content-center d-md-none no-gutters my-4">
            <div class="col-8">
                <h2 class="vertical-content-text text-center text-main-color verticla-title font-weight-bold">
                    為什麼－<br>
                    選擇了製作傢俱？
                </h2>
            </div>
        </div>
        <div class="bg-main-lighter">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 section-over">
                        <div class="bg-cover h-100 section-why-img why-img-1"></div>
                    </div>
                    <div class="col-md-6 d-md-flex justify-content-end vertical-content px-2">
                        <p class="text-main-color vertical-content-text py-md-5 py-4">
                            明月何皎皎，照我羅床幃。憂愁不能寐，攬衣起徘徊。<br>
                            <br>
                            客行雖雲樂，不如早旋歸。出戶獨彷徨，愁思當告誰！
                        </p>
                        <h2 class="text-main-darker vertical-content-text section-over verticla-title d-none d-md-block">
                            為什麼 －<br>
                            <span class="mt-4 font-weight-bold">選擇了製作傢俱？</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

  <!-- 為什麼一定要購買傢俱 -->
    <section class="section my-md-9">
        <div class="row justify-content-center d-md-none no-gutters my-4">
            <div class="col-8 ">
                <h2 class="vertical-content-text text-center verticla-title text-main-color font-weight-bold">
                    為什麼－<br>
                    一定要購買傢俱？
                </h2>
            </div>
        </div>
        <div class="bg-main-lighter">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-md-6 section-over">
                        <div class="bg-cover h-100 section-why-img why-img-2"></div>
                    </div>
                    <div class="col-md-6 d-md-flex justify-content-end vertical-content px-2">
                        <p class="text-main-color vertical-content-text py-md-5 py-4">
                            客路青山外，行舟綠水前。潮平兩岸闊，風正一帆懸。<br>
                            <br>
                            海日生殘夜，江春入舊年。鄉書何處達？歸雁洛陽邊。
                        </p>
                        <h2 class="text-main-darker vertical-content-text section-over verticla-title d-none d-md-block">
                            為什麼 －<br>
                            <span class="mt-4 font-weight-bold">一定要購買傢俱？</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

  <!-- 好的傢俱是不需要理由的 -->
    <section class="my-5 my-md-8 text-main-darker d-flex flex-column align-items-center">
        <h2 class="vertical-content-text verticla-title d-md-block">
            好的傢俱 －<br>
            <span class="mt-5">是不需要理由的<i class="fas fa-smile-wink"></i></span>
        </h2>
    </section>

  <!-- PRODUCTCARD -->
    <section class="container my-5 my-md-9" id="product-card">
        <div class="row">
          <ProductCard v-for="item in threeItems"
          :key="item.id" v-bind:product-data="item" :card-size="productCardSize"
          :cart-data="cartData"
          @emit-getCartData="getCartData">
          </ProductCard>
        </div>
    </section>
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
      productCardSize: '4',
      cartData: [],
      threeItems: []
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
          vm.getThreeItems()
          // // productData物件備份
          // [
          //   {
          //   "id": "4qQDjCSEjURax2Nc7dBJ",
          //   "category": "床架",
          //   "origin_price": 22000,
          //   "description": "法式古典Louvre雙人床架，經典百年手工浮雕工藝，床架宮廷式紡錘腳，與法式鄉村家具手工刷舊工藝，展現仿舊典雅質感～且床腳筆直設計，床架寬敞床底可收納儲物，雙人床架推薦給打造法式古典宮廷風寢室的你，同款式另有雙人標準床架(5x6.2)尺寸。",
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/B87OUPkvlBvBl7Wyv3xj9ErOazczyGO8AFM5Nll38yEUvXMJHFXnid4g9YMzJOMq6t54ucmfgO4p7xw1azkleNYyhkEIINs8zJNbCPz1JUAZwaTKqIkaVQ3mRo2VBzAH.png",
          //   "title": "Louvre 雙人床架／雙人加大",
          //   "price": 18000
          //   },
          //   {
          //   "category": "床架",
          //   "price": 12000,
          //   "origin_price": 18000,
          //   "description": "Antony 雙人床架加大選用北美黃楊木打造，木質堅韌且紋理細膩，胡桃木色手工塗裝持久不掉色，彎角導圓、造型簡約、黃銅妝點，體現床架 Mid-Century Modern (世紀中期現代風家具)美學，推薦給喜愛復古風雙人床架的你。同款式還有雙人床架(5*6.2)尺寸，適合寢室空間有限的你。",
          //   "id": "DChCruiW69XePHbUKOWD",
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VYPOpg83Jg7Ft5raI0eyzs6xSz0ttKzSJSklFq7il0HdwJ1iQ9kLHAU19rmkSapmyzRErTm1sxWO725W7CnowkRjwxgSyyRBo1ihGLwNbfYtgbo2nCTY9sarjqoxQbYX.png",
          //   "title": "Antony 雙人床架／雙人加大"
          //   },
          //   {
          //   "origin_price": 1200,
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Tx99wDepg56aO5dGH7uGpU7REZwQLd1W0ec43M6cFw3o3z4eXTbeovq8WVseZ476BntlQnPPzaqkZgoj7xITviHMqf0kiAetjxyvuLiTmr7WdulcL364MTL321qZRJkP.png",
          //   "id": "HCnxtsNfVeEx4BPXefWl",
          //   "description": "【Charles】 包含桌面化妝品收納盒儲物箱柜首飾盒子口紅梳妝臺置物架抽屜式化妝盒。",
          //   "price": 780,
          //   "category": "收納",
          //   "title": "Charles 系列儲物組合"
          //   },
          //   {
          //   "category": "床架",
          //   "price": 3780,
          //   "title": "Louvre 單人床架",
          //   "id": "KqrglBrWM38af8ugms1b",
          //   "origin_price": 5780,
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dp6gW6u5hkUxxCuNi8RjbfgufygamNzdVHWb15lHZTxqZQs0gdDunQBS7F6M3MdegcQmKfLLoxHGgV3kYunUF37DNn6coPH6NqzZwRfhbsmEblpJQLqXLg4yCqUwP3IE.png",
          //   "description": "法式古典Louvre單人床架，經典百年手工浮雕工藝，床架宮廷式紡錘腳，與法式鄉村家具手工刷舊工藝，展現仿舊典雅質感～且床腳筆直設計，床架寬敞床底可收納儲物。"
          //   },
          //   {
          //   "category": "床架",
          //   "price": 9000,
          //   "origin_price": 12000,
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Zr4h1Oqvc6NtAnpe5pNqJfGYyBJshAlKctfv0BTAZBqVAuvfSAWk4bcidBd8qBu1lRn5TWvib6O3UbmIAEt5w8SdB94GuFplZn6IM4SBvtxWJA2VnOqvQOsKungCPDXv.png",
          //   "title": "Jordan 雙人床架／雙人加大",
          //   "description": "喬丹6尺雙人加大床頭片",
          //   "id": "NrmdCgMLedGbofWwQVni"
          //   },
          //   {
          //   "title": "Charles 雙人床架",
          //   "price": 15000,
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tTQQggBAfhl0vEeM7WmTwij1JbAwC7MBD2TSyjHbZHvBjnLU5tOtoGszOmODOEu6DRjzdjIpcEzeCCkmRWaL8JDJwaaWglER7P3V4JXKT7FT5gm0UL45CaHpSVlEXbKK.png",
          //   "id": "RFGwmojxDfgFCZEd0psR",
          //   "origin_price": 17000,
          //   "description": "Charles 雙人床架有著多種異材組合，北美黃楊木打造的床架，仿真皮革的床頭靠枕再加上烤漆金屬的床腳，體現實木床架Mid-Century Modern(世紀中期現代風)美學；且床腳筆直設計，床底寬敞空間考量現代人收納儲物需求，推薦給尋覓復古風雙人床架的你，同款式另有雙人標準床架(5*6.2)尺寸。",
          //   "category": "床架"
          //   },
          //   {
          //   "id": "Shchhh6KcTaiAYfdo7LP",
          //   "description": "Antony 遮光窗簾讓你享有尊貴感。",
          //   "category": "窗簾",
          //   "origin_price": 3980,
          //   "title": "Antony 遮光窗簾",
          //   "price": 1200,
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xgI6wM3uUCpkEEcauvHs67BFjGqG6Qxa9JTfOZTys6C0yJjqw5c8nJuA31gX77YVf04kZotGP9ZFQU7hLXkuoaRwNSssScpFnzfyPzYKODuyhw2QJrT1bDSim7aOBryv.png"
          //   },
          //   {
          //   "title": "Antony 床邊桌",
          //   "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XWnC8Of71WeSvCbkGy5MvZSyCrim50F9njuwHypcbiimd8tWscxGdecRAyaNheboQkqQAiCWK12GwuwMBvEtAarU2Y7mKTwKZIqhIExyQzbAbls7NTOdN2vX1OAyEaAN.png",
          //   "id": "vWlcB0MqxkqxbcwgBVYl",
          //   "origin_price": 3200,
          //   "description": "安東尼可調高度床邊桌。",
          //   "category": "收納",
          //   "price": 1890
          //   }
          // ]
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
          // // cartData物件備份
          // [
          //   {
          //       "id": "YJM3N9XBF8d3gSXi2vvx",
          //       "quantity": 1,
          //       "product": {
          //           "category": "床架",
          //           "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/B87OUPkvlBvBl7Wyv3xj9ErOazczyGO8AFM5Nll38yEUvXMJHFXnid4g9YMzJOMq6t54ucmfgO4p7xw1azkleNYyhkEIINs8zJNbCPz1JUAZwaTKqIkaVQ3mRo2VBzAH.png",
          //           "id": "4qQDjCSEjURax2Nc7dBJ",
          //           "origin_price": 22000,
          //           "title": "Louvre 雙人床架／雙人加大",
          //           "description": "法式古典Louvre雙人床架，經典百年手工浮雕工藝，床架宮廷式紡錘腳，與法式鄉村家具手工刷舊工藝，展現仿舊典雅質感～且床腳筆直設計，床架寬敞床底可收納儲物，雙人床架推薦給打造法式古典宮廷風寢室的你，同款式另有雙人標準床架(5x6.2)尺寸。",
          //           "price": 18000
          //       }
          //   },
          //   {
          //       "quantity": 1,
          //       "id": "uoi5MVgzXZxDVpzSHNzk",
          //       "product": {
          //           "origin_price": 3980,
          //           "id": "Shchhh6KcTaiAYfdo7LP",
          //           "title": "Antony 遮光窗簾",
          //           "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xgI6wM3uUCpkEEcauvHs67BFjGqG6Qxa9JTfOZTys6C0yJjqw5c8nJuA31gX77YVf04kZotGP9ZFQU7hLXkuoaRwNSssScpFnzfyPzYKODuyhw2QJrT1bDSim7aOBryv.png",
          //           "description": "Antony 遮光窗簾讓你享有尊貴感。",
          //           "category": "窗簾",
          //           "price": 1200
          //       }
          //   }
          // ]
        })
        .catch(function (error) {
          console.log(error)
          console.log('取得購物車清單 失敗')
        })
    },
    getThreeItems: function () {
      const vm = this
      vm.productData.forEach(item => {
        if (vm.threeItems.length === 0) {
          vm.threeItems.push(item)
        } else {
          if (vm.threeItems.length < 3) {
            let isExist = false
            vm.threeItems.forEach(thrItem => {
              if (item.category === thrItem.category) {
                isExist = true
              }
            })
            if (!isExist) {
              vm.threeItems.push(item)
            }
          }
        }
      })
      console.log('三個item', vm.threeItems)
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
