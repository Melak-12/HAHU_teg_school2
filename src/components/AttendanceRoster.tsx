import React from "react";

export const AttendanceRoster = ({ records }: { records: { studentName: string; present: boolean }[] }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead><tr><th>Student</th><th>Status</th></tr></thead>
    <tbody>
      {records.map((r, i) => (
        <tr key={i}><td>{r.studentName}</td><td>{r.present ? "Present" : "Absent"}</td></tr>
      ))}
    </tbody>
  </table>
);
