<template>
  <div class="demo">
    <h1>Plugin Demo</h1>

    <section>
      <header><h2>Pixel drawing</h2></header>
      <div class="body">
        <pixel-drawing />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PixelDrawing from "./components/PixelDrawing.vue";

export default Vue.extend({
  name: "demo",

  components: {
    PixelDrawing
  }
});
</script>

<style>
.rainbow-pixel-canvas {
  width: 400px;
  height: 200px;
  border: solid 2px gray;
  box-sizing: border-box;
  background: white;

  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
}
</style>
