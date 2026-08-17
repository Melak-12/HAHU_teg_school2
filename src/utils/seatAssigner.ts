export function assignExamSeats(studentIds: string[], roomPrefix: string = "R"): { studentId: string; seat: string }[] {
  return studentIds.map((id, index) => ({ studentId: id, seat:  }));
}
