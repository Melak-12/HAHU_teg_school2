import { checkPrerequisites } from "../prerequisiteChecker";

describe("checkPrerequisites", () => {
  it("returns true when all required courses are completed", () => {
    expect(checkPrerequisites(["CS101", "MATH101"], ["CS101"])).toBe(true);
  });
  it("returns false when a prerequisite is missing", () => {
    expect(checkPrerequisites(["CS101"], ["CS101", "PHYS101"])).toBe(false);
  });
});
