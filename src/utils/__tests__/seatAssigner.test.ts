import { assignExamSeats } from "../seatAssigner";

describe("assignExamSeats", () => {
  it("assigns sequential seats with room prefix", () => {
    const res = assignExamSeats(["S1", "S2"]);
    expect(res).toEqual([{ studentId: "S1", seat: "R-1" }, { studentId: "S2", seat: "R-2" }]);
  });
});
