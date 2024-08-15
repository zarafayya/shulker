import "@minecraft/server";

declare module "@minecraft/server" {
  type BlockComponents = {
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:sign": BlockSignComponent;
  };
  type EntityComponents = {
    "minecraft:add_rider": EntityAddRiderComponent;
    "minecraft:base_movement": EntityBaseMovementComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:color": EntityColorComponent;
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
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
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
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
  };
  type ItemComponents = {
    "minecraft:cooldown": ItemCooldownComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:food": ItemFoodComponent;
  };

  interface Block {
    getComponent<K extends keyof BlockComponents>(component: K): BlockComponents[K];
  }
  interface Entity {
    getComponent<K extends keyof EntityComponents>(component: K): EntityComponents[K];
    hasComponent<K extends keyof EntityComponents>(component: K): boolean;
  }
  interface ItemStack {
    getComponent<K extends keyof ItemComponents>(component: K): ItemComponents[K];
    hasComponent<K extends keyof ItemComponents>(component: K): boolean;
  }
}
