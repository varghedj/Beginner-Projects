// Write your function here:
let howOld = (age, year) => {
  let currentYear = 2019;
  let birthYear = currentYear - age;
  let yearDif = year - currentYear;
  let ageDif = age + yearDif

  switch (true) {
    //future case
    case (yearDif > 0 && ageDif > 0):
      return `You will be ${ageDif} in the year ${year}`;
    //past case #1 (before birth year)
    case (yearDif <= 0 && ageDif < 0):
      return `The year ${year} was ${birthYear - year} years before you were born`
    //past case #2 (after birth year)
    case (yearDif <= 0 && ageDif >= 0):
      return `You were ${yearDif + age} in the year ${year}`
  }
}