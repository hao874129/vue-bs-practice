<template>
  <div class="message-zone">
    <div
    class="alert fade show text-white"
    v-for="(item,index) in messages" :key="index"
    :class="`alert-${item.color}`"
    >
      {{ item.message }}
      <button
      type="button" class="btn btn-sm ml-2"
      :class="`btn-${item.color}`"
      @click="removeMessage(index)"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import emitter from '../emitter'

export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    updateMessages (message, color) {
      const vm = this
      const timestamp = Math.floor(new Date() / 1000)
      vm.messages.push({
        message,
        color,
        timestamp
      })
      vm.removeMessageWithTime(timestamp)
    },
    removeMessageWithTime (timestamp) {
      const vm = this
      // 當message出現1.5秒就刪除
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1)
          }
        })
      }, 1500)
    },
    removeMessage (i) {
      this.messages.splice(i, 1)
    }
  },
  created () {
    const vm = this
    // 自定義名稱 'getAlertMessage'
    // message: 傳入參數
    // color: alert 顏色，預設值為 second-color
    emitter.on('getAlertMessage', (message, color = 'second-color') => {
      if (message === '商品已從購物車移除' || message === '已減少此商品數量' || message === '已刪除全部訂單' || message === '已刪除該筆訂單') {
        color = 'danger'
      }
      vm.updateMessages(message, color)
      console.log('這甚麼顏色', color)
    })
  },
  beforeUnmount () {
    emitter.off('getAlertMessage')
  }
}
</script>

<style lang="scss" scoped>
  .message-zone {
    position: fixed;
    max-width: 100%;
    top: 100px;
    right: 20px;
    z-index: 10000;
  }
</style>
