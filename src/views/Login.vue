<template>
  <!-- login -->
    <section class="container my-6">
        <div class="row no-gutters justify-content-center">
            <div class="col-md-10">
                <div class="d-md-none">
                    <h2 class="bg-main-darker text-center text-white p-3 mb-0">會員登入</h2>
                </div>
                <div class="row no-gutters flex-md-row-reverse">
                    <div class="col-md-6 py-md-4">
                        <div class="bg-main-lighter p-4">
                            <h4 class="text-center d-none d-md-block pb-3 text-main-color">—— 連結社群 ——</h4>
                            <div class="row">
                                <div class="col-4 col-md-12 mb-md-4">
                                    <button class="btn btn-block btn-lg py-2 h-100 bg-light">
                                        <img src="~@/assets/images/ic-facebook-logo.svg" class="img-fluid  ic-logo">
                                    </button>
                                </div>
                                <div class="col-4 col-md-12 mb-md-4">
                                    <button class="btn btn-block btn-lg py-2 h-100 bg-light ">
                                        <img src="~@/assets/images/ic-google-logo.svg" class="img-fluid  ic-logo">
                                    </button>
                                </div>
                                <div class="col-4 col-md-12 mb-md-4">
                                    <button class="btn btn-block btn-lg py-2 h-100 bg-light ">
                                        <img src="~@/assets/images/ic-yahoo-logo.svg" class="img-fluid  ic-logo">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-none d-md-block px-4 pt-5 pb-3 bg-main-darker text-white text-center">
                            <h2>會員登入</h2>
                        </div>
                        <div class="bg-main-darker px-5 pt-3  pb-4">
                            <div class="form-withicon bg-main-lighter mb-3">
                                <label for="username" class="form-icon">
                                    <i class="fas fa-user material-icon text-main-color"></i>
                                </label>
                                <input type="text" id="username" class="form-input w-100 p-3 bg-main-lighter border-0"
                                    placeholder="電子信箱／手機號碼">
                            </div>
                            <div class="form-withicon bg-main-lighter mb-3">
                                <label for="password" class=" form-icon">
                                    <i class="fas fa-key material-icon text-main-color"></i>
                                </label>
                                <input type="password" id="password"
                                    class="form-input w-100 p-3 bg-main-lighter border-0" placeholder="請輸入使用者密碼">
                            </div>
                            <div class="custom-checkbox pt-2">
                                <input type="checkbox" id="rememberme">
                                <label for="rememberme" class="text-white mb-0 pl-1">記住我</label>
                            </div>
                        </div>
                        <button class=" btn btb-lg py-3 bg-main-color w-100 text-light">
                            登入帳號
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  emits: ['emitGetCartNum']
}
</script>
