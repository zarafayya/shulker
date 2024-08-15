import { Vector2 } from "@minecraft/server";
import { describe, expect, it } from "vitest";
import { Vec2 } from "./vec2.js";

describe("Vec2", () => {
  const v1 = new Vec2(1, 2);
  const v2 = new Vec2(4, 5);

  it("successfully compares vectors", () => {
    const v3: Vector2 = { x: 1, y: 2 };
    expect(v1.equals(v3)).toBe(true);
    expect(v1.equals(v2)).toBe(false);
  });

  it("successfully adds vectors and returns a new vector", () => {
    const result = v1.add(v2);
    expect(result).toEqual({ x: 5, y: 7 });
    expect(result).not.toBe(v1);
  });

  it("successfully subtracts vectors and returns a new vector", () => {
    const result = v1.subtract(v2);
    expect(result).toEqual({ x: -3, y: -3 });
    expect(result).not.toBe(v1);
  });

  it("successfully scales a vector and returns a new vector", () => {
    const result = v1.scale(2);
    expect(result).toEqual({ x: 2, y: 4 });
    expect(result).not.toBe(v1);
  });

  it("successfully computes the dot product of a vector", () => {
    const result = v1.dot(v2);
    expect(result).toBe(14);
  });

  it("returns a zero vector for a cross product of parallel vectors", () => {
    const result = new Vec2(3, 0).cross(new Vec2(7, 0));
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it("returns a zero vector for a cross product of with a zero vector", () => {
    const result = v1.cross(new Vec2(0, 0));
    expect(result).toEqual({ x: 0, y: 0 });
    expect(result).not.toBe(v1);
  });

  it("calculates the magnitude", () => {
    const result = v1.magnitude();
    expect(result).toBeCloseTo(2.236, 2);
  });

  it("computes the floor of the vector", () => {
    const input = new Vec2(1.33, 2.14);
    const expected = new Vec2(1, 2);
    expect(input.floor()).toEqual(expected);
  });

  it("computes the floor of negative vectors", () => {
    const input = new Vec2(-1.33, -2.14);
    const expected = new Vec2(-2, -3);
    expect(input.floor()).toEqual(expected);
  });

  it("normalizes the vector", () => {
    const result = v1.normalize();
    expect(result.x).toBeCloseTo(0.447, 2);
    expect(result.y).toBeCloseTo(0.894, 2);
  });

  it("calculates the distance between two vectors", () => {
    const result = v1.distanceTo(v2);
    expect(result).toBe(4.242640687119285);
  });

  it("converts a vector to a string with default options", () => {
    const vector = new Vec2(1, 2);
    const expectedString = "1.00 2.00";
    expect(vector.toString()).toBe(expectedString);
    expect(vector.toString(undefined)).toBe(expectedString);
    expect(vector.toString({ decimals: undefined, delimiter: undefined })).toBe(expectedString);
  });

  it("converts a vector to a string with overridden options", () => {
    const vector = new Vec2(1.23456789, 2.99);
    const expectedString1 = "1.2346|2.9900";
    expect(vector.toString({ decimals: 4, delimiter: "|" })).toBe(expectedString1);
    const expectedString2 = "1|3";
    expect(vector.toString({ decimals: 0, delimiter: "|" })).toBe(expectedString2);
    const expectedString3 = "1 3";
    expect(vector.toString({ decimals: 0 })).toBe(expectedString3);
    const expectedString4 = "1.23|2.99";
    expect(vector.toString({ delimiter: "|" })).toBe(expectedString4);
  });
});
