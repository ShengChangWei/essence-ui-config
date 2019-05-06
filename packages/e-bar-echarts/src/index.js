import EBarEcharts from './e-bar-echarts.vue'


EBarEcharts.install = function(vue) {
    Vue.component(EBarEcharts.name, EBarEcharts)
}

export default EBarEcharts;