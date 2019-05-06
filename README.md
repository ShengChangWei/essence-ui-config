# essence-ui-config

## 北京艾森思EDOP配置组件库

### 组件列表

- e-map
- e-bar-echarts
- e-line-echarts
- e-table

### e-map

##### 1、实现功能

- [x] 天地图，谷歌底图选择
- [x] 地图范围的设置
- [ ] 点、线、面渲染（包括点的颜色、图标，线的颜色，粗细、面颜色）
- [ ] 鼠标悬停样式效果
- [ ] 鼠标点击内容渲染（暂定echarts图标渲染）

##### 2、输入属性

```javascript
{
   baseMapType: 'tdt', // tdt(天地图底图)、 google(谷歌底图)
   initExtent： { // 底图的初始范围
      xmax: 116.9029888900006,
      xmin: 116.04209077900009,
      ymax: 40.161018230000025,
      ymin: 39.885287565000056
   },
   dataType: ['point','polyline','polygon'],// point 点 polyline 线 polygon面 渲染图层类型
   data: [],
   pointType: 'png', // png、defined 图片和自定义
   pointDefinedH: '12px', // 自定义图形的高
   pointDefinedW: '12px',
   fieldName: 'statinName', // 展示站点名称字段 string
   fieldVal: 'p', // 展示数值降雨量
   fieldUnit: 'mm', //展示数值单位 毫米
   pointlgtd: 'lgtd', // 点的经度
   pointlttd: 'lttd', // 点的纬度
  echartType: "bar", // bar line pie
        echartForm: {
            xCode: '',
            yCode: '',
            xText: '',
            yText: '',
            legend: '',
            color: '',
        },
        echartPie: {
            pieCode: '',
            pieColor: '',
            pieLegend: ''
        },
}

```