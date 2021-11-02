/*
 * @Author: your name
 * @Date: 2021-11-02 10:13:48
 * @LastEditTime: 2021-11-02 10:13:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\components\customBpmn\custom\index.js
 */
import CustomPalette from "./CustomPalette";

export default {
  __init__: ["paletteProvider"],
  paletteProvider: ["type", CustomPalette],
};