export function checkPrerequisites(completedCourses: string[], requiredCourses: string[]): boolean {
  return requiredCourses.every(req => completedCourses.includes(req));
}
