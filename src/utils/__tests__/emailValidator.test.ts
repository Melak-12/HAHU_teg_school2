import { isValidStudentEmail } from "../emailValidator";

describe("isValidStudentEmail", () => {
  it("validates university domain email format", () => {
    expect(isValidStudentEmail("student@school.edu")).toBe(true);
    expect(isValidStudentEmail("invalid-email")).toBe(false);
  });
});
