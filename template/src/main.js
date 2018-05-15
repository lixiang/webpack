{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
import store from './store'
import Api from './utils/http'
import './styles/index.scss'

FastClick.attach(document.body)

Api()

// 返回
Vue.prototype.back = (route) => {
  route.animate = 2 //eslint-disable-line
  history.go(-1)
}

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug
Vue.config.devtools = debug
Vue.config.productionTip = debug

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
