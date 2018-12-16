import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import './assets/css/common.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false
router.afterEach(route => {
  const title = (route.meta && route.meta.title) || '激励众包'
  document.title = `激励众包-${title}`
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
