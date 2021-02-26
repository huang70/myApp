<template>
  <div>

    <div id="chart2" class="chart2"></div>
    <div id="chart3" class="chart2"></div>

  </div>
</template>
<script>

  export default {
    name: 'Home',
    data() {
      return {
        // echart: require("echarts"),

        data: {
          x: ['MON', 'TUS', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
          rain: [8, 8, 12, 3, 9, 11, 1],
          tmp: [12, 13, 9.7, 10, 23, 14, 23],
          winds: [3, 2.8, 5, 6.8, 8, 7, 10],
          pre: [600, 500, 700, 500, 600, 700, 650]
        },
        colors: ['#4BC946', '#FDA975', '#27D3E2', '#FF0014'],



        mapData: [{
          name: "南海诸岛",
          value: 0
        },
        {
          name: '北京',
          value: 54
        },
        {
          name: '天津',
          value: 13
        },
        {
          name: '上海',
          value: 40
        },
        {
          name: '重庆',
          value: 75
        },
        {
          name: '河北',
          value: 13
        },
        {
          name: '河南',
          value: 83
        },
        {
          name: '云南',
          value: 11
        },
        {
          name: '辽宁',
          value: 19
        },
        {
          name: '黑龙江',
          value: 15
        },
        {
          name: '湖南',
          value: 69
        },
        {
          name: '安徽',
          value: 60
        },
        {
          name: '山东',
          value: 39
        },
        {
          name: '新疆',
          value: 4
        },
        {
          name: '江苏',
          value: 31
        },
        {
          name: '浙江',
          value: 104
        },
        {
          name: '江西',
          value: 36
        },
        {
          name: '湖北',
          value: 1052
        },
        {
          name: '广西',
          value: 33
        },
        {
          name: '甘肃',
          value: 7
        },
        {
          name: '山西',
          value: 9
        },
        {
          name: '内蒙古',
          value: 7
        },
        {
          name: '陕西',
          value: 22
        },
        {
          name: '吉林',
          value: 4
        },
        {
          name: '福建',
          value: 18
        },
        {
          name: '贵州',
          value: 5
        },
        {
          name: '广东',
          value: 98
        },
        {
          name: '青海',
          value: 1
        },
        {
          name: '西藏',
          value: 0
        },
        {
          name: '四川',
          value: 44
        },
        {
          name: '宁夏',
          value: 4
        },
        {
          name: '海南',
          value: 22
        },
        {
          name: '台湾',
          value: 3
        },
        {
          name: '香港',
          value: 5
        },
        {
          name: '澳门',
          value: 5
        }
        ]
      }
    },
    mounted() {
      this.initchart2();
      this.initchart3();
    },
    methods: {
      initchart2() {

        var myChart2 = this.$echarts.init(document.getElementById('chart2'));

        var option = {
          color: this.colors,

          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },
          legend: {

          },
          xAxis: {
            data: this.data.x,
            axisTick: {
              show: false
            },
            axisLine: {
              show: true
            }
          },
          yAxis: [{
            type: 'value',
            position: 'left',
            splitLine: {
              show: false
            }

          }, {
            type: 'value',
            position: 'left',
            offset: 30,
            splitLine: {
              show: false
            }
          }, {
            // name: '风速(m/s)',
            type: 'value',
            position: 'right',
            min: this.calMin(this.data.winds),
            max: this.calMax(this.data.winds),
            splitLine: { show: false },
            // axisLine: { show: false },
            axisLabel: {
              // formatter: '{value}m/s',
              formatter: function (value, index) {
                return parseInt(value) + 'm/s';
              },
              textStyle: {
                color: this.colors[3], fontSize: 14
              }
            },
            axisTick: { show: false }
          }
          ],

          series: [{
            name: '雨量',
            type: 'bar',
            data: this.data.rain,
            yAxisIndex: 0

          }, {
            name: '温度',
            type: 'line',
            data: this.data.tmp,
            yAxisIndex: 1,
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: this.colors[1] // 0% 处的颜色
                }, {
                  offset: 1, color: 'white' // 100% 处的颜色
                }],

              }
            }
          }, {
            name: '风速',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            yAxisIndex: 2,
            data: this.data.winds
          }
          ]

        };

        myChart2.setOption(option);
      },
      //计算最大值
      calMax(arr) {
        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);
        let interval = (max - min) / 5; // 平均值
        max = Math.ceil(max + interval); // 向上取整
        console.log(min, max, interval);
        return max;
      },

      //计算最小值
      calMin(arr) {
        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);
        let interval = (max - min) / 5; // 平均值
        min = min === 0 ? min : Math.floor(min - interval); // 向下取整
        // console.log(min, max, interval);
        return min;
      },

      initchart3() {

        var myChart3 = this.$echarts.init(document.getElementById('chart3'));
        let option3 = {
          tooltip: {
            triggerOn: "click",
            formatter: function (e) {
              return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
            }
          },
          visualMap: {
            type: 'piecewise',
            // min: 0,
            // max: 1000,
            left: 26,
            bottom: 100,
            showLabel: !0,
            text: ["高", "低"],
            pieces: [{
              gt: 100,
              label: "> 100 人",
              color: "#7f1100"
            }, {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428"
            }, {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71"
            }, {
              gt: 0,
              lt: 1,
              label: "疑似",
              color: "#ffd768"
            }, {
              value: 0,
              color: "#ffffff"
            }],
            show: !0
          },
          geo: {
            map: "china",
            roam: true,
            scaleLimit: {
              min: 1,
              max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
              normal: {
                show: false,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
              }
            },
            itemStyle: {
              normal: {
                // shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                // borderColor: "rgba(0, 0, 0, 0.2)"
              },
              //鼠标经过时高亮区域的设置
              emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                borderWidth: 0
              }
            }
          },
          series: [{
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: this.mapData
          }]
        };

        myChart3.setOption(option3);
      }

    }
  }
</script>
<style lang="scss" scoped>
  .chart2 {
    width: 600px;
    height: 600px;
  }

</style>
