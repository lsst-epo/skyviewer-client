import { describe, expect, it } from "vitest";
import { roundToStep, simplifiedFraction } from "@/lib/utilities";

describe(roundToStep, () => {
  const input = 102.32123123;
  it("rounds to a decimal step", () => {
    const step = 0.05;

    const result = roundToStep(input, step);

    expect(result).toBe(102.3);
  });
  it("rounds to an integer by default", () => {
    const result = roundToStep(input);

    expect(result).toBe(102);
  });
});
describe(simplifiedFraction, () => {
  const numerator = 1;
  const denominator = 2;

  const result = simplifiedFraction({ numerator, denominator });

  it("gives a decimal for amounts greater equal 1", () => {
    const numerator = 1;
    const result = simplifiedFraction({ numerator, denominator: 1 });

    const [whole, decimal] = result.split(".");
    expect(parseInt(whole)).toBe(numerator);
    expect(decimal.length).toBe(1);
  });
  it("gives an integer for amounts greater equal 10", () => {
    const numerator = 10;
    const result = simplifiedFraction({ numerator, denominator: 1 });

    const [whole, decimal] = result.split(".");
    expect(parseInt(whole)).toBe(numerator);
    expect(decimal).toBe(undefined);
  });
  it("gives a simplified fraction for amounts less than 1", () => {
    const numerator = 5;
    const denominator = 1000;
    const result = simplifiedFraction({ numerator, denominator });

    const [num, denom] = result.split("/");
    expect(parseInt(num)).toBe(1);
    expect(parseInt(denom)).toBe(denominator / numerator);
  });
});
