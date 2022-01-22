// This is today's forecast in K
let temperature = window.prompt("what is the current temperature in F");
let kelvin = 293;

// kelvin to celsius conversion
let celsius = kelvin - 273;

// celsius to fahrenheit conversion
let fahrenheit = celsius * (9/5) + 32;

//rounds F value down to nearest whole number
fahrenheit = Math.floor(fahrenheit);

//converts C to Newton
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} Newtons`);