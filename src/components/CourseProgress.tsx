import React from "react";

export const CourseProgress = ({ completedWeeks, totalWeeks }: { completedWeeks: number; totalWeeks: number }) => {
  const pct = Math.min(100, Math.round((completedWeeks / totalWeeks) * 100));
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width:  }}></div>
    </div>
  );
};
