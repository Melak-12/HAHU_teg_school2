import React from "react";

export const ScheduleGrid = ({ slots }: { slots: { time: string; course: string; room: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    {slots.map((s, idx) => (
      <div key={idx} className="p-3 bg-gray-50 rounded border">
        <div className="text-xs text-gray-500">{s.time}</div>
        <div className="font-semibold">{s.course}</div>
        <div className="text-xs text-gray-600">Room: {s.room}</div>
      </div>
    ))}
  </div>
);
