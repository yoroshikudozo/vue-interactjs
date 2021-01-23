import {
  dragEvents,
  dropEvents,
  gestureEvents,
  pointerEvents,
  resizeEvents
} from "@/events";
import { Interactable } from "@interactjs/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindPointerEvents = (interact: Interactable, emit: any): void => {
  pointerEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindDragEvents = (interact: Interactable, emit: any): void => {
  dragEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindDropEvents = (interact: Interactable, emit: any): void => {
  dropEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindResizeEvents = (interact: Interactable, emit: any): void => {
  resizeEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindGestureEvents = (interact: Interactable, emit: any): void => {
  gestureEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};
