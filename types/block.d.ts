import "@minecraft/server";
import { BlockStateMapping } from "@minecraft/vanilla-data";

declare module "@minecraft/server" {
  type BlockComponents = {
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:record_player": BlockRecordPlayerComponent;
    "minecraft:sign": BlockSignComponent;
  };
  interface Block {
    getTags(): $BlockTags[];
    getComponent<K extends keyof BlockComponents>(component: K): BlockComponents[K];
    hasTag(tag: $BlockTags): boolean;
    matches<T extends keyof BlockStateMapping, U = BlockStateMapping[T]>(
      blockName: T,
      states?: U,
    ): boolean;
    matches<T extends Record<string, string | number | boolean>, K = keyof T>(
      blockName: string,
      states?: K,
    ): T[K];
  }
  interface BlockPermutation {
    getAllStates<T extends keyof BlockStateMapping, U = BlockStateMapping[T]>(): U;
    getAllStates<T extends Record<string, string | number | boolean>>(): T;
    getState<T extends keyof BlockStateMapping, U = BlockStateMapping[T], K = keyof U>(
      stateName: K,
    ): U[K];
    getState<T extends Record<string, string | number | boolean>, K = keyof T>(stateName: K): T[K];
    matches<T extends keyof BlockStateMapping, U = BlockStateMapping[T]>(
      blockName: T,
      states?: U,
    ): boolean;
    matches<T extends Record<string, string | number | boolean>, K = keyof T>(
      blockName: string,
      states?: K,
    ): T[K];
    withState<T extends keyof BlockStateMapping, U = BlockStateMapping[T], K = keyof U>(
      stateName: K,
      value: boolean,
    ): BlockPermutation;
    withState<T extends Record<string, string | number | boolean>, K = keyof T>(
      stateName: K,
      value: T[K],
    ): BlockPermutation;
  }
  // TODO: static methods
  // namespace BlockPermutation {
  //   function resolve<T extends $BlockTypes, U = BlockStateMapping[T]>(
  //     blockId: T,
  //     states?: U,
  //   ): BlockPermutation;
  // }
  interface BlockRecordPlayerComponent {
    setRecord<T extends $ItemTypes>(recordItemType?: T, startPlaying?: boolean): void;
  }

  interface BlockRaycastOptions {
    excludeTags?: $BlockTags[];
    excludeTypes?: $BlockTypes[];
    includeTags?: $BlockTags[];
    includeTypes?: $BlockTypes[];
  }

  // Block events
  interface $BlockEventOptions extends BlockEventOptions {
    blockTypes?: $BlockTypes[];
  }
  interface PlayerBreakBlockAfterEventSignal {
    subscribe(
      callback: (arg: PlayerBreakBlockAfterEvent) => void,
      options?: $BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
  }
  interface PlayerBreakBlockBeforeEventSignal {
    subscribe(
      callback: (arg: PlayerBreakBlockBeforeEvent) => void,
      options?: $BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
  }
  interface PlayerPlaceBlockAfterEventSignal {
    subscribe(
      callback: (arg: PlayerPlaceBlockAfterEvent) => void,
      options?: $BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
  }
}
