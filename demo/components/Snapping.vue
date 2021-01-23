<template>
  <div class="snapping">
    <interact
      draggable
      :dragOption="dragOption"
      class="grid-snap"
      @dragmove="dragmove"
    >
      Dragging is constrained to the corners of a grid
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import interact from "interactjs";
import { InteractEvent } from "@interactjs/types";

export default Vue.extend({
  name: "Snapping",

  data: () => ({
    dragOption: {
      inertia: true,
      modifiers: [
        interact.modifiers.snap({
          targets: [interact.createSnapGrid({ x: 20, y: 20 })],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }],
          offset: "parent"
        }),
        interact.modifiers.restrict({
          restriction: "parent",
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        })
      ]
    },
    x: 0,
    y: 0
  }),

  methods: {
    dragmove(event: InteractEvent<"drag">) {
      this.x += event.dx;
      this.y += event.dy;

      event.target.style.transform =
        "translate(" + this.x + "px, " + this.y + "px)";
    }
  }
});
</script>

<style scoped>
.snapping {
  width: 400px;
  height: 400px;
  background: white;

  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  box-sizing: border-box;
}
.grid-snap {
  width: 40%;
  height: 160px;
  background-color: #29e;
  color: #fff;
  font-size: 1.2em;
  border-radius: 4px;
  padding: 2%;
  touch-action: none;
  box-sizing: border-box;
}
</style>
