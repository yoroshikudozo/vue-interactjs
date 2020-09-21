<template>
  <div class="demo">
    <h1>Plugin Demo</h1>

    <section class="demo-item">
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

<style scoped>
.demo-item {
  margin-bottom: 2em;
  padding: 1em;
  border: 1px solid #ccc;
  background: #eee;
}
</style>
