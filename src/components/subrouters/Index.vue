<!-- -->
<template>
  <!-- [ content ] Start -->
  <div class="container-fluid flex-grow-1 container-p-y flex-d-row">
    <div class="col-lg-7">
      <div class="row bg-white">
        <el-tabs v-model="activeName">
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
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
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
</template>

<script>
  export default {
    name: 'v-index',
    data() {
      return {
        activeName: 'first',
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
      }
    },

    mounted() {
      this.initEcharts();
    },
    methods: {

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
      },


    },
  }
</script>

<style scoped>

</style>
