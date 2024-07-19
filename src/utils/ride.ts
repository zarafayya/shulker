import { Entity, EntityRideableComponent, system, world } from "@minecraft/server";

type RideEvent = {
  rider: Entity;
  ride: Entity;
};

type RideEventHandler = (event: RideEvent) => void;

const rideMap: Map<Entity, EntityRideableComponent> = new Map();
const rideEvents = {
  onMount: new Set<RideEventHandler>(),
  onDismount: new Set<RideEventHandler>(),
};

const dimensions = ["overworld", "nether", "the_end"];
system.runInterval(() => {
  const rideComponents = dimensions
    .flatMap((dimension) => world.getDimension(dimension).getEntities({ families: ["mob"] }))
    .map((e) => e.getComponent("minecraft:rideable") as EntityRideableComponent)
    .filter((component) => component?.isValid());

  for (const rideComponent of rideComponents) {
    for (const rider of rideComponent.getRiders()) {
      if (rideMap.has(rider)) continue;
      rideEvents.onMount.forEach((f) => f({ rider, ride: rideComponent.entity }));
      rideMap.set(rider, rideComponent);
    }
  }

  rideMap.forEach((rideComp, rider) => {
    if (!rideComp.isValid() || !rideComp.getRiders().some((r) => r.id === rider.id)) {
      rideEvents.onDismount.forEach((f) => f({ rider, ride: rideComp.entity }));
      rideMap.delete(rider);
      return;
    }
  });
}, 2);

world.beforeEvents.entityRemove.subscribe(({ removedEntity }) => rideMap.delete(removedEntity));

export const rideEvent = {
  onMount: {
    subscribe: (handler: RideEventHandler) => rideEvents.onMount.add(handler),
    unsubscribe: (handler: RideEventHandler) => rideEvents.onMount.delete(handler),
  },
  onDismount: {
    subscribe: (handler: RideEventHandler) => rideEvents.onDismount.add(handler),
    unsubscribe: (handler: RideEventHandler) => rideEvents.onDismount.delete(handler),
  },
};
