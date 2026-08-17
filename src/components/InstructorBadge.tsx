import React from "react";

export const InstructorBadge = ({ department, title }: { department: string; title: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
    {title} • {department}
  </span>
);
