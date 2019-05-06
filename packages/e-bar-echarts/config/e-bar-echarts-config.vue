<template>
    <div  class="config">
         <h5 class="config-title">柱状图</h5>
         <div class="config-dataSource">
             <h5>数据源配置</h5>
             <div class="config-dataSource-content">
                 <select name="dataSource" id=""  v-model="echartsData.source">
                     <option v-for="(item) in dataSource.source" :key="item.id" :value="item.id">{{item.name}}</option>
                 </select>
             </div>
        </div>
        <div class="config-dataSource">
             <h5>接口选择</h5>
             <div class="config-dataSource-content">
                 <select name="dataInterface" id=""  v-model="echartsData.interface">
                     <option v-for="(item) in dataSource.interface" :key="item.id" :value="item.id">{{item.name}}</option>
                 </select>
             </div>
        </div>
        <div class="config-json">
            <el-scrollbar style="height: 100%;">
                <pre>{{data}}</pre>
            </el-scrollbar>

            
        </div>
        <div class="config-params">
            <h5>柱状图参数</h5>
            <div class="config-params-content">
                <table>
                <tr>
                    <th class="w20">字段</th>
                    <th class="w40">参数</th>
                    <th class="w40">中文名称</th>
                </tr>
                <tr>
                    <td>
                       x轴
                    </td>
                    <td>
                        <input type="text" v-model="echartsData.x">
                    </td>
                    <td>
                        <input type="text" v-model="echartsData.xZ">
                    </td>
                </tr>
                <tr>
                    <td>
                       y轴
                    </td>
                    <td>
                      <input type="text" v-model="echartsData.y">
                    </td>
                    <td>
                        <input type="text" v-model="echartsData.yZ">
                    </td>
                </tr>
            </table>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
  name: "e-bar-echarts-config",
  props: {
    dataSource: {
      type: Object,
      default: function() {
        return {
          x: "",
          y: "",
          xZ: "",
          yZ: "",
          source: [],
          interface: []
        };
      }
    }
  },
  data() {
    return {
      echartsData: {
        x: this.dataSource.x,
        y: this.dataSource.y,
        xZ: "",
        yZ: "",
        source: "233",
        interface: "233"
      },
      data: [
        { x: "2010/02/01 00:00:00", y: "175", s: "1" },
        { x: "2010/02/10 00:00:00", y: "200", s: "1" },
        { x: "2010/03/01 00:00:00", y: "125", s: "1" },
        { x: "2010/03/20 00:00:00", y: "190", s: "1" },
        { x: "2010/04/01 00:00:00", y: "190", s: "2" },
        { x: "2010/04/21 00:00:00", y: "240", s: "2" },
        { x: "2010/04/30 00:00:00", y: "225", s: "2" },
        { x: "2010/05/09 00:00:00", y: "150", s: "2" },
        { x: "2010/05/31 00:00:00", y: "230", s: "2" },
        { x: "2010/06/11 00:00:00", y: "190", s: "2" },
        { x: "2010/06/30 00:00:00", y: "275", s: "3" },
        { x: "2010/07/15 00:00:00", y: "300", s: "3" },
        { x: "2010/07/21 00:00:00", y: "375", s: "3" },
        { x: "2010/08/15 00:00:00", y: "290", s: "3" },
        { x: "2010/09/01 00:00:00", y: "190", s: "3" },
        { x: "2010/09/10 00:00:00", y: "230", s: "3" },
        { x: "2010/10/29 00:00:00", y: "325", s: "3" },
        { x: "2010/11/22 00:00:00", y: "390", s: "3" },
        { x: "2010/11/30 00:00:00", y: "290", s: "3" },
        { x: "2010/12/25 00:00:00", y: "330", s: "3" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.config {
  width: 300px;
  // height: 600px;
  color: #fff;
  background-color: #1c1f25;
  padding: 5px;

  .config-title {
    padding: 10px 0;
  }

  h5 {
    padding: 0;
    margin: 0;
  }

  .config-params {
    width: 100%;
    > h5 {
      padding: 10px 0;
      border-top: 1px solid #282f3a;
      border-bottom: 1px solid #282f3a;
    }

    .config-params-content {
      padding: 10px 0;
      table {
        width: 100%;
        font-size: 14px;
        text-align: center;

        th {
          text-align: center;

          &.w20 {
            width: 20%;
          }
          &.w40 {
            width: 40%;
          }
        }

        td {
          padding: 5px;
        }

        input,
        select {
          width: 100%;
          background-color: #282f3a;
          color: #fff;
        }
        input {
          padding: 2px 0;
        }
        select {
          height: 26px;
          padding: 1px;
        }
      }
    }
  }
  .config-json {
    height: 200px;
    pre {
      background-color: #000;
      color: #fff;
    }
  }
  .config-dataSource {
    width: 100%;
    > h5 {
      padding: 10px 0;
      border-top: 1px solid #282f3a;
      border-bottom: 1px solid #282f3a;
    }
    .config-dataSource-content {
      padding: 10px 0;
      select {
        width: 100%;
        background-color: #282f3a;
        padding: 2px;
        color: #fff;
      }
    }
  }
}
</style>
