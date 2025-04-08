import { Dimension, system, Vector3 } from "@minecraft/server";
import { isActiveChunk } from "./active_chunk.js";

export function waitActiveChunk(callback: () => void, location: Vector3, dimension: Dimension) {
  const runId = system.runTimeout(() => {
    if (isActiveChunk(dimension.id, location)) {
      callback();
      system.clearRun(runId);
    }
  }, 1);
  return runId;
}