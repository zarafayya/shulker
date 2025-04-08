import { Dimension, system, Vector3 } from "@minecraft/server";
import { isActiveChunk } from "./active_chunk.js";

system.runInterval(() => {});

// export function waitActiveChunk(callback: () => void, location: Vector3, dimension: Dimension) {
//   while (isActiveChunk(dimension.id, location)) {
    
//   }
// }