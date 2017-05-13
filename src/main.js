// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from 'vuex'
// Vue扩展方法
import VueExtended from './javascript/util/vue.extended'
// ECMASCRIPT扩展方法
import './javascript/util/system.extended'
import './javascript/rem'

// scss样式加载
import './scss/index.scss'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueExtended)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
// 测试系统类库扩展
console.log(new Date().dateFormart('yyyy-MM-dd'))
