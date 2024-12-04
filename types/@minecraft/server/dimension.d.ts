import { ParticleIdentifier, SoundDefinitionIdentifier } from "bedrock-ts";
import type { $EntityTypes } from "../../types.d.ts";

declare module "@minecraft/server" {
  interface Dimension {
    spawnEntity(identifier: $EntityTypes, location: Vector3): Entity;
    spawnParticle(
      effectName: ParticleIdentifier,
      location: Vector3,
      molangVariables?: MolangVariableMap,
    ): void;
    playSound(
      soundId: SoundDefinitionIdentifier,
      location: Vector3,
      soundOptions?: WorldSoundOptions,
    ): void;
  }
}
