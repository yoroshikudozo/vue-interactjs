<template>
  <div class="demo">
    <h1>Plugin Demo</h1>

    <section class="demo-item">
      <header><h2>Pixel drawing</h2></header>
      <div class="body">
        <pixel-drawing />
      </div>
    </section>

    <section class="demo-item">
      <header><h2>Dragging</h2></header>
      <div class="body">
        <demo-dragging />
      </div>
    </section>
    <section class="demo-item">
      <header><h2>DragAndDrop</h2></header>
      <div class="body">
        <drag-and-drop />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PixelDrawing from "./components/PixelDrawing.vue";
import Dragging from "./components/Dragging.vue";
import DragAndDrop from "./components/DragAndDrop.vue";

export default Vue.extend({
  name: "demo",

  components: {
    PixelDrawing,
    DemoDragging: Dragging,
    DragAndDrop
  }
});
</script>

<style scoped>
.demo-item {
  margin-bottom: 2em;
  padding: 1em;
  border: 1px solid #ccc;
  background: #eee;
}
</style>
