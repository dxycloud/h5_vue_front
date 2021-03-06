// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import config from './utils/config'

router.beforeEach((to, from, next) => {
  if(to.path == '/panel' && from.path == '/') {
    if(!config.token) {
      router.replace('/', (_) => {
        alert('无权访问');
      })
    };
  }
  next();
})
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
