import {
  BlockEventOptions,
  EntityDataDrivenTriggerEventOptions,
  EntityDefinitionFeedItem,
  EntityEventOptions,
  FeedItem,
  FeedItemEffect,
} from "@minecraft/server";
import {
  MinecraftBiomeTypes,
  MinecraftBlockTypes,
  MinecraftCameraPresetsTypes,
  MinecraftCooldownCategoryTypes,
  MinecraftEffectTypes,
  MinecraftEnchantmentTypes,
  MinecraftEntityTypes,
  MinecraftFeatureTypes,
  MinecraftItemTypes,
  MinecraftPotionEffectTypes,
  MinecraftPotionLiquidTypes,
  MinecraftPotionModifierTypes,
  MinecraftDimensionTypes as VanillaDimensionTypes,
} from "@minecraft/vanilla-data";

type UnionString<T extends string> = T | (string & {});

export type $BiomeTypes = `${MinecraftBiomeTypes}`;
export type $DimensionTypes = `${VanillaDimensionTypes}`;
export type $EffectTypes = `${MinecraftEffectTypes}`;
export type $EnchantmentTypes = `${MinecraftEnchantmentTypes}`;
export type $FeatureTypes = `${MinecraftFeatureTypes}`;
export type $PotionEffectTypes = `${MinecraftPotionEffectTypes}`;
export type $PotionLiquidTypes = `${MinecraftPotionLiquidTypes}`;
export type $PotionModifierTypes = `${MinecraftPotionModifierTypes}`;

export type $BlockTags = UnionString<
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
  | "minecraft:gold_tier_destructible"
  | "minecraft:iron_tier_destructible"
  | "minecraft:is_digger_item_destructible"
  | "minecraft:is_hatchet_item_destructible"
  | "minecraft:is_hoe_item_destructible"
  | "minecraft:is_mace_item_destructible"
  | "minecraft:is_pickaxe_item_destructible"
  | "minecraft:is_shears_item_destructible"
  | "minecraft:is_shovel_item_destructible"
  | "minecraft:is_sword_item_destructible"
  | "minecraft:is_tool_item_destructible"
  | "minecraft:netherite_tier_destructible"
  | "minecraft:stone_tier_destructible"
  | "minecraft:wood_tier_destructible"
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
export type $BlockTypes = UnionString<`${MinecraftBlockTypes}`>;
export type $CameraPresetsTypes = UnionString<`${MinecraftCameraPresetsTypes}`>;
export type $CooldownCategoryTypes = UnionString<`${MinecraftCooldownCategoryTypes}`>;
export type $EntityTypes = UnionString<`${MinecraftEntityTypes}`>;
export type $ItemTypes = UnionString<`${MinecraftItemTypes}`>;

// Blocks
export interface $BlockEventOptions extends BlockEventOptions {
  blockTypes?: $BlockTypes[];
}

// Entities
export interface $FeedItem extends FeedItem {
  readonly item: $ItemTypes;
  getEffects(): $FeedItemEffect[];
}
export interface $EntityDefinitionFeedItem extends EntityDefinitionFeedItem {
  readonly item: $ItemTypes;
}
export interface $FeedItemEffect extends FeedItemEffect {
  readonly name: $FeedItemEffectNames;
}
export type $FeedItemEffectNames = $EffectTypes extends `${infer _T}:${infer U}` ? U : never;
export interface $EntityDataDrivenTriggerEventOptions extends EntityDataDrivenTriggerEventOptions {
  entityTypes?: $EntityTypes[];
}
export interface $EntityEventOptions extends EntityEventOptions {
  entityTypes?: $EntityTypes[];
}
