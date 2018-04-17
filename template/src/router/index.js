import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.animate = 0

/**
 * Asynchronously load view
 * @subdir {string} 二级目录
 * @name  {string} vue文件名
 */
function load (subdir, name) {
  const nName = name || subdir
  return resolve => require([`../views/${subdir}/${nName}.vue`], resolve) // eslint-disable-line
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('home')
    },
    {
      path: '/login',
      name: 'login',
      component: load('login'),
      meta: {
        slide: 1
      }
    }
  ]
})
