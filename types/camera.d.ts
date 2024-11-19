import "@minecraft/server";
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
