<template>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/index" class="navbar-brand d-flex align-items-center mr-0" href="index.html">
                <img src="~@/assets/images/sofa.svg" alt="book" width="40" height="40" class=" d-lg-inline-block align-top">
                <div class="ml-md-3 text-main-color text-center">
                    <h2 class="mt-2 mb-0 fw">倆傢家居</h2>
                    <small>2HOME FURNITURE</small>
                </div>
            </router-link>
            <router-link to="/cart" class="nav-link order-md-2 d-flex align-items-center nav-cart" href="cart.html">
                <i class="fas fa-shopping-cart"></i>
                <span class="badge rounded-circle badge-danger badge-text">
                  {{ cartNum }}
                </span>
            </router-link>
            <div class="collapse navbar-collapse justify-content-end order-md-1" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/index" class="nav-link font-weight-bold" href="index.html">首頁<span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link font-weight-bold" href="product.html">產品</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link font-weight-bold" href="login.html">登入</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 顯示區塊 -->
    <router-view @emitGetCartNum="getCartNum">
    </router-view>

    <!-- 訂閱 -->
    <section class="bg-main-color py-2">
        <div class="container">
            <div class="row justify-content-around align-items-center">
                <div class="col-md-5 d-flex align-items-center justify-content-center p-4 mb-1 mb-md-0">
                    <img src="~@/assets/images/sofa.svg" style="width: 40px;">
                    <span class="h4 mb-0 text-white sbu-text pl-3">訂閱，讓每刻都在享受</span>
                </div>

                <div class="col-md-5 d-flex justify-content-center align-items-center p-4 mx-6 mx-md-0">
                    <div class="input-group">
                        <span class="sub-size bg-main-lighter d-flex justify-content-center align-items-center"
                        style="width: 60px;">
                            <i class="fas fa-paper-plane h4 text-main-darker font-weight-bold"></i>
                        </span>
                        <input type="email" class="form-control sub-size bg-main-lighter" placeholder="E-mail">
                        <div class="input-group-append sub-size">
                            <button class="btn btn-second-color" type="button" id="subscript"
                            style="width: 60px;">
                                <i class="far fa-hand-pointer h5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <div class="footer bg-main-lighter">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5 d-flex flex-column justify-content-md-between text-left">
                    <div class="py-4 justify-content-center text-main-darker">
                        <h2 class="mb-0 ml-3">倆傢家居</h2>
                        <small class="ml-3 pl-1">2HOME FURNITURE</small>
                    </div>
                    <div class="list-unstlyed pl-0 h5 ">
                        <small class="text-main-color">04-1234-5678</small><br>
                        <small>
                            <a class="text-main-color" href="mailto:2HOMEFURNITURE@email.com">2HOME FURNITURE@email.com</a>
                        </small><br>
                        <small class="text-main-color">437 台中市大甲區蔣公路 2 號</small>
                    </div>
                </div>
                <div class="col-md-5 d-none d-md-block">
                    <div>
                        <h4 class="vertical-content-text  text-main-darker verticla-title pt-4 ml-auto">
                            每天都是 －
                            <br>
                            享受的好日子。
                        </h4>
                    </div>
                </div>
            </div>
            <div class="row mt-4 pb-4 justify-content-center text-main-color">
                <div class="col-md-5 col-4 d-flex justify-content-start">
                    <a href="#" class="text-main-color" @click.prevent="prevent">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" class="text-main-color" @click.prevent="prevent">
                        <i class="fas fa-at fa-2x font-weight-bold"></i>
                    </a>
                    <a href="#" class="text-main-color" @click.prevent="prevent">
                        <i class="fab fa-instagram fa-2x font-weight-bold"></i>
                    </a>
                </div>
                <div class="col-md-5 col-8 text-right">
                    <span >© 2020 All Rights Reserved</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../src/assets/css/all.css';
</style>

<script>
export default {
  data () {
    return {
      cartNum: 0
    }
  },
  methods: {
    getCartNum (data) {
      let count = 0
      const vm = this
      console.log('app.vue收到的資料', data)
      data.forEach(item => {
        count = count + item.quantity
      })
      vm.cartNum = count
    }
  }
}
</script>
