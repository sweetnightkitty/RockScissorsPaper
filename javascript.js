let computerScore = 0;
let playerScore = 0;

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



    // const finalWinner = checkWinner(playerScore, computerScore);
    // const resultMessage = getResultMessage(finalWinner);
    // console.log(resultMessage);





const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function playGame() {
        let computerChoice = getComputerChoice();
        let playerChoice = button.className;
        let winner = playRound(playerChoice, computerChoice);
        countScore(winner);
        displayRoundResults(winner, playerChoice, computerChoice); // displays before score goes up

        if(confirmGameOver(playerScore, computerScore) === "over") {
            const finalWinner = checkWinner(playerScore, computerScore);
            const resultMessage = getResultMessage(finalWinner);
            console.log(resultMessage);
            //remove event listener?
        };
    });
});



function displayRoundResults(winner, playerChoice, computerChoice){
    if(winner === "player") {
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner) + getGameRule(playerChoice));
        } else if(winner === "computer") {
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner) + getGameRule(computerChoice));
        } else {
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            console.log(getResultMessage(winner));
        }
};







function countScore(winner) {
    if(winner === "player") {
        playerScore++;
    } else if(winner === "computer") {
        computerScore++;
    };
};



function confirmGameOver(playerScore, computerScore) {
    if(playerScore === 5 || computerScore === 5) return "over";
};