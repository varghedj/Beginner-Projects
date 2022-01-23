// Write your function here:
let tipCalculator = (qual, total) => {
  total = total * 1.0;
  switch(qual) {
    case('bad'):
      return total * .05;
    case('ok'):
      return total * .15;
    case('good'):
      return total*.2;
    case('excellent'):
      return total * .3;
    default:
      return total * .18;
  }
}