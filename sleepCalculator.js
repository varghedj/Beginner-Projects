let getSleepHours = day => {
  day = day.toLowerCase();
  switch(day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 8;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 8;
    case 'friday':
      return 8;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
  }
};

let getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

let getIdealSleepHours = idealHours => idealHours * 7;

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHours);
  let hourDifference;

  if (actualSleepHours === idealSleepHours) {
    console.log('Good job! you got the right amount of sleep');
    return;
  } else if (actualSleepHours < idealSleepHours) {
    hourDifference = idealSleepHours - actualSleepHours;
    console.log(`You slept ${hourDifference} less than you should have. Get more sleep`);
    return;
  } else if (actualSleepHours > idealSleepHours) {
    hourDifference = actualSleepHours - idealSleepHours;
    console.log(`You slept ${hourDifference} more than you needed to`);
    return;
  }
}

let idealHours = 8;
calculateSleepDebt();