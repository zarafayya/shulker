import { Vector3 } from "@minecraft/server";
import { describe, expect, it } from "vitest";
import { Vec3 } from "./vec3.js";

describe("Vec3", () => {
  const v1 = new Vec3(1, 2, 3);
  const v2 = new Vec3(4, 5, 6);

  it("successfully compares vectors", () => {
    const v3: Vector3 = { x: 1, y: 2, z: 3 };
    expect(v1.equals(v3)).toBe(true);
    expect(v1.equals(v2)).toBe(false);
  });

  it("successfully adds vectors and returns a new vector", () => {
    const result = v1.add(v2);
    expect(result).toEqual({ x: 5, y: 7, z: 9 });
    expect(result).not.toBe(v1);
  });

  it("successfully subtracts vectors and returns a new vector", () => {
    const result = v1.subtract(v2);
    expect(result).toEqual({ x: -3, y: -3, z: -3 });
    expect(result).not.toBe(v1);
  });

  it("successfully scales a vector and returns a new vector", () => {
    const result = v1.scale(2);
    expect(result).toEqual({ x: 2, y: 4, z: 6 });
    expect(result).not.toBe(v1);
  });

  it("successfully computes the dot product of a vector", () => {
    const result = v1.dot(v2);
    expect(result).toBe(32);
  });

  it("successfully computes the dot product of a vector with a 0 vector", () => {
    const result = v1.dot(new Vec3(0, 0, 0));
    expect(result).toBe(0);
  });

  it("successfully computes the cross product of a vector and returns a new vector", () => {
    const result = v1.cross(v2);
    expect(result).toEqual({ x: -3, y: 6, z: -3 });
    expect(result).not.toBe(v1);
    expect(result).not.toBe(v2);
  });

  it("returns a zero vector for a cross product of parallel vectors", () => {
    const result = new Vec3(3, 0, 0).cross(new Vec3(7, 0, 0));
    expect(result).toEqual({ x: 0, y: 0, z: 0 });
  });

  it("returns a zero vector for a cross product of with a zero vector", () => {
    const result = v1.cross(new Vec3(0, 0, 0));
    expect(result).toEqual({ x: 0, y: 0, z: 0 });
    expect(result).not.toBe(v1);
  });

  it("returns the unit z vector for a cross product of unit x and unit y vectors", () => {
    const result = new Vec3(1, 0, 0).cross(new Vec3(0, 1, 0));
    expect(result).toEqual({ x: 0, y: 0, z: 1 });
  });

  it("calculates the magnitude", () => {
    const result = v1.magnitude();
    expect(result).toBeCloseTo(3.74, 2);
  });

  it("computes the floor of the vector", () => {
    const input = new Vec3(1.33, 2.14, 3.55);
    const expected = new Vec3(1, 2, 3);
    expect(input.floor()).toEqual(expected);
  });

  it("computes the floor of negative vectors", () => {
    const input = new Vec3(-1.33, -2.14, -3.55);
    const expected = new Vec3(-2, -3, -4);
    expect(input.floor()).toEqual(expected);
  });

  it("normalizes the vector", () => {
    const result = v1.normalize();
    expect(result.x).toBeCloseTo(0.27, 2);
    expect(result.y).toBeCloseTo(0.53, 2);
    expect(result.z).toBeCloseTo(0.8, 2);
  });

  it("converts a vector to a string with default options", () => {
    const vector = new Vec3(1, 2, 3);
    const expectedString = "1.00 2.00 3.00";
    expect(vector.toString()).toBe(expectedString);
    expect(vector.toString(undefined)).toBe(expectedString);
    expect(vector.toString({ decimals: undefined, delimiter: undefined })).toBe(expectedString);
  });

  it("converts a vector to a string with overridden options", () => {
    const vector = new Vec3(1.23456789, 2.99, 3);
    const expectedString1 = "1.2346|2.9900|3.0000";
    expect(vector.toString({ decimals: 4, delimiter: "|" })).toBe(expectedString1);
    const expectedString2 = "1|3|3";
    expect(vector.toString({ decimals: 0, delimiter: "|" })).toBe(expectedString2);
    const expectedString3 = "1 3 3";
    expect(vector.toString({ decimals: 0 })).toBe(expectedString3);
    const expectedString4 = "1.23|2.99|3.00";
    expect(vector.toString({ delimiter: "|" })).toBe(expectedString4);
  });
});
