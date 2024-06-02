import { Player, world } from "@minecraft/server";

const players = new Set<Player>(world.getAllPlayers());

world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
  if (initialSpawn) {
    players.add(player);
  }
});

world.beforeEvents.playerLeave.subscribe(({ player }) => {
  players.delete(player);
});

/**
 * Optimized way of calling `world.getAllPlayers()`
 * @returns All active players in the world
 */
export function getAllPlayers() {
  return players;
}
