import "@minecraft/server";
import { SoundDefinitionIdentifier } from "bedrock-ts";
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
