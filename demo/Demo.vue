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

    <section class="demo-item">
      <header><h2>Snapping</h2></header>
      <div class="body">
        <demo-snapping />
      </div>
    </section>

    <section class="demo-item">
      <header><h2>Resizing</h2></header>
      <div class="body">
        <demo-resizing />
      </div>
    </section>

    <section class="demo-item">
      <header><h2>Multi-touch Rotation (touchscreen only)</h2></header>
      <div class="body">
        <multi-touch />
      </div>
    </section>

    <section class="demo-item">
      <header><h2>Pinch-to-zoom (touchscreen only)</h2></header>
      <div class="body">
        <pinch-to-zoom />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PixelDrawing from "./components/PixelDrawing.vue";
import Dragging from "./components/Dragging.vue";
import DragAndDrop from "./components/DragAndDrop.vue";
import Snapping from "./components/Snapping.vue";
import Resizing from "./components/Resizing.vue";
import MultiTouch from "./components/MultiTouch.vue";
import PinchToZoom from "./components/PinchToZoom.vue";

export default Vue.extend({
  name: "demo",

  components: {
    PixelDrawing,
    DemoDragging: Dragging,
    DragAndDrop,
    DemoSnapping: Snapping,
    DemoResizing: Resizing,
    MultiTouch,
    PinchToZoom
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
