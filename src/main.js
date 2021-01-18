// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//程序入口文件(导包)
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入echarts
import * as echarts from 'echarts';
import 'echarts/map/js/china.js';
//引入echarts主题
import 'echarts/theme/macarons';
Vue.prototype.$echarts = echarts
//使用插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    window.vue = this;
  }
})
