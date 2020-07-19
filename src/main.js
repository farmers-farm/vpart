/*
 * @Autor: wupup
 * @Description: 
 * @Date: 2020-06-24 12:07:00
 * @LastEditors: wupup
 * @LastEditTime: 2020-07-19 20:06:06
 * @FilePath: \vpart\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
