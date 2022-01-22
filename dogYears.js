//My Age
var myAge = 21;

//the value of the first 2 dog years
var earlyYears = 2;

var earlyYears = earlyYears * 10.5

/* the years of age minus the 2 early dog years */
var laterYears = myAge - 2;

//the conversion from human to dog years
var laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

// my age in dog years
var myAgeInDogYears = earlyYears + laterYears;

//Turning my name to lower case
var myName = 'Dylan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} 
            years old in human years which is ${myAgeInDogYears} 
            years old in dog years.`);