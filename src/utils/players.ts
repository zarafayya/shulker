import { Player, system, world } from "@minecraft/server";

let players: Set<Player>;

function registerEvents() {
  world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
    if (initialSpawn) {
      players.add(player);
    }
  });
  world.beforeEvents.playerLeave.subscribe(({ player }) => {
    players.delete(player);
  });
}

/**
 * Optimized way of calling `world.getAllPlayers()`
 * @returns All active players in the world
 */
export function getAllPlayers() {
  if (!players) {
    players = new Set(world.getAllPlayers());
    system.run(registerEvents);
  }
  return players;
}
