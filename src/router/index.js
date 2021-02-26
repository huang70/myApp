//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
//@代表的是你的项目src目录
import Home from '@/components/Home'
import Charts from '@/components/Charts'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login/Login'
import Index from '@/components/subrouters/Index'
import Users from '@/components/subrouters/Users'

//通过vue.use(插件)安装插件
Vue.use(Router)

//创建并导出路由
export default new Router({
  mode: 'history',

  //配置路径和组件
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Home',
      component: Home,
      //判断每次路由跳转到此链接是否需要登录
      meta: {
        needLogin: true
      },
      children: [{
        path: '/Index',
        component: Index
      }, {
        path: '/Users',
        component: Users
      }]
    },
    {
      path: '/Charts',
      component: Charts,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
      meta: {
        needLogin: true
      }
    },
    {
      name: 'Login',
      path: '/Login',
      component: Login,
      //判断每次路由跳转到此链接是否需要登录
      meta: {
        needLogin: false
      }
    }
  ]

})


