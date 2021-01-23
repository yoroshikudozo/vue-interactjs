<template>
  <div class="resizing">
    <interact
      draggable
      :dragOption="dragOption"
      resizable
      :resizeOption="resizeOption"
      class="resize-drag"
      :style="style"
      @dragmove="dragmove"
      @resizemove="resizemove"
    >
      {{ text }}
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import interact from "interactjs";
import { DragEvent, ResizeEvent } from "@interactjs/types";

export default Vue.extend({
  name: "Resizing",

  data: () => ({
    resizeOption: {
      edges: { left: true, right: true, bottom: true, top: true }
    },
    dragOption: {
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true
        })
      ],
      autoScroll: true
    },
    x: 0,
    y: 0,
    w: 120,
    h: 200,
    text: "Resize from any edge or corner"
  }),

  computed: {
    style() {
      return {
        height: `${this.h}px`,
        width: `${this.w}px`,
        transform: `translate(${this.x}px, ${this.y}px)`
      };
    }
  },

  methods: {
    dragmove(event: DragEvent) {
      // keep the dragged position in the data-x/data-y attributes
      this.x += event.dx;
      this.y += event.dy;
    },
    resizemove(event: ResizeEvent) {
      this.w = event.rect.width;
      this.h = event.rect.height;

      // translate when resizing from top or left edges
      if (event.deltaRect) {
        this.x += event.deltaRect.left;
        this.y += event.deltaRect.top;

        this.text = `${Math.round(event.rect.width)}\u00D7${Math.round(
          event.rect.height
        )}`;
      }
    }
  }
});
</script>

<style scoped>
.resizing {
  width: 400px;
  height: 200px;
  box-sizing: border-box;
  background: white;

  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
}
.resize-drag {
  width: 120px;
  padding: 20px;
  border-radius: 8px;
  background-color: #29e;
  color: white;
  font-size: 20px;
  font-family: sans-serif;
  touch-action: none;

  /* This makes things *much* easier */
  box-sizing: border-box;
}
</style>
