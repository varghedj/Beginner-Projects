// Write your function here:
let finalGrade = (grade1, grade2, grade3) => {
  let avg = (grade1 + grade2 + grade3) / 3;

  switch (true) {
    case(grade1 < 0 || grade1 > 100):
      return 'You have entered an invalid grade.';
    case(grade2 < 0 || grade2 > 100):
      return 'You have entered an invalid grade.';
    case(grade3 < 0 || grade3 > 100):
      return 'You have entered an invalid grade.';
  }

  switch (true) {
    case (avg >= 0 && avg <= 59):
      return 'F';
    case (avg >= 60 && avg <= 69):
      return 'D';
    case (avg >= 70 && avg <= 79):
      return 'C';
    case (avg >= 80 && avg <= 89):
      return 'B';
    case (avg >= 90 && avg <= 100):
      return 'A';
  }
}