const result = document.querySelector('#result')
const myScore = document.querySelector('#myScore')
const computerScore = document.querySelector('#computerScore')

// criando varia com let para poder alterar o valor com innerHTML

let humanScoreNumber = 0
let machineScoreNumber = 0

// humanScoreNumber -> Camel Case
// GAME_OPTIONS -> Snake Case
// ABAIXO É UMA ENUM (forma de deixar o código mais limpo caso seja muito grande)

const GAME_OPTIONS = { 
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ',', 'Alexa: ' + machine + '.')

    // quando tem um empate, ele retornará a mensagem "It was a draw"

    if (human === machine) {
        result.innerHTML = "It was a draw"
    }

    // porém quando ele ganha nas seguintes formas abaixo, retornará a mesagem "You Win"

    else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        ) { 
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "You win"
    }

    // e se por um acaso perder, retornará "You Lose"
    
    else {
        machineScoreNumber++
        computerScore.innerHTML = machineScoreNumber
        result.innerHTML = "You lose"
    }
}

// FIM :)


