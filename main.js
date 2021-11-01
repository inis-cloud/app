import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

// INIS助手函数
import { inisHelper } from '@/utils/helper'
Vue.prototype.$inisHelper = inisHelper

// INIS 配置文件
import config from '@/static/config.js'
process.inisENV = config

// http模块
import Request from '@/utils/luch-request/index.js'
const http = new Request()
http.config.baseURL = inisHelper.customProcessApi(process.inisENV.api)
Vue.prototype.$http = http