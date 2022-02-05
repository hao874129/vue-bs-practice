<template>
  <div class="container my-5">
    <!-- alert message zone -->
      <AlertMessage></AlertMessage>
    <div class="row d-flex justify-content-center mb-6">
      <div class="col-5 pb-2 px-2">
        <h4 class="bg-second-color text-main-lighter text-center py-4">全品項營收比重</h4>
        <!-- 圓餅圖 -->
        <div id="chart"></div>
      </div>
    </div>

    <div class="row d-flex align-items-end justify-content-around mb-4">
      <div class="col-7 pb-2 px-2 mt-6">
        <h4 class="bg-second-color text-main-lighter text-center py-4">訂單清單</h4>
      </div>
      <div class="col-3 pb-2 px-2 py-4">
        <button type="button" class="btn btn-block btn-lg btn-danger text-main-darker" @click.prevent="deleteAll">清除全部訂單</button>
      </div>
    </div>

    <div class="row d-flex justify-content-center mt-3">
      <OrderList :orderData="orderData" class="mb-6"
      @emit-getOrderList="getOrderList">
      </OrderList>
    </div>
  </div>
</template>

<script>
import c3 from 'c3'
import axios from 'axios'
import emitter from '../emitter'
import OrderList from '@/components/OrderList.vue'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2',
      orderData: []
    }
  },
  methods: {
    getOrderList () {
      const vm = this
      axios.get(`${vm.api_URL}/admin/${vm.api_path}/orders`,
        {
          headers: {
            Authorization: vm.token
          }
        })
        .then(res => {
          vm.orderData = res.data.orders
          console.log('訂單列表', vm.orderData)
          vm.renderC3()
          // // orderData物件備份
          // [
          //     {
          //         "user": {
          //             "name": "Yean Yean",
          //             "tel": "0987654321",
          //             "address": "x",
          //             "payment": "超商取貨付款",
          //             "email": "b10623020@gemail.yuntech.edu"
          //         },
          //         "products": [
          //             {
          //                 "category": "床架",
          //                 "description": "Antony 雙人床架加大選用北美黃楊木打造，木質堅韌且紋理細膩，胡桃木色手工塗裝持久不掉色，彎角導圓、造型簡約、黃銅妝點，體現床架 Mid-Century Modern (世紀中期現代風家具)美學，推薦給喜愛復古風雙人床架的你。同款式還有雙人床架(5*6.2)尺寸，適合寢室空間有限的你。",
          //                 "price": 12000,
          //                 "origin_price": 18000,
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VYPOpg83Jg7Ft5raI0eyzs6xSz0ttKzSJSklFq7il0HdwJ1iQ9kLHAU19rmkSapmyzRErTm1sxWO725W7CnowkRjwxgSyyRBo1ihGLwNbfYtgbo2nCTY9sarjqoxQbYX.png",
          //                 "id": "DChCruiW69XePHbUKOWD",
          //                 "quantity": 1,
          //                 "title": "Antony 雙人床架／雙人加大"
          //             }
          //         ],
          //         "createdAt": 1643033211,
          //         "id": "P968F61X3z1hvAj1uKJj",
          //         "quantity": 1,
          //         "updatedAt": 1643033211,
          //         "total": 12000,
          //         "paid": false
          //     },
          //     {
          //         "products": [
          //             {
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VYPOpg83Jg7Ft5raI0eyzs6xSz0ttKzSJSklFq7il0HdwJ1iQ9kLHAU19rmkSapmyzRErTm1sxWO725W7CnowkRjwxgSyyRBo1ihGLwNbfYtgbo2nCTY9sarjqoxQbYX.png",
          //                 "origin_price": 18000,
          //                 "id": "DChCruiW69XePHbUKOWD",
          //                 "category": "床架",
          //                 "quantity": 1,
          //                 "description": "Antony 雙人床架加大選用北美黃楊木打造，木質堅韌且紋理細膩，胡桃木色手工塗裝持久不掉色，彎角導圓、造型簡約、黃銅妝點，體現床架 Mid-Century Modern (世紀中期現代風家具)美學，推薦給喜愛復古風雙人床架的你。同款式還有雙人床架(5*6.2)尺寸，適合寢室空間有限的你。",
          //                 "title": "Antony 雙人床架／雙人加大",
          //                 "price": 12000
          //             },
          //             {
          //                 "title": "Louvre 單人床架",
          //                 "description": "法式古典Louvre單人床架，經典百年手工浮雕工藝，床架宮廷式紡錘腳，與法式鄉村家具手工刷舊工藝，展現仿舊典雅質感～且床腳筆直設計，床架寬敞床底可收納儲物。",
          //                 "category": "床架",
          //                 "quantity": 1,
          //                 "origin_price": 5780,
          //                 "id": "KqrglBrWM38af8ugms1b",
          //                 "images": "https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dp6gW6u5hkUxxCuNi8RjbfgufygamNzdVHWb15lHZTxqZQs0gdDunQBS7F6M3MdegcQmKfLLoxHGgV3kYunUF37DNn6coPH6NqzZwRfhbsmEblpJQLqXLg4yCqUwP3IE.png",
          //                 "price": 3780
          //             }
          //         ],
          //         "createdAt": 1642954761,
          //         "total": 15780,
          //         "id": "oCZmqbDpsXnAJVWpn2F7",
          //         "paid": false,
          //         "quantity": 2,
          //         "updatedAt": 1642955070,
          //         "user": {
          //             "address": "x",
          //             "email": "DDDDD@CC.CC",
          //             "tel": "0987654321",
          //             "payment": "信用卡",
          //             "name": "Yean Yean"
          //         }
          //     }
          // ]
        })
        .catch(err => {
          console.log(err)
          console.log('取得訂單列表 失敗')
        })
    },
    renderC3 () {
      const vm = this
      // 物件資料收集
      const total = {} // 用來放 "品項" 與 "品項的總營收"
      vm.orderData.forEach(function (orderItem) {
        orderItem.products.forEach(function (productItem) {
          if (total[productItem.title] === undefined) {
            total[productItem.title] = productItem.price * productItem.quantity
          } else {
            // 將單個"品項"價錢加總後，放到"total.品項"裡
            total[productItem.title] += productItem.price * productItem.quantity
          }
        })
      })
      // 做出資料關聯
      const titleAry = Object.keys(total) // 放全部品項的"品名"

      // 透過 total + titleAry 組出 C3 格式
      const productAry = [] // 放全部品項的 "品名" 與 "營收"
      titleAry.forEach(function (title) {
        const ary = []
        ary.push(title)
        ary.push(total[title])
        productAry.push(ary)
      })

      // 製作c3: columns
      const newAry = vm.arrangeAry(productAry) // 用來放 "營收前三&其他" 的 "品項" 與 "品項總營收"

      // 製作C3: colors
      const newColors = {} // 用來放C3圓餅圖的顏色

      newAry.forEach((item, index) => {
        if (item[0] === '其他') {
          newColors['其他'] = '#d1dddb'
        } else {
          if (index === 0) {
            newColors[`${item[0]}`] = '#5f6d89'
          } else if (index === 1) {
            newColors[`${item[0]}`] = '#374157'
          } else if (index === 2) {
            newColors[`${item[0]}`] = '#7f8fb0'
          }
        }
      })

      // C3.js
      const chart = c3.generate({
        bindto: '#chart', // HTML 元素綁定
        data: {
          type: 'pie',
          columns: newAry,
          colors: newColors
        }
      })
      console.log('圖表 object', chart)
    },
    arrangeAry (ary) {
      const newAry = [] // new Array()

      // 將傳進來的參數ary做營收排序(由高到低)
      ary.sort(function (a, b) {
        return b[1] - a[1] // 比較各個品項的 total
      })

      let otherTotal = 0 // 存取 "其他" 品項總營收

      // 除了營收排名前三的品項，其餘品項合併為"其他"
      ary.forEach((item, index) => {
        if (index < 3) {
          newAry.push(ary[index])
        } else {
          otherTotal += ary[index][1]
        }
      })
      newAry.push(['其他', otherTotal])
      return newAry
    },
    deleteAll () {
      const vm = this
      axios.delete(`${vm.api_URL}/admin/${vm.api_path}/orders`,
        {
          headers: {
            Authorization: vm.token
          }
        })
        .then(res => {
          console.log('刪除全部訂單 成功')
          vm.getOrderList()
          emitter.emit('getAlertMessage', '已刪除全部訂單')
        })
        .catch(err => {
          console.log(err)
          console.log('刪除全部訂單 失敗')
        })
    }
  },
  emits: ['emitGetCartNum'],
  components: {
    OrderList,
    AlertMessage
  },
  created () {
    this.getOrderList()
  }
}
</script>
