/*
 * @Author: your name
 * @Date: 2021-11-02 10:12:41
 * @LastEditTime: 2021-11-02 10:16:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\components\customBpmn\index.js
 */
import inherits from "inherits";

import Modeler from "bpmn-js/lib/Modeler";

import CustomModule from "./custom";

function CustomModeler(options) {
  Modeler.call(this, options);

  this._customElements = [];
}

inherits(CustomModeler, Modeler);

CustomModeler.prototype._modules = [].concat(CustomModeler.prototype._modules, [
  CustomModule
]);

export { CustomModeler };