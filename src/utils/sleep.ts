import { system } from "@minecraft/server";

/**
 * Sleeps for the specified amount of time
 * @param tick Amount of time, in ticks
 * @returns Promise that resolves after the specified amount of time
 */
export function sleep(tick: number) {
  return new Promise<void>((resolve) => system.runTimeout(resolve, tick));
}
