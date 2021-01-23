<template>
  <div class="pinch-to-zoom">
    <interact
      draggable
      gesturable
      class="gesture-area"
      @gesturestart="gesturestart"
      @gesturemove="gesturemove"
      @gestureend="gestureend"
      @dragmove="dragmove"
      :style="areaStyle"
    >
      <img
        src="../assets/logo.png"
        alt="Vue logo"
        class="scale-element"
        :class="{ touching }"
        :style="imageStyle"
      />
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GestureEvent } from "@interactjs/types";
import { DragEvent } from "@interactjs/actions/drag/plugin";

type GestureAndDragEvent = GestureEvent & DragEvent;

const getTransform = (angle: number, scale: number) => {
  const rotate = angle ? `rotate(${angle}deg)` : "";
  const scaleText = `scale(${scale})`;
  return `${rotate} ${scaleText}`;
};

export default Vue.extend({
  name: "PinchToZoom",

  data: () => ({
    angle: 0,
    touchAngle: 0,
    scale: 1,
    tempScale: 1,
    x: 0,
    y: 0,
    touching: false,
    timer: 0
  }),

  computed: {
    areaStyle() {
      return {
        transform: `translate(${this.x}px, ${this.y}px)`
      };
    },
    imageStyle() {
      return {
        transform: getTransform(this.angle, this.scale)
      };
    }
  },

  methods: {
    gesturestart(event: GestureEvent) {
      this.touching = true;
      this.touchAngle = this.angle - event.angle;

      clearTimeout(this.timer);
    },
    gesturemove(event: GestureAndDragEvent) {
      this.angle = this.touchAngle + event.angle;
      this.scale = event.scale * this.tempScale;

      this.dragmove(event);
    },
    gestureend(event: GestureEvent) {
      this.touching = false;
      this.touchAngle = this.angle;
      this.tempScale = this.scale * event.scale;

      this.timer = setTimeout(this.reset, 1000);
    },
    dragmove(event: GestureAndDragEvent) {
      this.x += event.dx;
      this.y += event.dy;
    },
    reset() {
      this.angle = 0;
      this.touchAngle = 0;
      this.scale = 1;
      this.tempScale = 1;
    }
  }
});
</script>

<style scoped>
.pinch-to-zoom {
  position: relative;
  width: 400px;
  height: 400px;
  padding: 3em;
  box-sizing: border-box;
  background: white;
}
.gesture-area {
  touch-action: none;
}
.scale-element {
  display: block;
  max-width: 100%;
  margin: auto;
  transition: transform 0.3s ease-in-out;
}
.scale-element.touching {
  transition: none;
  transition: none;
}
</style>
