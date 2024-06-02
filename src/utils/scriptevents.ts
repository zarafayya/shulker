import { ScriptEventCommandMessageAfterEvent, system } from "@minecraft/server";

type ScriptEventHandler = (event: ScriptEventCommandMessageAfterEvent) => void;
const events = new Map<string, ScriptEventHandler>();

system.afterEvents.scriptEventReceive.subscribe((event) => {
  events.get(event.id)?.(event);
});

export const scriptEvents = Object.freeze({
  /**
   * Subscribe to a scriptevent
   * @param id Scriptevent id
   * @param handler Event handler
   */
  subscribe(id: string, handler: ScriptEventHandler) {
    if (events.has(id)) {
      throw new Error(`ScriptEvent '${id}' already exists.`);
    }
    events.set(id, handler);
  },
  /**
   * Unsubscribe from a scriptevent
   * @param id Scriptevent id
   */
  unsubscribe(id: string) {
    events.delete(id);
  },
});
