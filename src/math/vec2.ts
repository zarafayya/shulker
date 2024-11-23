import { Vector2 } from "@minecraft/server";

export class Vec2 implements Vector2 {
  x: number;
  y: number;

  constructor(vector2: Vector2);
  constructor(x: number, y: number);
  constructor(first: number | Vector2, y?: number) {
    if (typeof first === "object") {
      this.x = first.x;
      this.y = first.y;
    } else {
      this.x = first;
      this.y = y ?? 0;
    }
  }

  /**
   * Shorthand for writing `new Vec2(0, -1)`.
   */
  static get Down() {
    return new Vec2(0, -1);
  }
  /**
   * Shorthand for writing `new Vec2(0, 1)`.
   */
  static get Up() {
    return new Vec2(0, 1);
  }
  /**
   * Shorthand for writing `new Vec2(-1, 0)`.
   */
  static get Left() {
    return new Vec2(-1, 0);
  }
  /**
   * Shorthand for writing `new Vec2(1, 1)`.
   */
  static get One() {
    return new Vec2(1, 1);
  }
  /**
   * Shorthand for writing `new Vec2(1, 0)`.
   */
  static get Right() {
    return new Vec2(1, 0);
  }
  /**
   * Shorthand for writing `new Vec2(0, 0)`.
   */
  static get Zero() {
    return new Vec2(0, 0);
  }

  /**
   * Checks if the current vector is equal to another vector.
   *
   * @param other - The vector to compare against.
   * @returns True if the vectors are equal, false otherwise.
   */
  equals(other: Vector2): boolean {
    return this.x === other.x && this.y === other.y;
  }

  /**
   * Adds the given vector to this vector.
   *
   * @param other - The vector to be added.
   * @returns A new vector that is the sum of this vector and the given vector.
   */
  add(other: Vector2): Vec2 {
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  /**
   * Subtracts the given vector from this vector.
   *
   * @param other - The vector to be subtracted.
   * @returns A new vector that is the difference between this vector and the given vector.
   */
  subtract(other: Vector2): Vec2 {
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  /**
   * Scales the vector by the given factor.
   *
   * @param factor - The factor by which to scale the vector.
   * @returns A new vector that is the scaled version of the original vector.
   */
  scale(factor: number): Vec2 {
    return new Vec2(this.x * factor, this.y * factor);
  }

  /**
   * Calculates the dot product between this vector and another vector.
   *
   * @param other - The vector to calculate the dot product with.
   * @returns The dot product of the two vectors.
   */
  dot(other: Vector2): number {
    return this.x * other.x + this.y * other.y;
  }

  cross(other: Vector2): Vec2 {
    return new Vec2(this.y * other.x - this.x * other.y, this.x * other.y - this.y * other.x);
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
  normalize(): Vec2 {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Calculates the distance between this vector and the other vector.
   *
   * @param other - The other vector to calculate the distance to.
   * @returns The distance between the two vectors.
   */
  distanceTo(other: Vector2): number {
    return this.subtract(other).magnitude();
  }

  /**
   * Returns a new vector object with the floor value of each axis of the current vector.
   *
   * @returns A new vector object with the floor value of each axis.
   */
  floor(): Vec2 {
    return new Vec2(Math.floor(this.x), Math.floor(this.y));
  }

  toString(options?: { decimals?: number; delimiter?: string }): string {
    const decimals = options?.decimals ?? 2;
    const delimiter = options?.delimiter ?? " ";
    return [this.x, this.y].map((n) => n.toFixed(decimals)).join(delimiter);
  }
}
