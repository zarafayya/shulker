import { Vector3 } from "@minecraft/server";

export class Vec3 implements Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(vector3: Vector3);
  constructor(x: number, y: number, z: number);
  constructor(first: number | Vector3, y?: number, z?: number) {
    if (typeof first === "object") {
      this.x = first.x;
      this.y = first.y;
      this.z = first.z;
    } else {
      this.x = first;
      this.y = y ?? 0;
      this.z = z ?? 0;
    }
  }

  /**
   * Checks if the current vector is equal to another vector.
   *
   * @param other - The vector to compare against.
   * @returns True if the vectors are equal, false otherwise.
   */
  equals(other: Vector3): boolean {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  /**
   * Adds the given vector to this vector.
   *
   * @param other - The vector to be added.
   * @returns A new vector that is the sum of this vector and the given vector.
   */
  add(other: Vector3): Vec3 {
    return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  /**
   * Subtracts the given vector from this vector.
   *
   * @param other - The vector to be subtracted.
   * @returns A new vector that is the difference between this vector and the given vector.
   */
  subtract(other: Vector3): Vec3 {
    return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Scales the vector by the given factor.
   *
   * @param factor - The factor by which to scale the vector.
   * @returns A new vector that is the scaled version of the original vector.
   */
  scale(factor: number): Vec3 {
    return new Vec3(this.x * factor, this.y * factor, this.z * factor);
  }

  /**
   * Calculates the dot product between this vector and another vector.
   *
   * @param other - The vector to calculate the dot product with.
   * @returns The dot product of the two vectors.
   */
  dot(other: Vector3): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  /**
   * Calculates the cross product between this vector and another vector.
   *
   * @param other - The vector to calculate the cross product with.
   * @returns The cross product of the two vectors.
   */
  cross(other: Vector3): Vec3 {
    return new Vec3(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x,
    );
  }

  /**
   * Calculates the magnitude of the vector.
   *
   * @returns The magnitude of the vector.
   */
  magnitude(): number {
    return Math.sqrt(this.dot(this));
  }

  /**
   * Normalizes the vector by scaling it to have a magnitude of 1.
   *
   * @returns The normalized vector.
   */
  normalize(): Vec3 {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Returns a new vector object with the floor value of each axis of the current vector.
   *
   * @returns A new vector object with the floor value of each axis.
   */
  floor(): Vec3 {
    return new Vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z));
  }

  toString(options?: { decimals?: number; delimiter?: string }): string {
    const decimals = options?.decimals ?? 2;
    const delimiter = options?.delimiter ?? " ";
    return [this.x, this.y, this.z].map((n) => n.toFixed(decimals)).join(delimiter);
  }
}
