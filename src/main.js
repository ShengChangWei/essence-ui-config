import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import essenceUI from './../packages/index.js'
// import './plugins/element.js'
import EVueEchartsjs from 'e-vue-echartsjs'
import EVueEsrimapjs from 'e-vue-esrimapjs'
import Element from 'element-ui'
import './element-variables.scss'
import 'font-awesome/css/font-awesome.css';


Vue.use(Element)
Vue.use(EVueEchartsjs)
Vue.use(EVueEsrimapjs)
Vue.use(essenceUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
