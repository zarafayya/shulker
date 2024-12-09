import { Player, system, world } from "@minecraft/server";

let playerList: Player[];

function registerEvents() {
  world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
    if (initialSpawn) {
      playerList.push(player);
    }
  });
  world.beforeEvents.playerLeave.subscribe(({ player }) => {
    playerList = playerList.filter((p) => p !== player);
  });
}

/**
 * Optimized way of calling `world.getAllPlayers()`
 * @returns All active players in the world
 */
export function getAllPlayers() {
  if (!playerList) {
    playerList = world.getAllPlayers();
    system.run(registerEvents);
  }
  return playerList;
}
