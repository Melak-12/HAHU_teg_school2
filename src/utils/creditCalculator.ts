export function calculateTotalCredits(courses: { credits: number }[]): number {
  return courses.reduce((acc, c) => acc + c.credits, 0);
}
