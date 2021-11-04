/*
 * @Author: your name
 * @Date: 2021-11-04 13:54:13
 * @LastEditTime: 2021-11-04 13:55:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-bpmn-process\src\components\customBpmn\CustomRenderer\util\index.js
 */
import iu from '../../../static/iu.png';

// 自定义元素的类型，此时我们只需要自定义一种节点，所以数组只有一个元素
const customElements = ['bpmn:Task']; 
const customConfig = {
  // 自定义元素的配置
  iu: {
    url: iu,
    attr: {x: 0, y: 0, width: 50, height: 50}
  }
};
 
export {customElements, customConfig};