<template>
    <div class="tdt-map">
        <e-vue-esrimapjs :mapType="'tdt'" :mapUrl="['vec', 'cva']" :submapUrl="[['img', 'cia'], ['ter', 'cta']]" :geoUrl="'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'" :initExtent="initExtent" :gisApiUrl="'http://js.arcgis.com/3.23/'" v-on:mapReady="onMapReady($event)">
        </e-vue-esrimapjs>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="45%">

            <e-vue-echartsjs style="width:100%; height:500px;" :options="options" v-on:ready="onEchartsReady($event)"></e-vue-echartsjs>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Bus from "../../bus.js";
var Color = require("color");
export default {
  name: "tdt-map",
  data() {
    return {
      initExtent: {
        xmax: 116.9029888900006,
        xmin: 116.04209077900009,
        ymax: 40.161018230000025,
        ymin: 39.885287565000056
      },
      mapConfig: {}, // 图层的配置项
      mapComponent: "",
      map: "",
      pointLayer: "", // 点图层
      pointTextLayer: "", // 点文字图层
      pointSymbol: "", // 自定义点的symbol
      dialogVisible: false,
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
    Bus.$on("val", data => {
      this.mapConfig = data;
      if (data.baseMapType === "tdt") {
        this.initSymbol();
        this.setTdtExtent(data.initExtent);
        this.showPointMap(this.mapConfig.data);
      }
    });
  },
  methods: {
    // 初始化地图
    onMapReady(event) {
      this.mapComponent = event;
      this.map = this.mapComponent.map;
      this.initLayer();
      this.initSymbol();
    },
    // 设置范围
    setTdtExtent(value) {
      const extent = {
        xmax: Number(value.xmax),
        xmin: Number(value.xmin),
        ymax: Number(value.ymax),
        ymin: Number(value.ymin)
      };
      this.mapComponent.setExtent(extent);
    },

    // 渲染点数据
    initLayer() {
      this.pointLayer = new this.mapComponent.GraphicsLayer(); // 初始化点图层
      this.pointLayer.on("mouse-over", evt => {
        // console.log(evt.graphic.attributes);
        this.map.setMapCursor("pointer");
        const attrs = evt.graphic.attributes,
          content = `<div style="padding: 10px;"><p><b>测站名称：</b>${
            attrs.stnm
          }</p><p><b>经度：</b>${attrs.lgtd}</p><p><b>纬度：</b>${
            attrs.lttd
          }</p><p><b>降雨量：</b>${
            attrs.p
          }</p><b>开始时间：</b></p><p><b>结束时间：</b></p></div>`;
        this.mapComponent.showMapInfoWindow({
          title: "雨量站信息",
          content: content,
          location: evt.graphic.geometry,
          width: "300"
        });
      });
      this.pointLayer.on("mouse-out", evt => {
        this.map.setMapCursor("auto");
        this.mapComponent.hideMapInfoWindow();
      });
      this.pointLayer.on("click", evt => {
        this.dialogVisible = true;
      });
      this.pointTextLayer = new this.mapComponent.GraphicsLayer(); // 初始化点文字图层
      this.map.addLayers([this.pointLayer, this.pointTextLayer]);
    },
    // 初始化symbol
    initSymbol() {
      if (this.mapConfig.pointType === "defined") {
        // 自定义点的symbol
        const color = Color(this.mapConfig.pointDefinedC);
        this.pointSymbol = this.mapComponent.SimpleMarkerSymbol({
          color: color.rgb().array(),
          size: this.mapConfig.pointSize,
          type: "esriSMS",
          style: "esriSMSCircle"
        });
      } else {
        this.pointSymbol = new this.mapComponent.PictureMarkerSymbol({
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1556593950&di=5bf14a7bf204f5d9ff68155a986ca505&src=http://pic33.photophoto.cn/20141222/0009021180366583_b.jpg",
          height: 16,
          width: 16,
          type: "esriPMS"
        });
      }
    },

    // 展示点的图层信息
    showPointMap(points) {
      this.pointLayer.clear();
      this.pointTextLayer.clear();
      points.forEach(point => {
        const rsPoint = new this.mapComponent.Point(
            point[this.mapConfig.fieldlgtd],
            point[this.mapConfig.fieldlttd],
            this.map.spatialReference
          ),
          rsGra = new this.mapComponent.Graphic(
            rsPoint,
            this.pointSymbol,
            point
          );
        const font = new this.mapComponent.Font({
            size: "12px",
            weight: this.mapComponent.Font.WEIGHT_BOLD
          }),
          color = new this.mapComponent.Color("#000"),
          symbol = new this.mapComponent.TextSymbol(
            `${point[this.mapConfig.fieldName]}: ${
              point[this.mapConfig.fieldVal]
            }${this.mapConfig.fieldUnit}`,
            font,
            color
          );
        symbol.setOffset(0, 15);
        const textGra = new this.mapComponent.Graphic(rsPoint, symbol, point);
        this.pointLayer.add(rsGra);
        this.pointTextLayer.add(textGra);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tdt-map {
  height: 100%;
}
</style>

