import { letterToPoint } from "../gradeConverter";

describe("letterToPoint", () => {
  it("converts A to 4.0", () => {
    expect(letterToPoint("A")).toBe(4.0);
  });
  it("converts B+ to 3.5", () => {
    expect(letterToPoint("B+")).toBe(3.5);
  });
});
