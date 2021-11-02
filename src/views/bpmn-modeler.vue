<!--
 * @Author: your name
 * @Date: 2021-10-29 16:30:19
 * @LastEditTime: 2021-11-02 10:18:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bpmn-js\src\views\bpmn-modeler.vue
-->
<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
// import BpmnModeler from "bpmn-js/lib/Modeler";
import { CustomModeler } from "../components/customBpmn";
import { xmlStr } from "../mock/xmlStr";

export default {
  name: "ops-coffee",
  mounted() {
    this.init();
  },
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null
    };
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      this.bpmnModeler = new CustomModeler({
        container: canvas
      });

      this.createNewDiagram();
    },
    createNewDiagram() {
      try {
        const result = this.bpmnModeler.importXML(xmlStr);
        const { warnings } = result;
        console.log(warnings);
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    }
  }
};
</script>

<style scoped>
.containers {
  width: 100%;
  height: calc(100vh - 82px);
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>