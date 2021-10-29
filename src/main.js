/*
 * @Author: your name
 * @Date: 2021-10-29 16:30:19
 * @LastEditTime: 2021-10-29 16:38:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
