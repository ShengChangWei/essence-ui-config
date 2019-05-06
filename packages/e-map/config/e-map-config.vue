<template>
    <el-scrollbar style="height: 100%;">
        <div class="e-config">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="底图选择">
                    <el-radio-group v-model="form.baseMapType">
                        <el-radio label="tdt">天地图底图</el-radio>
                        <el-radio label="google">谷歌底图</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item class="pre-item" v-if="form.baseMapType === 'tdt'">
                    <div>地图初始范围</div>
                    <el-row>
                        <el-col :span="12">
                            xmax
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.initExtent.xmax"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            xmin
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.initExtent.xmin"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            ymax
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.initExtent.ymax"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            ymin
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.initExtent.ymin"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="pre-item" v-if="form.baseMapType === 'google'">
                    <div>地图初始范围</div>
                    <el-row>
                        <el-col :span="12">
                            xmax
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.googleInitExtent.xmax"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            xmin
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.googleInitExtent.xmin"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            ymax
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.googleInitExtent.ymax"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            ymin
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.googleInitExtent.ymin"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="渲染图层">
                    <el-checkbox-group v-model="form.dataType">
                        <el-checkbox label="point" name="type">点</el-checkbox>
                        <el-checkbox label="polyline" name="type">线</el-checkbox>
                        <el-checkbox label="polygon" name="type">面</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="点的类型">
                    <el-radio-group v-model="form.pointType">
                        <el-radio label="png">png</el-radio>
                        <el-radio label="defined">自定义</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item class="pre-item" v-if="form.pointType === 'png'">
                    <el-upload class="upload-demo" action="/assets" list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item class="pre-item" v-if="form.pointType === 'defined'">
                    <el-row>
                        <el-col :span="12">
                            图形尺寸
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.pointSize"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            图形颜色
                        </el-col>
                        <el-col :span="12">
                            <el-color-picker v-model="form.pointDefinedC"></el-color-picker>

                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="pre-item">
                    <div>地图映射关系</div>
                    <el-row>
                        <el-col :span="12">
                            字段
                        </el-col>
                        <el-col :span="12">
                            映射
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            映射名称
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.fieldName"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            展示数值
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.fieldVal"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            数值单位
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.fieldUnit"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            经度
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.fieldlgtd"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            纬度
                        </el-col>
                        <el-col :span="12">
                            <el-input size="mini" v-model="form.fieldlttd"></el-input>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="pre-item">
                    <div>弹出层Echarts配置</div>
                    <el-radio-group v-model="form.echartType">
                        <el-radio label="bar">柱状图</el-radio>
                        <el-radio label="line">折线图</el-radio>
                        <el-radio label="pie">饼状图</el-radio>
                    </el-radio-group>
                    <div v-if="form.echartType === 'bar' || form.echartType === 'line'">
                        <el-row>
                            <el-col :span="8">
                                字段
                            </el-col>
                            <el-col :span="8">
                                映射
                            </el-col>
                            <el-col :span="8">
                                文本
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                x轴
                            </el-col>
                            <el-col :span="8">
                                <el-input size="mini" v-model="form.echartForm.xCode"></el-input>
                            </el-col>
                            <el-col :span="8">
                                <el-input size="mini" v-model="form.echartForm.xText"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                y轴
                            </el-col>
                            <el-col :span="8">
                                <el-input size="mini" v-model="form.echartForm.yCode"></el-input>
                            </el-col>
                            <el-col :span="8">
                                <el-input size="mini" v-model="form.echartForm.yText"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                图例文本
                            </el-col>
                            <el-col :span="16">
                                <el-input size="mini" v-model="form.echartForm.legend"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                图表颜色
                            </el-col>
                            <el-col :span="16">
                                <el-color-picker v-model="form.echartForm.color"></el-color-picker>
                            </el-col>
                        </el-row>
                    </div>
                    <div v-if="form.echartType === 'pie'">
                        <el-row>
                            <el-col :span="8">
                               字段
                            </el-col>
                            <el-col :span="16">
                               <el-input size="mini" v-model="form.echartPie.pieCode"></el-input>
                            </el-col>
                        </el-row>
                         <el-row>
                            <el-col :span="8">
                               对应颜色
                            </el-col>
                            <el-col :span="16">
                               <el-input size="mini" v-model="form.echartPie.pieColor"></el-input>
                            </el-col>
                        </el-row>
                         <el-row>
                            <el-col :span="8">
                              图例文本
                            </el-col>
                            <el-col :span="16">
                               <el-input size="mini" v-model="form.echartPie.pieLegend"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-form-item>
                <el-form-item label="数据来源">
                    <el-select size="mini" v-model="form.dataSource">
                        <el-option label="静态数据" value="jtzy"></el-option>
                        <el-option label="API接口数据" value="api"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item class="pre-item">
                    <div class="pre">
                        <el-scrollbar style="height: 100%;">
                            <pre>{{form.data}}</pre>
                        </el-scrollbar>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">重新渲染</el-button>
                    <el-button @click="save">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-scrollbar>
</template>

<script>
import Bus from "../bus.js";
export default {
  name: "e-map-config",
  data() {
    return {
      form: {
        baseMapType: "tdt",
        initExtent: {
          xmax: 116.39029888900006,
          xmin: 116.04209077900009,
          ymax: 40.161018230000025,
          ymin: 39.885287565000056
        },
        googleInitExtent: {
          xmax: 12980277.986602597,
          xmin: 12934415.769631553,
          ymax: 4864627.423165954,
          ymin: 4841696.314680432
        },
        dataType: ["point"],
        pointType: "png",
        pointSize: 12,
        pointDefinedC: "#409EFF",
        fieldName: "stnm",
        fieldVal: "p",
        fieldUnit: "cm",
        fieldlgtd: "lgtd",
        fieldlttd: "lttd",
        dataSource: "jtzy",
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
        data: [
          {
            stcd: "10",
            stnm: "学院路",
            lgtd: 116.339431,
            lttd: 39.997986,
            level: null,
            p: 0.0
          },
          {
            stcd: "11",
            stnm: "马连洼",
            lgtd: 116.275306,
            lttd: 40.032217,
            level: null,
            p: 0.0
          },
          {
            stcd: "12",
            stnm: "永丰园",
            lgtd: 116.235831,
            lttd: 40.072961,
            level: null,
            p: 0.0
          },
          {
            stcd: "13",
            stnm: "香山干休所",
            lgtd: 116.198147,
            lttd: 39.982114,
            level: null,
            p: 0.0
          },
          {
            stcd: "14",
            stnm: "北太平庄",
            lgtd: 116.361869,
            lttd: 39.950819,
            level: null,
            p: 0.0
          },
          {
            stcd: "15",
            stnm: "万寿路",
            lgtd: 116.261983,
            lttd: 39.905028,
            level: null,
            p: 0.0
          },
          {
            stcd: "16",
            stnm: "西玉河",
            lgtd: 116.226094,
            lttd: 40.096881,
            level: null,
            p: 0.0
          },
          {
            stcd: "17",
            stnm: "五七水库",
            lgtd: 116.085631,
            lttd: 40.085131,
            level: null,
            p: 0.0
          },
          {
            stcd: "18",
            stnm: "百望山",
            lgtd: 116.256156,
            lttd: 40.038147,
            level: null,
            p: 0.0
          },
          {
            stcd: "19",
            stnm: "万泉庄",
            lgtd: 116.295947,
            lttd: 39.957767,
            level: null,
            p: 0.0
          },
          {
            stcd: "2",
            stnm: "上庄闸",
            lgtd: 116.208453,
            lttd: 40.101636,
            level: null,
            p: 0.0
          },
          {
            stcd: "20",
            stnm: "北坞村",
            lgtd: 116.251811,
            lttd: 39.975067,
            level: null,
            p: 0.0
          },
          {
            stcd: "21",
            stnm: "花园路",
            lgtd: 116.372419,
            lttd: 39.978317,
            level: null,
            p: 0.0
          },
          {
            stcd: "22",
            stnm: "八里庄",
            lgtd: 116.301492,
            lttd: 39.926958,
            level: null,
            p: 0.0
          },
          {
            stcd: "23",
            stnm: "香山街道",
            lgtd: 116.207231,
            lttd: 39.993672,
            level: null,
            p: 0.0
          },
          {
            stcd: "24",
            stnm: "田村绿化带",
            lgtd: 116.245958,
            lttd: 39.922767,
            level: null,
            p: 0.0
          },
          {
            stcd: "25",
            stnm: "北下关",
            lgtd: 116.338911,
            lttd: 39.958197,
            level: null,
            p: 0.0
          },
          {
            stcd: "26",
            stnm: "田村农业观光园",
            lgtd: 116.25,
            lttd: 39.936389,
            level: null,
            p: 0.0
          },
          {
            stcd: "3",
            stnm: "苏家坨",
            lgtd: 116.164178,
            lttd: 40.078311,
            level: null,
            p: 0.0
          },
          {
            stcd: "30",
            stnm: "金河闸水位站",
            lgtd: 116.274236,
            lttd: 39.972372,
            level: null,
            p: 0.0
          },
          {
            stcd: "31",
            stnm: "北钢闸水位站",
            lgtd: 116.327242,
            lttd: 40.014839,
            level: null,
            p: 0.0
          },
          {
            stcd: "32",
            stnm: "稻香湖桥水位站",
            lgtd: 116.154469,
            lttd: 40.096708,
            level: null,
            p: 0.0
          },
          {
            stcd: "33",
            stnm: "北长河水位站",
            lgtd: 116.231597,
            lttd: 39.997939,
            level: null,
            p: 0.0
          },
          {
            stcd: "34",
            stnm: "八一橡胶坝水位站",
            lgtd: 116.164736,
            lttd: 40.069161,
            level: null,
            p: 0.0
          },
          {
            stcd: "35",
            stnm: "清河",
            lgtd: 116.327778,
            lttd: 40.033889,
            level: null,
            p: 0.0
          },
          {
            stcd: "36",
            stnm: "永定路街道",
            lgtd: 116.254167,
            lttd: 39.907222,
            level: null,
            p: 0.0
          },
          {
            stcd: "37",
            stnm: "青龙桥街道",
            lgtd: 116.266389,
            lttd: 40.003889,
            level: null,
            p: 0.0
          },
          {
            stcd: "38",
            stnm: "中关村街道",
            lgtd: 116.311944,
            lttd: 39.976389,
            level: null,
            p: 0.0
          },
          {
            stcd: "39",
            stnm: "紫竹院街道",
            lgtd: 116.309444,
            lttd: 39.938056,
            level: null,
            p: 0.0
          },
          {
            stcd: "4",
            stnm: "上地",
            lgtd: 116.295481,
            lttd: 40.042136,
            level: null,
            p: 0.0
          },
          {
            stcd: "40",
            stnm: "羊坊店街道",
            lgtd: 116.330453,
            lttd: 39.908642,
            level: null,
            p: 0.0
          },
          {
            stcd: "5",
            stnm: "四季青",
            lgtd: 116.210339,
            lttd: 39.96825,
            level: null,
            p: 0.0
          },
          {
            stcd: "6",
            stnm: "锦绣大地",
            lgtd: 116.223561,
            lttd: 39.937296,
            level: null,
            p: 0.0
          },
          {
            stcd: "7",
            stnm: "西三旗",
            lgtd: 116.360831,
            lttd: 40.034339,
            level: null,
            p: 0.0
          },
          {
            stcd: "8",
            stnm: "甘家口",
            lgtd: 116.321386,
            lttd: 39.920728,
            level: null,
            p: 0.0
          },
          {
            stcd: "9",
            stnm: "温泉",
            lgtd: 116.187131,
            lttd: 40.028214,
            level: null,
            p: 0.0
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      Bus.$emit("val", this.form);
    },
    save() {
      this.$emit("save-config", this.form);
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style lang="scss" scoped>
.pre {
  height: 200px;
  background-color: #000;
  color: #fff;
}
</style>

<style lang="scss">
.pre-item {
  border-bottom: 1px solid #ccc;
  .el-form-item__content {
    padding-left: 10px;
    margin-left: 0 !important;
  }
}
</style>


