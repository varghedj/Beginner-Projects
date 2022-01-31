const team = {
  _players: [
    {
      firstName: 'Player',
      lastName: '1',
      age: 21
    },
    {
      firstName: 'Oldest',
      lastName: 'Sibiling',
      age: '22'
    },
    {
      firstName: 'Pablo',
      lastName: 'The Penguin',
      age: 6
    }],
  _games: [
    {
      opponent: 'Donkeys',
      teamPoints: 2,
      opponentPoints: 1
    },
    {
      opponent: 'Chipmunks',
      teamPoints: 6,
      opponentPoints: 4
    },
    {
      opponent: 'Birds',
      teamPoints: 3,
      opponentPoints: 5
    }],
    
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },

    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player)
    },

    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game)
    }
}
// console.log(team.players)
// console.log(team.games)
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players)

team.addGame('Wizards', 12, 6)
console.log(team.games)