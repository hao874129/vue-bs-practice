<template>
  <table class="table table-bordered table table-sm">
    <thead>
      <tr class="bg-second-color">
        <th scope="col">訂單編號</th>
        <th scope="col">聯絡人</th>
        <th scope="col">聯絡地址</th>
        <th scope="col">電子郵件</th>
        <th scope="col">訂單品項</th>
        <th scope="col">訂單日期</th>
        <th scope="col">訂單狀態</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody class="h6">
      <tr v-for="item in orderData" :key="item.id" class="table-second-color">
        <th scope="row"> {{ item.id }} </th>
        <td>
           {{ item.user.name }}
           {{ item.user.tel}}
        </td>
        <td> {{ item.user.address }} </td>
        <td> {{ item.user.email }} </td>
        <td>
          <p v-for="product in item.products" :key="product.id">
            {{`${product.title} * ${product.quantity}`}}
          </p>
        </td>
        <td> {{ timeStampTransfer(item.updatedAt) }} </td>
        <td>
          <a href="#" class="text-main-color" @click.prevent="modifyOrderStatus(item.id,item.paid)">
            {{ getItemStatus(item.paid) }}
          </a>
        </td>
        <td>
          <button type="button" class="btn btn-sm btn-danger"
          @click.prevent="deleteOrderItem(item.id)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'
import emitter from '../emitter'

export default {
  data () {
    return {
      api_URL: 'https://livejs-api.hexschool.io/api/livejs/v1',
      api_path: '11111111111',
      token: 'phRImiBZsIYgr8P9RjV9rjgr3ws2'
    }
  },
  methods: {
    timeStampTransfer (timeStamp) {
      const date = new Date(timeStamp * 1000)
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // 因getMonth()只會return當時月號"0~11"
      const day = date.getDate()
      return `${year}/${month}/${day}`
    },
    deleteOrderItem (id) {
      const vm = this
      axios.delete(`${vm.api_URL}/admin/${vm.api_path}/orders/${id}`,
        {
          headers: {
            Authorization: vm.token
          }
        })
        .then(res => {
          console.log('刪除該筆訂單 成功')
          this.$emit('emit-getOrderList')
          emitter.emit('getAlertMessage', '已刪除該筆訂單')
        })
        .catch(err => {
          console.log(err)
          console.log('刪除該筆訂單 失敗')
        })
    },
    getItemStatus (status) {
      return (status === false) ? '未處理' : '已處理'
    },
    modifyOrderStatus (id, status) {
      const vm = this
      axios.put(`${vm.api_URL}/admin/${vm.api_path}/orders`,
        {
          data: {
            id: id,
            paid: (status === false)
          }
        }, {
          headers: {
            Authorization: vm.token
          }
        })
        .then(res => {
          console.log('訂單狀態修改 成功')
          this.$emit('emit-getOrderList')
          emitter.emit('getAlertMessage', '已修改訂單狀態')
        })
        .catch(err => {
          console.log(err)
          console.log('訂單狀態修改 失敗')
        })
    }
  },
  props: {
    orderData: Object
  }
}
</script>
