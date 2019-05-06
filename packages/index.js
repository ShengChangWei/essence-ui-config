
import EBarEcharts from './e-bar-echarts/src/index.js'
import EBarEchartsConfig from './e-bar-echarts/config/config.js'
import EMap from './e-map/src/index'
import EMapConfig from './e-map/config/config'

const components = [
    EBarEcharts,
    EBarEchartsConfig,
    EMap,
    EMapConfig
];

const install = function (Vue) {
    if (install['installed']) return;
    components.map(component => Vue.component(component.name, component))
}

// 判断是否直接引入

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    EBarEcharts,
    EBarEchartsConfig,
    EMap,
    EMapConfig
}