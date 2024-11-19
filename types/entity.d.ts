import "@minecraft/server";
import { AnimationIdentifier, TypeFamily } from "bedrock-ts";
declare module "@minecraft/server" {
  type EntityComponents = {
    "minecraft:addrider": EntityAddRiderComponent;
    "minecraft:ageable": EntityAgeableComponent;
    "minecraft:breathable": EntityBreathableComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:color": EntityColorComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:equippable": EntityEquippableComponent;
    "minecraft:fire_immune": EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    "minecraft:flying_speed": EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": EntityFrictionModifierComponent;
    "minecraft:ground_offset": EntityGroundOffsetComponent;
    "minecraft:healable": EntityHealableComponent;
    "minecraft:health": EntityHealthComponent;
    "minecraft:inventory": EntityInventoryComponent;
    "minecraft:is_baby": EntityIsBabyComponent;
    "minecraft:is_charged": EntityIsChargedComponent;
    "minecraft:is_chested": EntityIsChestedComponent;
    "minecraft:is_dyeable": EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": EntityIsSaddledComponent;
    "minecraft:is_shaking": EntityIsShakingComponent;
    "minecraft:is_sheared": EntityIsShearedComponent;
    "minecraft:is_stackable": EntityIsStackableComponent;
    "minecraft:is_stunned": EntityIsStunnedComponent;
    "minecraft:is_tamed": EntityIsTamedComponent;
    "minecraft:item": EntityItemComponent;
    "minecraft:lava_movement": EntityLavaMovementComponent;
    "minecraft:leashable": EntityLeashableComponent;
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:movement": EntityMovementComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.glide": EntityMovementGlideComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
    "minecraft:movement.sway": EntityMovementSwayComponent;
    "minecraft:navigation.climb": EntityNavigationClimbComponent;
    "minecraft:navigation.float": EntityNavigationFloatComponent;
    "minecraft:navigation.fly": EntityNavigationFlyComponent;
    "minecraft:navigation.generic": EntityNavigationGenericComponent;
    "minecraft:navigation.hover": EntityNavigationHoverComponent;
    "minecraft:navigation.walk": EntityNavigationWalkComponent;
    "minecraft:onfire": EntityOnFireComponent;
    "minecraft:projectile": EntityProjectileComponent;
    "minecraft:push_through": EntityPushThroughComponent;
    "minecraft:rideable": EntityRideableComponent;
    "minecraft:riding": EntityRidingComponent;
    "minecraft:scale": EntityScaleComponent;
    "minecraft:skin_id": EntitySkinIdComponent;
    "minecraft:strength": EntityStrengthComponent;
    "minecraft:tameable": EntityTameableComponent;
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
  };
  interface Entity {
    playAnimation(animationName: AnimationIdentifier, options?: PlayAnimationOptions): void;
    getComponent<K extends keyof EntityComponents>(component: K): EntityComponents[K];
    hasComponent<K extends keyof EntityComponents>(component: K): boolean;
    addEffect(
      effectType: $EffectTypes,
      duration: number,
      options?: EntityEffectOptions,
    ): Effect | undefined;
    removeEffect(effectType: $EffectTypes): void;
  }

  class $EntityDefinitionFeedItem extends EntityDefinitionFeedItem {
    readonly item: $ItemTypes;
  }
  interface EntityAgeableComponent {
    getFeedItems(): $EntityDefinitionFeedItem[];
  }

  class $FeedItem extends FeedItem {
    readonly item: $ItemTypes;
    getEffects(): $FeedItemEffect[];
  }
  type $FeedItemEffectNames = $EffectTypes extends `${infer T}:${infer U}` ? U : never;
  class $FeedItemEffect extends FeedItemEffect {
    readonly name: $FeedItemEffectNames;
  }
  interface EntityHealableComponent {
    getFeedItems(): $FeedItem[];
  }

  interface EntityQueryOptions extends EntityFilter {
    type?: $EntityTypes;
    families?: TypeFamily[];
    excluedeFamilies?: TypeFamily[];
    excludeTypes?: $EntityTypes[];
  }
  interface $EntityDataDrivenTriggerEventOptions extends EntityDataDrivenTriggerEventOptions {
    entityTypes?: $EntityTypes[];
  }
  interface DataDrivenEntityTriggerAfterEventSignal {
    subscribe(
      callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
      options?: $EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
  }

  interface $EntityEventOptions extends EntityEventOptions {
    entityTypes?: $EntityTypes[];
  }
  interface EffectAddAfterEventSignal {
    subscribe(
      callback: (arg: EffectAddAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
  }
  interface EntityDieAfterEventSignal {
    subscribe(
      callback: (arg: EntityDieAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
  }
  interface EntityHealthChangedAfterEventSignal {
    subscribe(
      callback: (arg: EntityHealthChangedAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
  }
  interface EntityHitBlockAfterEventSignal {
    subscribe(
      callback: (arg: EntityHitBlockAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
  }
  interface EntityHitEntityAfterEventSignal {
    subscribe(
      callback: (arg: EntityHitEntityAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
  }
  interface EntityHurtAfterEventSignal {
    subscribe(
      callback: (arg: EntityHurtAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
  }
  interface EntityRemoveAfterEventSignal {
    subscribe(
      callback: (arg: EntityRemoveAfterEvent) => void,
      options?: $EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
  }
}
