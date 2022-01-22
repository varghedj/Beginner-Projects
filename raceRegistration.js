let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let runnerAge = 18;

if (runnerAge > 18 && early) {
  raceNumber += 1000;
}


if (runnerAge > 18 && early) {
  console.log('Your race starts at 9:30 am.');
  console.log(`Your race number is ${raceNumber}`);
} else if (runnerAge > 18 && early === false) {
  console.log('Your race starts at 11:00 am.');
  console.log(`Your race number is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log('Your race starts at 12:30 pm')
  console.log(`Your race number is ${raceNumber}`);
} else {
  console.log('Please Check in with the front desk')
}