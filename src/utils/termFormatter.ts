export function formatAcademicTerm(year: number, semester: 1 | 2 | 3): string {
  const semNames: Record<number, string> = { 1: 'Fall', 2: 'Spring', 3: 'Summer' };
  return `${semNames[semester]} ${year}`;
}
