//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
//@代表的是你的项目根路径
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import HelloWorld from '@/components/HelloWorld'

//通过vue.use(插件)安装插件
Vue.use(Router)

//创建并导出路由
export default new Router({
  //配置路径和组件  
  routes: [
    {
      path: '/',
      redirect: '/Hello'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Hello',
      component: Hello
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})