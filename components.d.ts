import { SpellEffects } from "bedrock-ts";

declare module "@minecraft/server" {
  type BlockComponents = {
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:record_player": BlockRecordPlayerComponent;
    "minecraft:sign": BlockSignComponent;
  };
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
  type PlayerComponents = EntityComponents & {
    "minecraft:cursor_inventory": PlayerCursorInventoryComponent;
  };
  type ItemComponents = {
    "minecraft:cooldown": ItemCooldownComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:food": ItemFoodComponent;
  };

  interface Block {
    getComponent<K extends keyof BlockComponents>(component: K): BlockComponents[K];
  }
  interface Entity {
    getComponent<K extends keyof EntityComponents>(component: K): EntityComponents[K];
    hasComponent<K extends keyof EntityComponents>(component: K): boolean;
  }
  interface Player {
    getComponent<K extends keyof PlayerComponents>(component: K): PlayerComponents[K];
    hasComponent<K extends keyof PlayerComponents>(component: K): boolean;
  }
  interface ItemStack {
    getComponent<K extends keyof ItemComponents>(component: K): ItemComponents[K];
    hasComponent<K extends keyof ItemComponents>(component: K): boolean;
  }

  interface Entity {
    addEffect(
      effectType: SpellEffects,
      duration: number,
      options?: EntityEffectOptions,
    ): Effect | undefined;
    removeEffect(effectType: SpellEffects): void;
  }

  type CameraPresets =
    | "minecraft:first_person"
    | "minecraft:free"
    | "minecraft:third_person"
    | "minecraft:third_person_front"
    | "minecraft:follow_orbit";

  interface Camera {
    setCamera(
      cameraPreset: CameraPresets,
      setOptions?:
        | CameraDefaultOptions
        | CameraSetFacingOptions
        | CameraSetLocationOptions
        | CameraSetPosOptions
        | CameraSetRotOptions,
    ): void;
  }
}
