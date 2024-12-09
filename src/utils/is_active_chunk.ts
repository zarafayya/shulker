import { Vector3, world } from "@minecraft/server";

type DimensionType = "minecraft:nether" | "minecraft:overworld" | "minecraft:the_end";

/**
 * Check if the location is in an active chunk.
 * @param location - The location to check.
 * @returns True if the location is in an active chunk.
 */
export function isActiveChunk(dimension: DimensionType, location: Vector3): boolean {
  try {
    return !!world.getDimension(dimension).getBlock(location);
  } catch {
    return false;
  }
}
