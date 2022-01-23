let numberDigits = (x) => {
  switch(true) {
    case (x < 10 && x > -1):
      return `One digit: ${x}`
    case (x < 100 && x > 9):
      return `Two digits: ${x}`
    default:
      return `The number is: ${x}`
  }
}