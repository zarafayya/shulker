import { SoundDefinitionIdentifier } from "bedrock-ts";
import type { $DimensionTypes } from "../../types.d.ts";

declare module "@minecraft/server" {
  interface World {
    getDimension(dimensionId: $DimensionTypes): Dimension;
    playMusic(trackId: SoundDefinitionIdentifier, musicOptions?: MusicOptions): void;
    playSound(
      soundId: SoundDefinitionIdentifier,
      location: Vector3,
      soundOptions?: WorldSoundOptions,
    ): void;
  }
}
