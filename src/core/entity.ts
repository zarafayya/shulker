import { Entity, EntityDamageSource, EntityInitializationCause, world } from "@minecraft/server";
import { getActiveDimensions } from "../utils/active_dimensions.js";

export type ScriptEntity = {
  readonly identifier: string;
  /**
   * Called every tick
   */
  onTick?(event: ScriptEntityEvent): void;
  /**
   * Called when the entity dies
   */
  onDie?(event: ScriptEntityDieEvent): void;
  /**
   * Called when the entity hits another entity
   */
  onHit?(event: ScriptEntityHitEvent): void;
  /**
   * Called when the entity is hurt
   */
  onHurt?(event: ScriptEntityHurtEvent): void;
  /**
   * Called when the entity spawns
   */
  onSpawn?(event: ScriptEntitySpawnEvent): void;
  /**
   * Called when the entity's health changes
   */
  onHealthChanged?(event: ScriptEntityHealthChangedEvent): void;
};

type ScriptEntityEvent = {
  entity: Entity;
};

export type ScriptEntityDieEvent = ScriptEntityEvent & {
  damageSource: EntityDamageSource;
};

export type ScriptEntityHitEvent = ScriptEntityEvent & {
  target: Entity;
};

export type ScriptEntityHurtEvent = ScriptEntityEvent & {
  damage: number;
  damageSource: EntityDamageSource;
};

export type ScriptEntitySpawnEvent = ScriptEntityEvent & {
  cause: EntityInitializationCause;
};

export type ScriptEntityHealthChangedEvent = ScriptEntityEvent & {
  oldValue: number;
  newValue: number;
};

export const ScriptEntity = {
  register(entityList: ScriptEntity[]) {
    const entities = new Map<string, ScriptEntity>();

    for (const entity of entityList) {
      entities.set(entity.identifier, entity);
    }

    for (const dimension of getActiveDimensions()) {
      for (const { identifier, onTick } of entityList) {
        if (!onTick) {
          continue;
        }
        for (const entity of dimension.getEntities({ type: identifier })) {
          onTick({ entity });
        }
      }
    }

    world.afterEvents.entityDie.subscribe(({ deadEntity, damageSource }) => {
      entities.get(deadEntity.typeId)?.onDie?.({ entity: deadEntity, damageSource });
    });
    world.afterEvents.entityHitEntity.subscribe(({ damagingEntity, hitEntity }) => {
      entities.get(damagingEntity.typeId)?.onHit?.({ entity: damagingEntity, target: hitEntity });
    });
    world.afterEvents.entityHurt.subscribe(({ hurtEntity, damage, damageSource }) => {
      entities.get(hurtEntity.typeId)?.onHurt?.({ entity: hurtEntity, damage, damageSource });
    });
    world.afterEvents.entitySpawn.subscribe((event) => {
      entities.get(event.entity.typeId)?.onSpawn?.(event);
    });
    world.afterEvents.entityHealthChanged.subscribe((event) => {
      entities.get(event.entity.typeId)?.onHealthChanged?.(event);
    });
  },
};
