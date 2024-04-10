

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
    return winner;
}

function checkWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "draw";
    } else if(playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
            return "player";
        } else if(playerChoice === "rock" && computerChoice === "paper"
        || playerChoice === "paper" && computerChoice === "scissors"
        || playerChoice === "scissors" && computerChoice === "rock") {
            return "computer";
        } else if(playerChoice > computerChoice) {
            return "player";
        } else if(computerChoice > playerChoice) {
            return "computer";
        }
}

function getResultMessage(winner) {
    if(winner === "draw") {
        return "It's a draw!";
    } else if(winner === "player") {
        return "You won!";
    } else {
        return "You lose!";
    }
}

function getGameRule(winningChoice) {
    if(winningChoice === "rock") {
        return " Rock beats scissors!";
    } else if(winningChoice === "paper") {
        return " Paper beats rock!";
    } else if(winningChoice === "scissors"){
        return " Scissors beats paper";
    } else {
        return "";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let winner = playRound(playerChoice, computerChoice);
        
        if(winner === "player") {
            playerScore++;
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner) + getGameRule(playerChoice));
        } else if(winner === "computer") {
            computerScore++;
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner) + getGameRule(computerChoice));
        } else {
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner));
        }
    }

    const finalWinner = checkWinner(playerScore, computerScore);
    const resultMessage = getResultMessage(finalWinner);
    console.log(resultMessage);


}

//playGame();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let winner = playRound(button.className, computerChoice);
        console.log("player: " + button.className);
        console.log("computer: " + computerChoice);
        console.log(winner);
    });
});

