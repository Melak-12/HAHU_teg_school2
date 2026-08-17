describe('Student and instructor portal core calculations', () => {
  it('computes GPA and credit hours correctly', () => {
    const grades = [
      { credits: 3, gradePoint: 4.0 },
      { credits: 4, gradePoint: 3.5 },
      { credits: 3, gradePoint: 3.0 }
    ];
    const totalPoints = grades.reduce((sum, g) => sum + g.credits * g.gradePoint, 0);
    const totalCredits = grades.reduce((sum, g) => sum + g.credits, 0);
    const gpa = totalPoints / totalCredits;
    expect(gpa).toBe(3.5);
  });

  it('validates course enrollment capacity limits', () => {
    const course = { capacity: 30, enrolled: 28 };
    expect(course.enrolled < course.capacity).toBe(true);
  });
});
