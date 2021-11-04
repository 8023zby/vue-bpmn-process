/*
 * @Author: your name
 * @Date: 2021-11-02 10:13:48
 * @LastEditTime: 2021-11-04 14:08:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\components\customBpmn\custom\index.js
 */
import CustomPalette from "./CustomPalette";
import CustomRenderer from '../CustomRenderer/CustomRenderer.js';

export default {
  __init__: ["paletteProvider", "customRenderer"],
  paletteProvider: ["type", CustomPalette],
  customRenderer: ['type', CustomRenderer]
};