/*
 * @Author: your name
 * @Date: 2021-11-02 10:12:59
 * @LastEditTime: 2021-11-04 14:07:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\components\customBpmn\custom\CustomPalette.js
 */
import { assign } from "min-dash";

export default function PaletteProvider(
  palette,
  create,
  elementFactory,
  handTool,
  lassoTool,
  spaceTool,
  globalConnect,
  translate
) {
  this.create = create;
  this.elementFactory = elementFactory;
  this.handTool = handTool;
  this.lassoTool = lassoTool;
  this.spaceTool = spaceTool;
  this.globalConnect = globalConnect;
  this.translate = translate;

  palette.registerProvider(this);
}

PaletteProvider.$inject = [
  "palette",
  "create",
  "elementFactory",
  "handTool",
  "lassoTool",
  "spaceTool",
  "globalConnect",
  "translate"
];

PaletteProvider.prototype.getPaletteEntries = function (element) {
  const {
    create,
    elementFactory,
    handTool,
    lassoTool,
    spaceTool,
    globalConnect,
    translate
  } = this;

  function createAction(type, group, className, title, options) {
    function createListener(event) {
      var shape = elementFactory.createShape(assign({ type: type }, options));

      if (options) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }

      create.start(event, shape);
    }

    var shortType = type.replace(/^bpmn:/, "");

    return {
      group: group,
      className: className,
      title: title || translate("Create {type}", { type: shortType }),
      action: {
        dragstart: createListener,
        click: createListener
      }
    };
  }

  return {
    "lasso-tool": {
      group: "tools",
      className: "bpmn-icon-lasso-tool",
      title: "Activate the lasso tool",
      action: {
        click: function (event) {
          lassoTool.activateSelection(event);
        }
      }
    },

    "tool-separator": {
      group: "tools",
      separator: true
    },
    
    "create.iu": createAction(
      "bpmn:Task",
      "event",
      "icon-custom bpmn-icon-iu",
      "??????iu??????"
    ),

    "create.start-event": createAction(
      "bpmn:StartEvent",
      "event",
      "bpmn-icon-start-event-none",
      "??????????????????"
    ),
    "create.end-event": createAction(
      "bpmn:EndEvent",
      "event",
      "bpmn-icon-end-event-none",
      "??????????????????"
    ),
    "create.user-task": createAction(
      "bpmn:UserTask",
      "activity",
      "bpmn-icon-user-task",
      "??????????????????"
    ),
    "create.exclusive-gateway": createAction(
      "bpmn:ExclusiveGateway",
      "gateway",
      "bpmn-icon-gateway-xor",
      "??????????????????"
    )
  };
};