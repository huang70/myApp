<!-- 侧边导航栏 -->
<template>

	<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
		active-text-color="#ffd04b" style="min-height: 100%;" :router="true" :unique-opened="true">
		<!-- sidenav title -->
		<h3 class="title">后台管理系统</h3>
		<!-- 子菜单一 start -->
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-user"></i>
				<span>用户管理</span>
			</template>
			<el-menu-item index="/Users"><i class="el-icon-menu"></i>用户列表</el-menu-item>
		</el-submenu>
		<!-- 子菜单一 end -->
		<!-- 子菜单二 start -->
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>仪表盘</span>
			</template>

			<el-menu-item index="2-1">选项1</el-menu-item>
			<el-menu-item index="2-2">选项2</el-menu-item>
			<el-menu-item index="2-3">选项3</el-menu-item>
		</el-submenu>
		<!-- 子菜单二 end -->
		<!-- 子菜单三 start -->
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>仪表盘</span>
			</template>

			<el-menu-item index="3-1">选项1</el-menu-item>
			<el-menu-item index="3-2">选项2</el-menu-item>
			<el-menu-item index="3-3">选项3</el-menu-item>
		</el-submenu>
		<!-- 子菜单三 end -->
		<!-- 子菜单四 start -->
		<el-submenu index="4">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>仪表盘</span>
			</template>

			<el-menu-item index="4-1">选项1</el-menu-item>
			<el-menu-item index="4-2">选项2</el-menu-item>
			<el-menu-item index="4-3">选项3</el-menu-item>
		</el-submenu>
		<!-- 子菜单四 end -->
	</el-menu>
	<!-- sidenav end-->

</template>

<script>
	export default {
		name: 'v-sidenav'

	}
</script>

<style scoped>

</style>
