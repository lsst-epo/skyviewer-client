import { roundToStep } from "@/lib/utilities";
import { describe, expect, it } from "vitest";

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
