import "@minecraft/server";
import { ItemTag } from "bedrock-ts";
declare module "@minecraft/server" {
  type ItemComponents = {
    "minecraft:cooldown": ItemCooldownComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:food": ItemFoodComponent;
  };
  interface ItemStack {
    // TODO: constructor
    // new (item: $ItemTypes, count?: number): ItemStack;
    getComponent<K extends keyof ItemComponents>(component: K): ItemComponents[K];
    getTags(): ItemTag[];
    hasComponent<K extends keyof ItemComponents>(component: K): boolean;
    hasTag(tag: ItemTag): boolean;
    matches<T extends $BlockTypes, U = BlockStateMapping[T]>(blockName: T, states?: U): boolean;
    setCanDestroy(blockIdentifiers?: $BlockTypes[]): void;
    setCanPlaceOn(blockIdentifiers?: $BlockTypes[]): void;
  }

  interface ItemCooldownComponent {
    isCooldownCategory(category: $CooldownCategoryTypes): boolean;
  }
}
