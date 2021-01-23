<template>
  <div class="multi-touch">
    <div class="angle-info">{{ angle.toFixed(2) + "\u00b0" }}</div>
    <interact
      gesturable
      class="rotate-area"
      :style="style"
      @gesturemove="gesturemove"
    >
      <svg viewBox="0 0 100 100" class="arrow">
        <polygon
          points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25"
          fill="#29e"
        />
      </svg>
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GestureEvent } from "@interactjs/types";

export default Vue.extend({
  name: "MultiTouch",

  data: () => ({
    angle: 0
  }),

  computed: {
    style() {
      return {
        transform: `rotate(${this.angle}deg)`
      };
    }
  },

  methods: {
    gesturemove(event: GestureEvent) {
      this.angle += event.da;
    }
  }
});
</script>

<style scoped>
.multi-touch {
  position: relative;
  width: 400px;
  height: 400px;
  padding: 3em;
  box-sizing: border-box;
  background: white;
}
.rotate-area {
  overflow: hidden;
  -ms-touch-action: none;
  touch-action: none;
  user-select: none;
}
.angle-info {
  color: #666;
  font-size: 2em;
  position: absolute;
}
.arrow {
  width: 100%;
  height: 100%;
}
</style>
