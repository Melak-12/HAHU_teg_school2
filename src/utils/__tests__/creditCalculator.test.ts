import { calculateTotalCredits } from "../creditCalculator";

describe("calculateTotalCredits", () => {
  it("sums array of course credits", () => {
    expect(calculateTotalCredits([{ credits: 3 }, { credits: 4 }, { credits: 2 }])).toBe(9);
  });
});
