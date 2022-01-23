// Write your function here:
let age;

let lifePhase = age => {
  switch (true){
    case (age > 0 && age < 4):
      return ('baby');
    case (age > 3 && age < 13):
      return ('child');
    case (age > 12 && age < 20):
      return ('teen');
    case (age > 19 && age < 65):
      return ('adult');
    case (age > 64 && age < 141):
      return ('senior citizen');
    case (age > 140 || age < 0):
      return ('This is not a valid age')
  }
}







// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!