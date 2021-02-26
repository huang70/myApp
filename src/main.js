// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//程序入口文件(导包)
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* <!-- Core stylesheets -->  */
import '@/assets/css/bootstrap-material.scss';
import '@/assets/css/shreerang-material.scss';
import '@/assets/css/uikit.scss';
import '@/assets/css/Hello.scss';

//引入echarts
import * as echarts from 'echarts'
import 'echarts/map/js/china.js'
//引入echarts主题
import 'echarts/theme/macarons'
import axios from 'axios'

//添加原型
Vue.prototype.$echarts = echarts
//设置axios基准地址
axios.defaults.baseURL = ' http://localhost:3000/'
//添加原型
Vue.prototype.$axios = axios

//使用插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //挂载实例化对象router
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    window.vue = this;
  }
})



//路由守卫
//(全局前置钩子函数：router.beforeEach（），他的作用就是在每次路由切换的时候调用)
//这个钩子方法会接收三个参数：to、from、next。
router.beforeEach((to, from, next) => {
  //路由中设置的needLogin字段就在to当中 
  if (window.sessionStorage.token) {
    // alert(1111);
    console.log(window.sessionStorage);
    console.log(to) //每次跳转的路径
    if (to.path === '/') {
      //登录状态下 访问login.vue页面 会跳到Home.vue
      next({ path: '/Home' });
    } else {
      next();
    }
  } else {
    // 如果没有session ,访问任何页面。都会进入到 登录页

    if (to.path === '/' || to.path === '/Login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      // alert(2222);
      next(); //不会调用router.beforeEach（）
    } else { // 否则 跳转到登录页面
      // alert(3333);
      next({ path: '/' }); //会再次调用router.beforeEach（）
    }
  }
})

//捕获 路由跳转回调报错
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}