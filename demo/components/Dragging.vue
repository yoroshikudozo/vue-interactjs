<template>
  <div class="drag-and-drop">
    <interact
      draggable
      :dragOption="options"
      class="draggable"
      @dragmove="dragmove"
    >
      <p>You can drag one element</p>
    </interact>
    <interact
      draggable
      :dragOption="options"
      class="draggable"
      @dragmove="dragmove"
    >
      <p>with each pointer</p>
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import interact from "interactjs";
import { InteractEvent } from "@interactjs/types";

export default Vue.extend({
  name: "Dragging",
  data: () => ({
    options: {
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: "parent",
          endOnly: true
        })
      ],
      // enable autoScroll
      autoScroll: true
    }
  }),
  methods: {
    dragmove(event: InteractEvent<"drag">) {
      const target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      const x =
        (parseFloat(target.getAttribute("data-x") as string) || 0) + event.dx;
      const y =
        (parseFloat(target.getAttribute("data-y") as string) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", String(x));
      target.setAttribute("data-y", String(y));
    }
  }
});
</script>

<style scoped>
.drag-and-drop {
  width: 400px;
  height: 400px;
  border: solid 2px gray;
  box-sizing: border-box;
  background: white;

  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
}
.draggable {
  width: 100px;
  min-height: 6.5em;
  margin: 10%;
  background-color: #29e;
  color: white;
  border-radius: 0.75em;
  padding: 4%;
  touch-action: none;
  user-select: none;
  -webkit-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
}
</style>
