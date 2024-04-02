console.log("Hello World")



// run RPS between the two choices and return winning announcement
    //function parameters - playerChoice, computerChoice
    
    //if player Choice === computerChoice display a draw
    //if playerChoice is rock and computerChoice is scissors
    //or playerChoice is paper and computerChoice is rock
    //or playerChoice is scissors and computerChoice is paper display winning message
    // else display losing message


    //display message "You lose, rock beats paper"
    //playerChoice should convert to lowercase


let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);

function getPlayerChoice() {
    let playerInput = prompt("Choose rock, scissors, or paper").toLowerCase();
    let playerChoice = checkPlayerChoice(playerInput);
    return playerChoice;
}

function checkPlayerChoice(playerInput) {
    if(playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    } else {
        alert("Error, refresh the page and try again");
    }
}

function getComputerChoice() {
    const randomNumber = getRandomNumber();
    if(randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    };
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice) {
    const winner = checkWinner(playerChoice, computerChoice);
    const resultMessage = getResultMessage(playerChoice, computerChoice, winner);
    console.log(resultMessage);
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "draw";
    } else if(playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
            return "player";
        } else {
            return "computer";
        }
}

function getResultMessage(playerChoice, computerChoice, winner) {
    if(winner === "draw") {
        return "It's a draw!";
    } else if(winner === "player") {
        const gameRule = getGameRule(playerChoice);
        return "You won! " + gameRule;
    } else {
        const gameRule = getGameRule(computerChoice);
        return "You lose! " + gameRule;
    }
}

function getGameRule(winningChoice) {
    if(winningChoice === "rock") {
        return "Rock beats scissors!";
    } else if(winningChoice === "paper") {
        return "Paper beats rock!";
    } else {
        return "Scissors beats paper";
    }
}


