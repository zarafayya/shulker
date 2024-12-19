import { Entity, system } from "@minecraft/server";

/**
 * Set a variable to be used in client-side entities
 * @param entity - The entity to set the variable on
 * @param key - The key of the variable
 * @param value - The value of the variable
 * @example
 * ```ts
 * setVariable(entity, "health", 20); // Equivalent to v.health = 20;
 * ```
 * In example.entity.json
 * ```json
 * {
 *   "scripts": {
 *    "animate": [
 *      { "example": "v.health == 20" }
 *    ]
 *   }
 * }
 * ```
 */
export async function setVariable(entity: Entity, key: string, value: string | number) {
  const controller = `${key}.${value}`;
  if (typeof value === "string") {
    value = `'${value}'`;
  }
  entity.playAnimation("animation.humanoid.base_pose", {
    controller,
    stopExpression: `v.${key} = ${value}; return 1;`,
  });
  await system.waitTicks(1);
  entity.playAnimation("animation.humanoid.base_pose", {
    controller,
    stopExpression: "0",
  });
}
