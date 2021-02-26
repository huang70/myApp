<!-- 头部导航栏 -->
<template>
  <!-- 头部导航栏 start-->
  <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center" id="layout-navbar" style="height: 240px;">
    <div style="width: 100%; height: 40px; line-height: 40px; white-space: nowrap;" class="just-con bg-white">
      <div style="flex: 1; text-align: right; padding-right: 20px; font-size: 20px;">
        <i class="el-icon-search icon" circle></i>
        <i class="el-icon-bell icon"></i>
        <span>
          <!-- <span>用户名</span> -->
          <el-dropdown style="font-size: 20px;">
            <span>
              <i class="el-icon-user icon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="loginout" style="white-space: nowrap">注销</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>

        </span>
      </div>

    </div>
    <div id="layout-info-all" class="bg-white margin-t-7 layout-info-all over-f-hid">
      <!-- 面包屑 start -->
      <div class=" breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/Charts">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 面包屑 end -->

      <div id="layout-info" class="flex-d-row" style="height: 154px; font-size: 16px;">
        <div style="margin: 21px 32px 25px; min-width: 100px;" class="wid-20">
          <img :src=imgSrc alt="avatar" class="img">
        </div>
        <div class="wid-white-sp over-f-hid">
          <div style="margin-top: 38px;"><label for="">{{greetings}}，{{name}}，祝你开心每一天！</label>
          </div>
          <ul style="padding: 0px;">
            <li class="li-item" style="margin-left: -4px;">交互专家</li>
            <li style="list-style: none; float: left;">
              <div style="margin-left: 33%;border-left: 1px solid #CDCFD1;width: 0;height: 28px;">
              </div>
            </li>
            <li class="li-item">蚂蚁全服</li>
          </ul>
        </div>
        <div class="wid-white-sp over-f-hid">
          <ul style="width: 100%; height: 122px;">
            <li class="li-item2">
              <span class="display-b">项目数</span>
              <span class="display-b">{{itemNumber}}</span>
            </li>
            <li class="li-item2">
              <div style="margin-left: 33%;border-left: 1px solid #CDCFD1;width: 0;height: 28px;">
              </div>
            </li>
            <li class="li-item2">
              <span class="display-b">团队内排名</span>
              <span class="display-b">{{ranking}}&nbsp;&nbsp;/{{rankingAll}}</span>
            </li>
            <li class="li-item2">
              <div style="margin-left: 33%;border-left: 1px solid #CDCFD1;width: 0;height: 28px;">
              </div>
            </li>
            <li class="li-item2">
              <span class="display-b">项目访问</span>
              <span class="display-b">{{projectVisits}}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </nav>

  <!-- 头部导航栏 end -->
</template>

<script>
  export default {
    name: 'v-headnav',
    data() {
      return {
        imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1838793893,2021635761&fm=26&gp=0.jpg',
        name: 'Maria',
        greetings: '早安',
        itemNumber: 56,
        ranking: 5,
        rankingAll: 50,
        projectVisits: 2223,
      }
    },
    methods: {
      //注销请求
      loginout() {
        // 注销后 清除session信息 ，并返回登录页
        // console.log("loginout");
        window.sessionStorage.removeItem('token');
        this.$message.success('注销成功！');
        this.$router.push('/Login');
      }
    }

  }
</script>

<style scoped>

</style>
