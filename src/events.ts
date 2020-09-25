const dragEvents = ["dragstart", "dragmove", "draginertiastart", "dragend"];
const resizeEvents = [
  "resizestart",
  "resizemove",
  "resizeinertiastart",
  "resizeend"
];
const gestureEvents = ["gesturestart", "gesturemove", "gestureend"];
const pointerEvents = [
  "down",
  "move",
  "up",
  "cancel",
  "tap",
  "doubletap",
  "hold"
];
export const allEvents = dragEvents
  .concat(resizeEvents)
  .concat(gestureEvents)
  .concat(pointerEvents);
