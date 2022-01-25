let input = 'hi nemo im dory'
let vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      if (vowels[j] === 'e' || vowels[j] === 'u') {
        resultArray.push(input[i])
        resultArray.push(input[i])
      } else {
        resultArray.push(input[i])
      }
    }
  }
}

let translate = resultArray.join('')
console.log(translate.toUpperCase())