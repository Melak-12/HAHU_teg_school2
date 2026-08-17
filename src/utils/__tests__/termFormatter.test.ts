import { formatAcademicTerm } from "../termFormatter";

describe("formatAcademicTerm", () => {
  it("formats Fall 2026 correctly", () => {
    expect(formatAcademicTerm(2026, 1)).toBe("Fall 2026");
  });
});
