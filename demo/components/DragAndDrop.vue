<template>
  <div class="dragging">
    <interact
      draggable
      :dragOption="dragOption"
      class="draggable"
      @dragmove="dragmove"
      id="no-drop"
    >
      <p>#no-drop</p>
    </interact>
    <interact
      draggable
      :dragOption="dragOption"
      class="draggable"
      @dragmove="dragmove"
      id="yes-drop"
    >
      <p>#yes-drop</p>
    </interact>

    <interact
      id="outer-dropzone"
      class="dropzone"
      droppable
      :dropOption="dropOption"
      @dragmove="dragmove"
      @dropactivate="dropactivate"
      @dragenter="dragenter"
      @dragleave="dragleave"
      @drop="drop"
      @dropdeactivate="dropdeactivate"
    >
      #outer-dropzone
      <interact
        id="inner-dropzone"
        class="dropzone"
        droppable
        :dropOption="dropOption"
      >
        #inner-dropzone
      </interact>
    </interact>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import interact from "interactjs";
import { DropEvent } from "@interactjs/actions/drop/DropEvent";
import { DragEvent } from "@interactjs/actions/drag/plugin";

export default Vue.extend({
  name: "DragAndDrop",
  data: () => ({
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
    dropOption: {
      accept: "#yes-drop",
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75
    }
  }),
  methods: {
    dragmove(event: DragEvent) {
      const target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      const x =
        (parseFloat(target.getAttribute("data-x") as string) || 0) + event.dx;
      const y =
        (parseFloat(target.getAttribute("data-y") as string) || 0) + event.dy;

      // translate the element
      target.style.transform = "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", String(x));
      target.setAttribute("data-y", String(y));
    },
    dropactivate: function(event: DropEvent) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    dragenter: function(event: DropEvent) {
      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;

      // feedback the possibility of a drop
      dropzoneElement.classList.add("drop-target");
      if (draggableElement) {
        draggableElement.classList.add("can-drop");
        draggableElement.textContent = "Dragged in";
      }
    },
    dragleave: function(event: DropEvent) {
      // remove the drop feedback style
      event.target.classList.remove("drop-target");
      event.relatedTarget.classList.remove("can-drop");
      event.relatedTarget.textContent = "Dragged out";
    },
    drop: function(event: DropEvent) {
      event.relatedTarget.textContent = "Dropped";
    },
    dropdeactivate: function(event: DropEvent) {
      // remove active dropzone feedback
      event.target.classList.remove("drop-active");
      event.target.classList.remove("drop-target");
    }
  }
});
</script>

<style scoped>
.dragging {
  width: 400px;
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
  transform: translate(0px, 0px);
}
#outer-dropzone {
  height: 140px;
}
#inner-dropzone {
  height: 80px;
}
.dropzone {
  background-color: #ccc;
  border: dashed 4px transparent;
  border-radius: 4px;
  margin: 10px auto 30px;
  padding: 10px;
  width: 80%;
  transition: background-color 0.3s;
}
.drop-active {
  border-color: #aaa;
}
.drop-target {
  background-color: #29e;
  border-color: #fff;
  border-style: solid;
}
.draggable.can-drop {
  color: #000;
  background-color: #4e4;
}
</style>
