<template>
  <e-vue-echartsjs style="width: 100%; height: 100%;" :options="options" v-on:ready="onEchartsReady($event)"></e-vue-echartsjs>
</template>

<script>
export default {
  name: "e-bar-echarts",
  data() {
    return {
      options: {
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销"]
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "bar",

            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      },
      echechartsIntance: ""
    };
  },
  mounted() {
    window.onresize = () => {
      this.echechartsIntance.resize();
    };
  },
  methods: {
    onEchartsReady(event) {
      this.echechartsIntance = event.echartsIntance;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

