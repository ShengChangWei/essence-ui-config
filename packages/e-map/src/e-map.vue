<template>
  <div class="map">
    <component :is="mapConfig.baseMapType">
    </component>
  </div>

</template>

<script>
var Color = require("color");
import tdt from "./components/tdt-map.vue";
import google from "./components/google-map.vue";
import Bus from "../bus.js";
export default {
  name: "e-map",
  components: {
    tdt,
    google
  },
  data() {
    return {
      // isComponet: "tdt-map",
      // newInitExtent: {
      //   xmax: 116.9029888900006,
      //   xmin: 116.04209077900009,
      //   ymax: 40.161018230000025,
      //   ymin: 39.885287565000056
      // },
      // googleInitExtent: {
      //   xmax: 12980277.986602597,
      //   xmin: 12934415.769631553,
      //   ymax: 4864627.423165954,
      //   ymin: 4841696.314680432
      // },
      // tdtMapComponent: "",
      // tdtMap: "",
      // googleMapComponent: "",
      // googleMap: "",
      // pointLayer: "",
      // pointTextLayer: "",
      // pointSymbol: "", //点的symbol
      mapConfig: {
        baseMapType: "tdt"
      }
      // pointData: this.config.data
    };
  },
  mounted() {
    Bus.$on("val", config => {
      this.mapConfig = config;
      
    });
  },
  created() {}

  // methods: {
  //   onTdtMapReady(event) {
  //     this.tdtMapComponent = event;
  //     this.map = this.tdtMapComponent.map;
  //     this.pointLayer = new this.tdtMapComponent.GraphicsLayer(); // 初始化点图层
  //     this.pointTextLayer = new this.tdtMapComponent.GraphicsLayer(); // 初始化点文字图层
  //     this.map.addLayers([this.pointLayer, this.pointTextLayer]);
  //     this.initSymbol();
  //     this.showMapLayer();
  //   },
  //   onGoogleMapReady(event) {
  //     this.googleMapComponent = event;
  //     this.googleMap = this.googleMapComponent.map;
  //     this.pointLayer = new this.googleMapComponent.GraphicsLayer(); // 初始化点图层
  //     this.pointTextLayer = new this.googleMapComponent.GraphicsLayer(); // 初始化点文字图层
  //     this.googleMap.addLayers([this.pointLayer, this.pointTextLayer]);
  //   },

  //   // 设置底图初始范围
  //   setBaseInExtent(config) {
  //     if (config.baseMapType === "tdt") {
  //       const extent = {
  //         xmax: Number(config.initExtent.xmax),
  //         xmin: Number(config.initExtent.xmin),
  //         ymax: Number(config.initExtent.ymax),
  //         ymin: Number(config.initExtent.ymin)
  //       };
  //       this.tdtMapComponent.setExtent(extent);
  //     } else {
  //       const extent = {
  //         xmax: Number(config.googleInitExtent.xmax),
  //         xmin: Number(config.googleInitExtent.xmin),
  //         ymax: Number(config.googleInitExtent.ymax),
  //         ymin: Number(config.googleInitExtent.ymin)
  //       };
  //       this.googleMapComponent.setExtent(extent);
  //     }
  //   },

  //   // 初始化图层信息，并添加鼠标悬停事件
  //   initTdtLayers() {
  //     // this.googleMap.addLayers([this.pointLayer, this.pointTextLayer]);
  //   },

  //   initSymbol() {
  //     const color = Color(this.mapConfig.pointDefinedC);
  //     this.pointSymbol = this.tdtMapComponent.SimpleMarkerSymbol({
  //       // 初始化点符号
  //       color: color.rgb().array(),
  //       size: this.mapConfig.pointDefinedW,
  //       type: "esriSMS",
  //       style: "esriSMSCircle"
  //     });
  //     // this._config.pointType === "ionic"
  //     //   ? new this.mapComponent.PictureMarkerSymbol({
  //     //       url: this.url,
  //     //       height: 16,
  //     //       width: 16,
  //     //       type: "esriPMS"
  //     //     })
  //     //   : this.mapComponent.SimpleMarkerSymbol({
  //     //       // 初始化点符号
  //     //       color: [223,221,222, 225],
  //     //       size: 12,
  //     //       type: "esriSMS",
  //     //       style: "esriSMSCircle"
  //     //     });
  //   },

  //   // 渲染图标或颜色
  //   showMapLayer() {
  //     this.pointLayer.clear();
  //     this.pointTextLayer.clear();

  //     this.mapConfig.data.forEach(point => {
  //       // if (this.mapConfig.baseMapType === "google") {
  //       //   [
  //       //     point.lgtd,
  //       //     point.lttd
  //       //   ] = this.tdtMapComponent.WebMercatorUtils.lngLatToXY(
  //       //     point.lgtd,
  //       //     point.lttd
  //       //   );
  //       // }
  //       const rsPoint = new this.tdtMapComponent.Point(
  //           point.lgtd,
  //           point.lttd,
  //           this.map.spatialReference
  //         ),
  //         rsGra = new this.tdtMapComponent.Graphic(
  //           rsPoint,
  //           this.pointSymbol,
  //           point
  //         );
  //       const font = new this.tdtMapComponent.Font({
  //           size: "12px",
  //           weight: this.tdtMapComponent.Font.WEIGHT_BOLD
  //         }),
  //         color = new this.tdtMapComponent.Color("#000"),
  //         symbol = new this.tdtMapComponent.TextSymbol(
  //           `${point.stnm}: ${point.p}mm`,
  //           font,
  //           color
  //         );
  //       const textGra = new this.tdtMapComponent.Graphic(
  //         rsPoint,
  //         symbol,
  //         point
  //       );
  //       this.pointLayer.add(rsGra);
  //       this.pointTextLayer.add(textGra);
  //     });
  //   }
  // }
  // watch: {
  //   "$store.state.eMapConfig": {
  //     handler(val, oldName) {
  //       console.log(val);
  //       console.log(this.mapComponent);
  //       console.log(this.googleMapComponent);
  //       this.baseMapType = val;
  //     },
  //     immediate: true
  //   },
  //   "$store.state.initExtent": {
  //     handler(val) {
  //       this.mapComponent.setExtent({
  //         xmax: Number(val.xmax),
  //         xmin: Number(val.xmin),
  //         ymax: Number(val.ymax),
  //         ymin: Number(val.ymin)
  //       });
  //     },
  //     deep: true
  //   },
  //   "$store.state.googleInitExtent": {
  //     handler(val) {
  //       this.googleMapComponent.setExtent({
  //         xmax: Number(val.xmax),
  //         xmin: Number(val.xmin),
  //         ymax: Number(val.ymax),
  //         ymin: Number(val.ymin)
  //       });
  //     },

  //     deep: true
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  .map-content {
    height: 100%;
  }
}
.e-vue-esrimapjs {
  height: 100%;
}
</style>

