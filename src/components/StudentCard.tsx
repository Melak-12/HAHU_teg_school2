import React from "react";

export const StudentCard = ({ student }: { student: { name: string; id: string; gpa: number } }) => (
  <div className="p-4 border rounded-lg shadow-sm">
    <h3 className="font-bold">{student.name}</h3>
    <p className="text-sm text-gray-500">ID: {student.id}</p>
    <span className="text-blue-600 font-medium">GPA: {student.gpa.toFixed(2)}</span>
  </div>
);
