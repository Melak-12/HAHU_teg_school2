import React from "react";

export const DepartmentSelector = ({ departments, selected, onSelect }: { departments: string[]; selected: string; onSelect: (dept: string) => void }) => (
  <select value={selected} onChange={(e) => onSelect(e.target.value)} className="px-3 py-2 border rounded">
    {departments.map(d => <option key={d} value={d}>{d}</option>)}
  </select>
);
