import {
  dragEvents,
  dropEvents,
  gestureEvents,
  pointerEvents,
  resizeEvents
} from "@/events";
import { Interactable } from "@interactjs/types";

export const bindPointerEvents = (
  interact: Interactable,
  emit: Vue["$emit"]
): void => {
  pointerEvents.forEach(eventName => {
    interact.on(eventName, (...args: unknown[]) => {
      emit(eventName, ...args);
    });
  });
};

export const bindDragEvents = (
  interact: Interactable,
  emit: Vue["$emit"]
): void => {
  dragEvents.forEach(eventName => {
    interact.on(eventName, (...args: unknown[]) => {
      emit(eventName, ...args);
    });
  });
};

export const bindDropEvents = (
  interact: Interactable,
  emit: Vue["$emit"]
): void => {
  dropEvents.forEach(eventName => {
    interact.on(eventName, (...args: unknown[]) => {
      emit(eventName, ...args);
    });
  });
};

export const bindResizeEvents = (
  interact: Interactable,
  emit: Vue["$emit"]
): void => {
  resizeEvents.forEach(eventName => {
    interact.on(eventName, (...args: unknown[]) => {
      emit(eventName, ...args);
    });
  });
};

export const bindGestureEvents = (
  interact: Interactable,
  emit: Vue["$emit"]
): void => {
  gestureEvents.forEach(eventName => {
    interact.on(eventName, (...args: unknown[]) => {
      emit(eventName, ...args);
    });
  });
};
