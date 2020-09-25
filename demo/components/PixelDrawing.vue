<template>
  <div class="pixel-drawing">
    <interact
      draggable
      :dragOption="options"
      class="rainbow-pixel-canvas"
      tag="canvas"
      :width="width"
      :height="height"
      @dragmove="dragmove"
      @doubletap="doubletap"
      ref="myInteract"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import interact from "interactjs";
import { InteractEvent } from "@interactjs/types";

export default Vue.extend({
  name: "PixelDrawing",

  data: () => ({
    options: {
      max: Infinity,
      maxPerElement: Infinity,
      origin: "self",
      modifiers: [
        interact.modifiers.snap({
          targets: [interact.snappers.grid({ x: 16, y: 16 })]
        })
      ]
    },
    width: 300,
    height: 200
  }),

  computed: {
    interact() {
      return this.$refs.myInteract;
    }
  },

  mounted() {
    this.resizeCanvas();
    interact(window).on("resize", this.resizeCanvas);
  },

  methods: {
    dragmove(event: InteractEvent<"drag">) {
      const context = (event.target as HTMLCanvasElement).getContext("2d");
      // calculate the angle of the drag direction
      const dragAngle = (180 * Math.atan2(event.dx, event.dy)) / Math.PI;

      // set color based on drag angle and speed
      if (context) {
        context.fillStyle = `hsl(${dragAngle}, 86%, ${30 +
          Math.min(event.speed / 1000, 1) * 50}%)`;

        // draw squares
        context.fillRect(event.pageX - 16 / 2, event.pageY - 16 / 2, 16, 16);
      }
    },
    doubletap(event: InteractEvent<"drag">) {
      const context = (event.target as HTMLCanvasElement).getContext("2d");

      if (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        this.resizeCanvas();
      }
    },
    resizeCanvas() {
      const rect = (this.interact as Vue).$el.getBoundingClientRect();
      this.width = rect.width;
      this.height = rect.height;
    }
  }
});
</script>

<style scoped>
.rainbow-pixel-canvas {
  width: 100%;
  height: 200px;
  border: solid 2px gray;
  box-sizing: border-box;
  background: white;

  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
}
</style>
