const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (pokemon of pokemonList) {
  if(pokemon === 'Yoshi') {
    continue
  }
  console.log(`You caught a ${pokemon}!`)
}