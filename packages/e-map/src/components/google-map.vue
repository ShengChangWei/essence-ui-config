<template>
    <e-vue-esrimapjs :mapType="'google'" :mapUrl="'m'" :submapUrl="['y', 'p']" :geoUrl="'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer'" :initExtent="initExtent" :gisApiUrl="'http://js.arcgis.com/3.23/'" v-on:mapReady="onMapReady($event)">
    </e-vue-esrimapjs>
</template>

<script>
import Bus from "../../bus.js";
var Color = require("color");
export default {
  name: "google-map",
  data() {
    return {
      initExtent: {
        xmax: 12980277.986602597,
        xmin: 12934415.769631553,
        ymax: 4864627.423165954,
        ymin: 4841696.314680432
      },
      mapComponent: "",
      map: "",
      pointLayer: "", // 点图层
      pointTextLayer: "", // 点文字图层
      pointSymbol: "", // 自定义点的symbol
      mapConfig: {} // 图层的配置项
    };
  },
  mounted() {
    Bus.$on("val", data => {
      //   console.log(data)
      this.mapConfig = data;
      if (data.baseMapType === "google") {
        this.initSymbol();
        this.setTdtExtent(data.googleInitExtent);
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
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1556593950&di=5bf14a7bf204f5d9ff68155a986ca505&src=http://pic33.photophoto.cn/20141222/0009021180366583_b.jpg',
            height: 16,
            width: 16,
            type: "esriPMS"
          })
      }
    },

    // 展示点的图层信息
    showPointMap(points) {
      this.pointLayer.clear();
      this.pointTextLayer.clear();
      points.forEach(point => {
        const [x, y] = this.mapComponent.WebMercatorUtils.lngLatToXY(
          point[this.mapConfig.fieldlgtd],
          point[this.mapConfig.fieldlttd]
        );

        const rsPoint = new this.mapComponent.Point(
            x,
            y,
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
</style>

