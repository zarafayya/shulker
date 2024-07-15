import { system, TimeOfDay, world } from "@minecraft/server";

type TimeEventHandler = (time: TimeOfDay, initial: boolean) => void;
let events: Set<TimeEventHandler>;
let prev = -1;

export const timeEvents = {
  /**
   * Subscribes to time of day changes.
   * @param handler Code to run when the time of day changed. Note a second argument to indicate if the event is running when you first join the world.
   */
  subscribe(handler: TimeEventHandler) {
    if (!events) {
      events = new Set();
      system.runInterval(() => {
        const current = getTimeOfDay();
        if (prev === current) {
          return;
        }
        for (const event of events) {
          event(current, prev === -1);
        }
        prev = current;
      });
    }
    events.add(handler);
  },
  unsubscribe(callback: TimeEventHandler) {
    events.delete(callback);
  },
} as const;

/**
 * Get the current time of day as TimeOfDay enum.
 */
export function getTimeOfDay() {
  const time = world.getTimeOfDay();
  if (time >= TimeOfDay.Sunrise) {
    return TimeOfDay.Sunrise;
  }
  if (time >= TimeOfDay.Midnight) {
    return TimeOfDay.Midnight;
  }
  if (time >= TimeOfDay.Night) {
    return TimeOfDay.Night;
  }
  if (time >= TimeOfDay.Sunset) {
    return TimeOfDay.Sunset;
  }
  if (time >= TimeOfDay.Noon) {
    return TimeOfDay.Noon;
  }
  if (time >= TimeOfDay.Day) {
    return TimeOfDay.Day;
  }
  return TimeOfDay.Sunrise;
}
