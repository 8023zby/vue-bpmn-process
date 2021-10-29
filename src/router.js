/*
 * @Author: your name
 * @Date: 2021-10-29 16:30:19
 * @LastEditTime: 2021-10-29 16:35:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\router.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Bpmn from './views/bpmn-modeler.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '编辑模式',
      component: Bpmn
    }
  ]
})
