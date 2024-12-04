import type { $CameraPresetsTypes } from "../../types.d.ts";

declare module "@minecraft/server" {
  interface Camera {
    setCamera(
      cameraPreset: $CameraPresetsTypes,
      setOptions?:
        | CameraDefaultOptions
        | CameraSetFacingOptions
        | CameraSetLocationOptions
        | CameraSetPosOptions
        | CameraSetRotOptions,
    ): void;
  }
}
