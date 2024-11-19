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

declare module "@minecraft/server" {
  type $BiomeTypes = `${MinecraftBiomeTypes}`;
  type $DimensionTypes = `${VanillaDimensionTypes}`;
  type $EffectTypes = `${MinecraftEffectTypes}`;
  type $EnchantmentTypes = `${MinecraftEnchantmentTypes}`;
  type $FeatureTypes = `${MinecraftFeatureTypes}`;
  type $PotionEffectTypes = `${MinecraftPotionEffectTypes}`;
  type $PotionLiquidTypes = `${MinecraftPotionLiquidTypes}`;
  type $PotionModifierTypes = `${MinecraftPotionModifierTypes}`;

  type $BlockTags = UnionString<
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
  type $BlockTypes = UnionString<`${MinecraftBlockTypes}`>;
  type $CameraPresetsTypes = UnionString<`${MinecraftCameraPresetsTypes}`>;
  type $CooldownCategoryTypes = UnionString<`${MinecraftCooldownCategoryTypes}`>;
  type $EntityTypes = UnionString<`${MinecraftEntityTypes}`>;
  type $ItemTypes = UnionString<`${MinecraftItemTypes}`>;
}
