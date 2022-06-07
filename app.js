let userScoreVariable = 0;
let computerScoreVariable = 0;
const userScoreElement = document.createElement('h2');
const computerScoreElement = document.createElement('h2');
const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const resultGrid = document.getElementById('game');

resultGrid.append(userScoreElement,computerScoreElement,userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;

const handleClick = (e) => {
    playerSelection = e.target.id;
    userChoiceDisplay.innerHTML = 'Your choice is: ' + playerSelection;
    computerPlay();
    playRound();
}

choices.forEach(choice => {
    const button = document.createElement('button');
    button.id = choice;
    button.innerHTML = choice;
    button.addEventListener('click', handleClick);
    resultGrid.appendChild(button);
});

function getRandom() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerSelection = randomChoice;
    computerChoiceDisplay.innerHTML = 'Computer choice is: ' + computerSelection;
}

function computerPlay(){
    return getRandom();
}

function won(playerSelection, computerSelection){
    resultDisplay.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`
    userScoreVariable++;
    userScoreElement.innerHTML = 'User score is: ' + userScoreVariable;
    if(userScoreVariable == 5){
        resultDisplay.innerHTML = `You are the winner!`;
    }
}

function lost(playerSelection, computerSelection){
    resultDisplay.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`
    computerScoreVariable++;
    computerScoreElement.innerHTML = 'Computer score is: ' + computerScoreVariable;
    if(computerScoreVariable == 5){
        resultDisplay.innerHTML = `You lost, the computer wins!`;
    }
}

function draw(){
    resultDisplay.innerHTML = `draw! selections are equal!`;
}

function playRound(){           
    switch(playerSelection + computerSelection){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            won(playerSelection, computerSelection);
            break;
        case 'paperscissors':    
        case 'scissorsrock':    
        case 'rockpaper':    
            lost(playerSelection, computerSelection);
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':        
            draw();
            break;
        default:
            resultDisplay.innerHTML =  "invalid option! try again!";
    }
}