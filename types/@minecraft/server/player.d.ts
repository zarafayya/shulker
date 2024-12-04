import { SoundDefinitionIdentifier } from "bedrock-ts";
import type { $CooldownCategoryTypes } from "../../types.d.ts";

declare module "@minecraft/server" {
  type PlayerComponents = EntityComponents & {
    "minecraft:cursor_inventory": PlayerCursorInventoryComponent;
  };
  interface Player {
    getComponent<K extends keyof PlayerComponents>(component: K): PlayerComponents[K];
    hasComponent<K extends keyof PlayerComponents>(component: K): boolean;
    getItemCooldown(cooldownCategory: $CooldownCategoryTypes): number;
    startItemCooldown(cooldownCategory: $CooldownCategoryTypes, duration: number): void;
    playMusic(trackId: SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
    playSound(soundId: SoundDefinitionIdentifier, soundOptions?: PlayerSoundOptions): void;
    queueMusic(trackId: SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
  }
}
