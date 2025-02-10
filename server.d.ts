import * as server from "@minecraft/server";
import * as vanilla from "@minecraft/vanilla-data";
import * as bedrockts from "bedrock-ts";

declare namespace ShulkerInternal {
  type UnionString<T extends string> = T | (string & {});

  type BiomeTypes = `${vanilla.MinecraftBiomeTypes}`;
  type DimensionTypes = `${vanilla.MinecraftDimensionTypes}`;
  type EffectTypes = `${vanilla.MinecraftEffectTypes}`;
  type EnchantmentTypes = `${vanilla.MinecraftEnchantmentTypes}`;
  type FeatureTypes = `${vanilla.MinecraftFeatureTypes}`;
  type PotionEffectTypes = `${vanilla.MinecraftPotionEffectTypes}`;
  type PotionLiquidTypes = `${vanilla.MinecraftPotionLiquidTypes}`;
  type PotionModifierTypes = `${vanilla.MinecraftPotionModifierTypes}`;

  type BlockTags = UnionString<
    | "acacia"
    | "birch"
    | "dark_oak"
    | "diamond_pick_diggable"
    | "dirt"
    | "fertilize_area"
    | "grass"
    | "gravel"
    | "gold_pick_diggable"
    | "iron_pick_diggable"
    | "jungle"
    | "log"
    | "metal"
    | "minecraft:crop"
    | "minecraft:diamond_tier_destructible"
    | "minecraft:iron_tier_destructible"
    | "minecraft:is_axe_item_destructible"
    | "minecraft:is_hoe_item_destructible"
    | "minecraft:is_mace_item_destructible"
    | "minecraft:is_pickaxe_item_destructible"
    | "minecraft:is_shears_item_destructible"
    | "minecraft:is_shovel_item_destructible"
    | "minecraft:is_sword_item_destructible"
    | "minecraft:netherite_tier_destructible"
    | "minecraft:stone_tier_destructible"
    | "mob_spawner"
    | "not_feature_replaceable"
    | "oak"
    | "one_way_collidable"
    | "plant"
    | "pumpkin"
    | "rail"
    | "sand"
    | "snow"
    | "spruce"
    | "stone"
    | "stone_pick_diggable"
    | "text_sign"
    | "trapdoors"
    | "water"
    | "wood"
    | "wood_pick_diggable"
  >;
  type BlockTypes = UnionString<`${vanilla.MinecraftBlockTypes}`>;
  type CameraPresetsTypes = UnionString<`${vanilla.MinecraftCameraPresetsTypes}`>;
  type CooldownCategoryTypes = UnionString<`${vanilla.MinecraftCooldownCategoryTypes}`>;
  type EntityTypes = UnionString<`${vanilla.MinecraftEntityTypes}`>;
  type ItemTypes = UnionString<`${vanilla.MinecraftItemTypes}`>;

  // Components
  type BlockComponents = {
    "minecraft:fluidContainer": server.BlockFluidContainerComponent;
    "minecraft:inventory": server.BlockInventoryComponent;
    "minecraft:piston": server.BlockPistonComponent;
    "minecraft:record_player": server.BlockRecordPlayerComponent;
    "minecraft:sign": server.BlockSignComponent;
  };
  type EntityComponents = {
    "minecraft:addrider": server.EntityAddRiderComponent;
    "minecraft:ageable": server.EntityAgeableComponent;
    "minecraft:breathable": server.EntityBreathableComponent;
    "minecraft:can_climb": server.EntityCanClimbComponent;
    "minecraft:can_fly": server.EntityCanFlyComponent;
    "minecraft:can_power_jump": server.EntityCanPowerJumpComponent;
    "minecraft:color": server.EntityColorComponent;
    "minecraft:color2": server.EntityColor2Component;
    "minecraft:equippable": server.EntityEquippableComponent;
    "minecraft:fire_immune": server.EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": server.EntityFloatsInLiquidComponent;
    "minecraft:flying_speed": server.EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": server.EntityFrictionModifierComponent;
    "minecraft:ground_offset": server.EntityGroundOffsetComponent;
    "minecraft:healable": server.EntityHealableComponent;
    "minecraft:health": server.EntityHealthComponent;
    "minecraft:inventory": server.EntityInventoryComponent;
    "minecraft:is_baby": server.EntityIsBabyComponent;
    "minecraft:is_charged": server.EntityIsChargedComponent;
    "minecraft:is_chested": server.EntityIsChestedComponent;
    "minecraft:is_dyeable": server.EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": server.EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": server.EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": server.EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": server.EntityIsSaddledComponent;
    "minecraft:is_shaking": server.EntityIsShakingComponent;
    "minecraft:is_sheared": server.EntityIsShearedComponent;
    "minecraft:is_stackable": server.EntityIsStackableComponent;
    "minecraft:is_stunned": server.EntityIsStunnedComponent;
    "minecraft:is_tamed": server.EntityIsTamedComponent;
    "minecraft:item": server.EntityItemComponent;
    "minecraft:lava_movement": server.EntityLavaMovementComponent;
    "minecraft:leashable": server.EntityLeashableComponent;
    "minecraft:mark_variant": server.EntityMarkVariantComponent;
    "minecraft:movement": server.EntityMovementComponent;
    "minecraft:movement.amphibious": server.EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": server.EntityMovementBasicComponent;
    "minecraft:movement.fly": server.EntityMovementFlyComponent;
    "minecraft:movement.generic": server.EntityMovementGenericComponent;
    "minecraft:movement.glide": server.EntityMovementGlideComponent;
    "minecraft:movement.hover": server.EntityMovementHoverComponent;
    "minecraft:movement.jump": server.EntityMovementJumpComponent;
    "minecraft:movement.skip": server.EntityMovementSkipComponent;
    "minecraft:movement.sway": server.EntityMovementSwayComponent;
    "minecraft:navigation.climb": server.EntityNavigationClimbComponent;
    "minecraft:navigation.float": server.EntityNavigationFloatComponent;
    "minecraft:navigation.fly": server.EntityNavigationFlyComponent;
    "minecraft:navigation.generic": server.EntityNavigationGenericComponent;
    "minecraft:navigation.hover": server.EntityNavigationHoverComponent;
    "minecraft:navigation.walk": server.EntityNavigationWalkComponent;
    "minecraft:onfire": server.EntityOnFireComponent;
    "minecraft:projectile": server.EntityProjectileComponent;
    "minecraft:push_through": server.EntityPushThroughComponent;
    "minecraft:rideable": server.EntityRideableComponent;
    "minecraft:riding": server.EntityRidingComponent;
    "minecraft:scale": server.EntityScaleComponent;
    "minecraft:skin_id": server.EntitySkinIdComponent;
    "minecraft:strength": server.EntityStrengthComponent;
    "minecraft:tameable": server.EntityTameableComponent;
    "minecraft:tamemount": server.EntityTameMountComponent;
    "minecraft:type_family": server.EntityTypeFamilyComponent;
    "minecraft:underwater_movement": server.EntityUnderwaterMovementComponent;
    "minecraft:variant": server.EntityVariantComponent;
    "minecraft:wants_jockey": server.EntityWantsJockeyComponent;
  };
  type ItemComponents = {
    "minecraft:cooldown": server.ItemCooldownComponent;
    "minecraft:durability": server.ItemDurabilityComponent;
    "minecraft:enchantable": server.ItemEnchantableComponent;
    "minecraft:food": server.ItemFoodComponent;
  };
  type PlayerComponents = EntityComponents & {
    "minecraft:cursor_inventory": server.PlayerCursorInventoryComponent;
  };

  // Blocks
  interface BlockEventOptions extends server.BlockEventOptions {
    blockTypes?: BlockTypes[];
  }
  interface BlockFilter extends server.BlockFilter {
    excludeTags?: BlockTags[];
    excludeTypes?: BlockTypes[];
    includeTags?: BlockTags[];
    includeTypes?: BlockTypes[];
  }
  interface BlockFillOptions extends server.BlockFillOptions {
    blockFilter?: BlockFilter;
  }

  // Entities
  type FeedItemEffectNames = EffectTypes extends `${infer _}:${infer U}` ? U : never;
  interface FeedItemEffect extends server.FeedItemEffect {
    readonly name: FeedItemEffectNames;
  }
  interface FeedItem extends server.FeedItem {
    readonly item: ItemTypes;
    getEffects(): FeedItemEffect[];
  }
  interface EntityDefinitionFeedItem extends server.EntityDefinitionFeedItem {
    readonly item: ItemTypes;
  }
  interface EntityDataDrivenTriggerEventOptions extends server.EntityDataDrivenTriggerEventOptions {
    entityTypes?: EntityTypes[];
  }
  interface EntityEventOptions extends server.EntityEventOptions {
    entityTypes?: EntityTypes[];
  }
}

declare module "@minecraft/server" {
  interface Block {
    getTags(): ShulkerInternal.BlockTags[];
    getComponent<K extends keyof ShulkerInternal.BlockComponents>(
      component: K,
    ): ShulkerInternal.BlockComponents[K];
    hasTag(tag: ShulkerInternal.BlockTags): boolean;
    matches<T extends keyof vanilla.BlockStateMapping>(
      blockName: T,
      states?: vanilla.BlockStateMapping[T],
    ): boolean;
  }
  interface BlockRecordPlayerComponent {
    setRecord(recordItemType?: ShulkerInternal.ItemTypes, startPlaying?: boolean): void;
  }

  interface BlockRaycastOptions {
    excludeTags?: ShulkerInternal.BlockTags[];
    excludeTypes?: ShulkerInternal.BlockTypes[];
    includeTags?: ShulkerInternal.BlockTags[];
    includeTypes?: ShulkerInternal.BlockTypes[];
  }

  interface PlayerBreakBlockAfterEventSignal {
    subscribe(
      callback: (arg: PlayerBreakBlockAfterEvent) => void,
      options?: ShulkerInternal.BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
  }
  interface PlayerBreakBlockBeforeEventSignal {
    subscribe(
      callback: (arg: PlayerBreakBlockBeforeEvent) => void,
      options?: ShulkerInternal.BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
  }
  interface PlayerPlaceBlockAfterEventSignal {
    subscribe(
      callback: (arg: PlayerPlaceBlockAfterEvent) => void,
      options?: ShulkerInternal.BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
  }

  interface Camera {
    setCamera(
      cameraPreset: ShulkerInternal.CameraPresetsTypes,
      setOptions?:
        | CameraDefaultOptions
        | CameraSetFacingOptions
        | CameraSetLocationOptions
        | CameraSetPosOptions
        | CameraSetRotOptions,
    ): void;
  }

  interface Dimension {
    containsBlock(
      volume: BlockVolumeBase,
      filter: ShulkerInternal.BlockFilter,
      allowUnloadedChunks?: boolean,
    ): boolean;
    fillBlocks(
      volume: BlockVolumeBase,
      block: BlockPermutation | BlockType | ShulkerInternal.BlockTypes,
      options?: BlockFillOptions,
    ): ListBlockVolume;
    getBlocks(
      volume: BlockVolumeBase,
      filter: ShulkerInternal.BlockFilter,
      allowUnloadedChunks?: boolean,
    ): ListBlockVolume;
    getEntities(options?: EntityQueryOptions): Entity[];
    setBlockType(location: Vector3, blockType: BlockType | ShulkerInternal.BlockTypes): void;
    spawnEntity(identifier: ShulkerInternal.EntityTypes, location: Vector3): Entity;
    spawnParticle(
      effectName: bedrockts.ParticleIdentifier,
      location: Vector3,
      molangVariables?: MolangVariableMap,
    ): void;
    playSound(
      soundId: bedrockts.SoundDefinitionIdentifier,
      location: Vector3,
      soundOptions?: WorldSoundOptions,
    ): void;
  }

  interface Entity {
    playAnimation(
      animationName: bedrockts.AnimationIdentifier,
      options?: PlayAnimationOptions,
    ): void;
    getComponent<K extends keyof ShulkerInternal.EntityComponents>(
      component: K,
    ): ShulkerInternal.EntityComponents[K];
    hasComponent<K extends keyof ShulkerInternal.EntityComponents>(component: K): boolean;
    addEffect(
      effectType: ShulkerInternal.EffectTypes,
      duration: number,
      options?: EntityEffectOptions,
    ): Effect | undefined;
    removeEffect(effectType: ShulkerInternal.EffectTypes): void;
  }

  interface EntityAgeableComponent {
    getFeedItems(): ShulkerInternal.EntityDefinitionFeedItem[];
  }

  interface EntityHealableComponent {
    getFeedItems(): ShulkerInternal.FeedItem[];
  }

  interface EntityQueryOptions extends EntityFilter {
    type?: ShulkerInternal.EntityTypes;
    families?: bedrockts.TypeFamily[];
    excluedeFamilies?: bedrockts.TypeFamily[];
    excludeTypes?: ShulkerInternal.EntityTypes[];
  }
  interface DataDrivenEntityTriggerAfterEventSignal {
    subscribe(
      callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
      options?: ShulkerInternal.EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
  }
  interface EffectAddAfterEventSignal {
    subscribe(
      callback: (arg: EffectAddAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
  }
  interface EntityDieAfterEventSignal {
    subscribe(
      callback: (arg: EntityDieAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
  }
  interface EntityHealthChangedAfterEventSignal {
    subscribe(
      callback: (arg: EntityHealthChangedAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
  }
  interface EntityHitBlockAfterEventSignal {
    subscribe(
      callback: (arg: EntityHitBlockAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
  }
  interface EntityHitEntityAfterEventSignal {
    subscribe(
      callback: (arg: EntityHitEntityAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
  }
  interface EntityHurtAfterEventSignal {
    subscribe(
      callback: (arg: EntityHurtAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
  }
  interface EntityRemoveAfterEventSignal {
    subscribe(
      callback: (arg: EntityRemoveAfterEvent) => void,
      options?: ShulkerInternal.EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
  }

  interface ItemStack {
    getComponent<K extends keyof ShulkerInternal.ItemComponents>(
      component: K,
    ): ShulkerInternal.ItemComponents[K];
    getTags(): bedrockts.ItemTag[];
    hasComponent<K extends keyof ShulkerInternal.ItemComponents>(component: K): boolean;
    hasTag(tag: bedrockts.ItemTag): boolean;
    matches<T extends keyof vanilla.BlockStateMapping>(
      blockName: T,
      states?: vanilla.BlockStateMapping[T],
    ): boolean;
    setCanDestroy(blockIdentifiers?: ShulkerInternal.BlockTypes[]): void;
    setCanPlaceOn(blockIdentifiers?: ShulkerInternal.BlockTypes[]): void;
  }

  interface ItemCooldownComponent {
    isCooldownCategory(category: ShulkerInternal.CooldownCategoryTypes): boolean;
  }

  interface Player {
    getComponent<K extends keyof ShulkerInternal.PlayerComponents>(
      component: K,
    ): ShulkerInternal.PlayerComponents[K];
    hasComponent<K extends keyof ShulkerInternal.PlayerComponents>(component: K): boolean;
    getItemCooldown(cooldownCategory: ShulkerInternal.CooldownCategoryTypes): number;
    startItemCooldown(
      cooldownCategory: ShulkerInternal.CooldownCategoryTypes,
      duration: number,
    ): void;
    playMusic(trackId: bedrockts.SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
    playSound(
      soundId: bedrockts.SoundDefinitionIdentifier,
      soundOptions?: PlayerSoundOptions,
    ): void;
    queueMusic(trackId: bedrockts.SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
  }

  interface World {
    getDimension(dimensionId: ShulkerInternal.DimensionTypes): Dimension;
    getPlayers(options?: EntityQueryOptions): Player[];
    playMusic(trackId: bedrockts.SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
    playSound(
      soundId: bedrockts.SoundDefinitionIdentifier,
      location: Vector3,
      soundOptions?: WorldSoundOptions,
    ): void;
  }
}
