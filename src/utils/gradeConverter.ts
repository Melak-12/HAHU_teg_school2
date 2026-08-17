export function letterToPoint(letter: string): number {
  const map: Record<string, number> = { A: 4.0, "A-": 3.75, "B+": 3.5, B: 3.0, "B-": 2.75, "C+": 2.5, C: 2.0, D: 1.0, F: 0.0 };
  return map[letter.toUpperCase()] ?? 0.0;
}
