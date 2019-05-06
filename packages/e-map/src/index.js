import EMap from './e-map.vue'


EMap.install = function (vue) {
    Vue.component(EBarEcharts.name, EMap)
}

export default EMap;