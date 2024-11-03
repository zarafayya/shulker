import { Dimension, system, world } from "@minecraft/server";

let dimensions: Set<Dimension>;

function registerEvents() {
  world.afterEvents.playerDimensionChange.subscribe(({ fromDimension, toDimension }) => {
    if (fromDimension.getPlayers().length === 0) {
      dimensions.delete(fromDimension);
    }
    dimensions.add(toDimension);
  });
  world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
    if (initialSpawn) {
      dimensions.add(player.dimension);
    }
  });
  world.beforeEvents.playerLeave.subscribe(({ player }) => {
    const dimension = player.dimension;
    if (dimension.getPlayers().length === 0) {
      dimensions.delete(dimension);
    }
  });
}

/**
 * Get all dimensions that currently have players in them
 * @returns All active dimensions
 */
export function getActiveDimensions() {
  if (!dimensions) {
    dimensions = new Set(world.getAllPlayers().map((p) => p.dimension));
    system.run(registerEvents);
  }
  return dimensions;
}
