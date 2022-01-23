let userInput = 'rocK';
let computerInput = '';

//turns a valid user input into all lower case
const getuserInput = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || 'cheat') {
        return userInput;
    } else {
        return 'ERROR: invalid input';
    }
};

//console.log(getuserInput(userInput));

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return computerInput = 'rock';

        case 1:
            return computerInput = 'paper';

        case 2:
            return computerInput = 'scissors';

    }
};

//console.log(getComputerChoice());

function determineWinner(userInput, computerInput) {
    if (userInput === computerInput) {
        return 'TIE';
    }

    if (userInput === 'rock') {
        if (computerInput === 'paper') {
            return 'CPU WINS';
        } else {
            return 'PLAYER WINS';
        }
    }

    if (userInput === 'paper') {
        if (computerInput === 'scissors') {
            return 'CPU WINS';
        } else {
            return 'PLAYER WINS';
        }
    }

    if (userInput === 'scissors') {
        if (computerInput === 'rock') {
            return 'CPU WINS';
        } else {
            return 'PLAYER WINS';
        }
    }
};

function playGame() {
    userInput = getuserInput(userInput);
    computerInput = getComputerChoice();
    if (userInput === 'cheat') {
        console.log(`${userInput} \n${computerInput}`);
        console.log('PLAYER WINS');
    } else {
        console.log(`${userInput} \n${computerInput}`);
        console.log(determineWinner(userInput, computerInput));
    }

};

playGame();