<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
import BpmnModeler from "bpmn-js/lib/Modeler";
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
      this.bpmnModeler = new BpmnModeler({
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