import { allEvents } from "@/events";
import { Interactable } from "@interactjs/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bindInteractEvents = (interact: Interactable, emit: any): void => {
  allEvents.forEach(eventName => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interact.on(eventName, (...args: any[]) => {
      emit(eventName, ...args);
    });
  });
};
