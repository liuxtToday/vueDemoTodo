// Webpack 预编译入口
import Vue from 'vue'
import App from './App'
import router from './router'
import Mock from './mock'

Mock.start();

Vue.config.productionTip = false 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
