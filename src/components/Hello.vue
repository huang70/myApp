<template>
	<!-- [ Layout wrapper ] Start -->
	<div class="layout-wrapper layout-2">
		<div class="layout-inner">
			<!-- [sidenav] Start-->
			<div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark">
				<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="min-height: 100%;">
					<!-- sidenav title -->
					<h2 class="title">&nbsp;&nbsp;&nbsp;dashboard</h2>
					<!-- 子菜单一 start -->
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>仪表盘</span>
						</template>

						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
						<el-menu-item index="1-3">选项3</el-menu-item>
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
			</div>
			<!-- [layout-container] Start-->
			<div class="layout-container">
				<!-- [ Layout navbar ( Header ) ] Start -->
				<nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center" id="layout-navbar">

					<!-- 头部导航栏 start-->
					<div style="width: 100%; height: 30px; line-height: 30px; white-space: nowrap;" class="just-con bg-white">
						<div style="flex: 1; text-align: right; padding-right: 20px;">
							<i class="el-icon-search icon" circle></i>
							<i class="el-icon-bell icon"></i>
							<span>
								<span>用户名</span>
								<i class="el-icon-user icon"></i>
							</span>
						</div>

					</div>

					<div id="layout-info-all" class="bg-white margin-t-7 layout-info-all over-f-hid">
						<!-- 面包屑 start -->
						<div class=" breadcrumb">
							<el-breadcrumb separator="/">
								<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
								<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
								<el-breadcrumb-item>活动列表</el-breadcrumb-item>
							</el-breadcrumb>
						</div>
						<!-- 面包屑 end -->

						<div id="layout-info" class="flex-d-row" style="height: 154px;">
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
					<!-- 头部导航栏 end -->
				</nav>

				<!-- [ Layout navbar ( Header ) ] End -->

				<!-- [ Layout content ] Start -->
				<div class="layout-content">

					<!-- [ content ] Start -->
					<div class="container-fluid flex-grow-1 container-p-y flex-d-row">
						<div class="col-lg-7">
							<div class="row bg-white">
								<el-tabs v-model="activeName" @tab-click="handleClick">
									<el-tab-pane label="全部项目" name="first">
										<div class="col-sm-12">
											<div class="d-flex w-100 mb-4">
												<div class="row no-gutters row-bordered row-border-light h-100">
													<!-- <div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center"> -->

													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>
													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>
													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>

													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>
													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>
													<div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center">
														<div class="card-body media align-items-center text-dark">
															<i class="lnr lnr-license display-4 d-block text-primary"></i>
															<span class="media-body d-block ml-3"><span class="text-big">
																	<i class="el-icon-message"></i>
																	<a href="#" style="font-size: medium;"> XXX平台</a></span>
																<br>
																<small>这是一个描述信息</small>
																<br>
																<a href="#">蜂鸟项目组</a>
															</span>
														</div>
													</div>

												</div>
											</div>
										</div>
									</el-tab-pane>
									<el-tab-pane label="进行中的项目" name="second">进行中的项目</el-tab-pane>
								</el-tabs>
							</div>
							<div class="row bg-white margin-t-25">
								<div style="width: 100%;">
									<div>
										<!-- <div class="card-header with-elements pb-0">
											<h6 class="card-header-title mb-0">Customer details</h6>
											<div class="card-header-elements ml-auto p-0">
												<ul class="nav nav-tabs">
													<li class="nav-item">
														<a class="nav-link active" data-toggle="tab" href="#sale-stats">Sale stats</a>
													</li>
													<li class="nav-item">
														<a class="nav-link" data-toggle="tab" href="#latest-sales">Latest sales</a>
													</li>
												</ul>
											</div>
										</div> -->
										<div class="nav-tabs-top">
											<div class="tab-content">
												<div class="tab-pane fade show active" id="sale-stats">
													<div style="height: 330px" id="tab-table-1">
														<table class="table table-hover card-table">
															<thead>
																<tr>
																	<th>动态</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<div class="media mb-0">
																			<el-avatar :size="40"></el-avatar>
																		</div>
																	</td>
																	<td>
																		<div class="d-inline-block align-middle">
																			<h6 class="mb-1">Workaround for OS X selects printing bug</h6>
																			<p class="text-muted mb-0">2分钟前</p>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="media mb-0">
																			<el-avatar :size="40"></el-avatar>
																		</div>
																	</td>
																	<td>
																		<div class="d-inline-block align-middle">
																			<h6 class="mb-1">Workaround for OS X selects printing bug</h6>
																			<p class="text-muted mb-0">2分钟前</p>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="media mb-0">
																			<el-avatar :size="40"></el-avatar>
																		</div>
																	</td>
																	<td>
																		<div class="d-inline-block align-middle">
																			<h6 class="mb-1">Workaround for OS X selects printing bug</h6>
																			<p class="text-muted mb-0">2分钟前</p>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div class="media mb-0">
																			<el-avatar :size="40"></el-avatar>
																		</div>
																	</td>
																	<td>
																		<div class="d-inline-block align-middle">
																			<h6 class="mb-1">Workaround for OS X selects printing bug</h6>
																			<p class="text-muted mb-0">2分钟前</p>
																		</div>
																	</td>
																</tr>

															</tbody>
														</table>
													</div>
													<a href="javascript:"
														class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW
														MORE</a>
												</div>
												<div class="tab-pane fade" id="latest-sales">
													<div style="height: 330px" id="tab-table-2">
														<table class="table table-hover card-table">
															<thead>
																<tr>
																	<th>Product</th>
																	<th>Qty.</th>
																	<th>Sum.</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">PlayStation 4 1TB (Jet Black)</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$480.00</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">Nike Men Black Liteforce III Sneakers</a>
																	</td>
																	<td class="align-middle">2</td>
																	<td class="align-middle">$115.1</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">Wireless headphones</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$235.55</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">HERO ATHLETES BAG</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$160.00</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">POÄNG</a>
																	</td>
																	<td class="align-middle">3</td>
																	<td class="align-middle">$477.00</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">Apple iWatch (black)</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$399.00</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">WALKING 400 BLUE CAT3</a>
																	</td>
																	<td class="align-middle">2</td>
																	<td class="align-middle">$41.1</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">Wireless headphones</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$235.55</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">HERO ATHLETES BAG</a>
																	</td>
																	<td class="align-middle">1</td>
																	<td class="align-middle">$160.00</td>
																</tr>
																<tr>
																	<td class="align-middle">
																		<a href="javascript:" class="text-dark">POÄNG</a>
																	</td>
																	<td class="align-middle">3</td>
																	<td class="align-middle">$477.00</td>
																</tr>
															</tbody>
														</table>
													</div>
													<a href="javascript:"
														class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW
														MORE</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-5 margin-l">
							<div class="row bg-white " style="height: 20%;">
								<div class="bd" style="width: 100%;">
									<el-breadcrumb separator="/" style="margin-left: 20px;margin-top: 10px;">
										<el-breadcrumb-item :to="{ path: '/' }">快速开始</el-breadcrumb-item>
										<el-breadcrumb-item><a href="/">便捷导航</a></el-breadcrumb-item>
									</el-breadcrumb>
								</div>

								<div style="margin-top: 10px;">
									<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"
										@close="handleClose(tag)">
										{{tag}}
									</el-tag>
									<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput"
										size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
									</el-input>
									<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
								</div>
							</div>



							<div class="row bg-white " style="margin-top: 20px;">
								<div class="bd" style="width: 100%;">
									<p style="margin-left: 20px;margin-top: 10px;">XX指数</p>
								</div>
								<div style="width: 100%;overflow: hidden;">
									<div class="card">
										<div class="card-body">
											<div id="chart" style="height: 300px"></div>
											
										</div>
									</div>
								</div>
							</div>
							<div class="row bg-white " style="margin-top: 20px;">
								<div class="bd" style="width: 100%;">
									<p style="margin-left: 20px;margin-top: 10px;">团队</p>
								</div>
								<div class="col-sm-12">
									<div class="d-flex w-100 mb-4">
										<div class="row no-gutters row-bordered row-border-light h-100">
											<!-- <div class="d-flex col-sm-6 col-md-4 col-lg-4 align-items-center"> -->

											<div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
												<div class="card-body media align-items-center text-dark">
													<i class="lnr lnr-license display-4 d-block text-primary"></i>
													<span class="media-body d-block ml-3">
														<i class="el-icon-star-off"></i>
														<small>XX分队</small>
													</span>
												</div>
											</div>
											<div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
												<div class="card-body media align-items-center text-dark">
													<i class="lnr lnr-license display-4 d-block text-primary"></i>
													<span class="media-body d-block ml-3">
														<i class="el-icon-star-off"></i>
														<small>XX分队</small>
													</span>
												</div>
											</div>
											<div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
												<div class="card-body media align-items-center text-dark">
													<i class="lnr lnr-license display-4 d-block text-primary"></i>
													<span class="media-body d-block ml-3">
														<i class="el-icon-star-off"></i>
														<small>XX分队</small>
													</span>
												</div>
											</div>
											<div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">
												<div class="card-body media align-items-center text-dark">
													<i class="lnr lnr-license display-4 d-block text-primary"></i>
													<span class="media-body d-block ml-3">
														<i class="el-icon-star-off"></i>
														<small>XX分队</small>
													</span>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- [ content ] End -->

					<!-- [ Layout footer ] Start -->
					<nav class="layout-footer footer bg-white">
						<div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
							<div class="pt-3">
								<span class="footer-text font-weight-semibold">&copy; <a href="https://srthemesvilla.com"
										class="footer-link" target="_blank">Copyright</a></span>
							</div>
							<div>
								<a href="javascript:" class="footer-link pt-3">About Us</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Help</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Contact</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Terms &amp; Conditions</a>
							</div>
						</div>
					</nav>
					<!-- [ Layout footer ] End -->


				</div>
				<!-- [ Layout content ] End -->

			</div>
			<!-- layout-container End-->
		</div>
	</div>
	<!-- [ Layout wrapper] End -->
</template>
<script>
	export default {
		data() {
			return {
				imgSrc: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2344451607,2404623174&fm=111&gp=0.jpg',
				name: 'Maria',
				greetings: '早安',
				itemNumber: 56,
				ranking: 5,
				rankingAll: 50,
				projectVisits: 2223,
				activeName: 'first',
				dynamicTags: ['标签一', '标签二', '标签三'],
				inputVisible: false,
				inputValue: '',

				// chartData: [
				// 	{ value: 45, name: 'Item1' },
				// 	{ value: 75, name: 'Item2' },
				// ]

			}
		},

		mounted() {
			this.initEcharts();
		},

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},

			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},




			initEcharts() {
				var echarts = require('echarts');
				// 基于准备好的dom，初始化echarts实例
				var myChart = echarts.init(document.getElementById('chart'));
				// 绘制图表
				myChart.setOption({

					//图例组件
					legend: {
						icon: 'circle',
						show: true,
						bottom: '3%',
						right: '40%',
						data: ['Item1'],
						orient: 'horizontal',
						selectedMode: false,

					},

					title: {
						text: 'Item1',
						show: true,
						x: 'center',
						y: 'center'
					},

					series: [
						// 底层饼图
						{
							type: 'pie',
							data: [{
								name: 'item',
								value: 100,
								itemStyle: {
									color: '#E1E8EE'
								}
							}],
							label: {
								show: false,
							},
							labelLine: {
								show: false,
							},
							radius: ['53%', '75%'],
							center: ['50%', '50%'],
							height: "90%",
							top: -10,
							hoverAnimation: false,
							startAngle: 225,

						},
						// 上层饼图
						{
							type: 'pie',
							data: [{
								name: 'Item1',
								value: 40,
								itemStyle: {
									color: 'rgba(94, 207, 78, 1)'
								},
								label: {
									normal: {
										position: 'center',
										formatter: '{d}%',
										textStyle: {
											fontSize: 30,
											fontWeight: 'normal',
											color: '#34374E'
										}
									}
								}
							},

							{
								name: 'Item2',
								value: 60,
								itemStyle: {
									color: 'rgba(0, 0, 0, 0)'
								},
								label: {
									show: false,
								}
							}],

							labelLine: {
								show: false,
							},
							radius: ['53%', '75%'],
							center: ['50%', '50%'],
							height: "90%",
							top: -10,
							hoverAnimation: false,
							startAngle: 90,

						}
					]
				});
			}

		}


	}

</script>

<style lang='scss' scoped>
	/* <!-- Core stylesheets -->  */
	@import '../assets/css/bootstrap-material.scss';
	@import '../assets/css/shreerang-material.scss';
	@import '../assets/css/uikit.scss';
	@import '../assets/css/Hello.scss';
</style>