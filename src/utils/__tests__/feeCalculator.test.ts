import { computeTuition } from "../feeCalculator";

describe("computeTuition", () => {
  it("applies 20% scholarship correctly", () => {
    expect(computeTuition(1000, 20)).toBe(800);
  });
  it("returns full base fee if no scholarship", () => {
    expect(computeTuition(1200, 0)).toBe(1200);
  });
});
