import { system } from "@minecraft/server";

/**
 * Sleeps for the specified amount of time
 * @param ticks Amount of time, in ticks
 * @returns Promise that resolves after the specified amount of time
 * @deprecated Use `system.waitTicks` instead
 */
export function sleep(ticks: number) {
  return system.waitTicks(ticks);
}
