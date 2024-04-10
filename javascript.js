const buttons = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const scores = document.createElement("p");
const announcement = document.createElement("p");
const gameResult = document.createElement("p");

const playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play again?";

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
};

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let winner = checkWinner(playerChoice, computerChoice);
    countScore(winner);
    console.log(playerChoice);
    console.log(computerChoice);
    displayRoundResults(winner, playerChoice, computerChoice);
}


buttons.forEach((button) => {
    button.addEventListener("click", function playGame() {
        //disables rock scissors paper buttons after game ends
        if(confirmGameOver(playerScore, computerScore) === "over") return

        let playerChoice = button.getAttribute("id");
        playRound(playerChoice);

        if(confirmGameOver(playerScore, computerScore) === "over") {
            const finalWinner = checkWinner(playerScore, computerScore);
            const resultMessage = getResultMessage(finalWinner);
            gameResult.textContent = resultMessage;
            container.appendChild(gameResult);
            container.appendChild(playAgainButton);

        };
    });
});



function displayRoundResults(winner, playerChoice, computerChoice){
    if(winner === "player") {
            scores.textContent = "Player: " + playerScore + " Computer: " + computerScore;
            announcement.textContent = getResultMessage(winner) + getGameRule(playerChoice);
        } else if(winner === "computer") {
            scores.textContent = "Player: " + playerScore + " Computer: " + computerScore;
            announcement.textContent = getResultMessage(winner) + getGameRule(computerChoice);
        } else {
            scores.textContent = "Player: " + playerScore + " Computer: " + computerScore;
            announcement.textContent = getResultMessage(winner);
        };
    container.appendChild(scores);
    container.appendChild(announcement);
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

playAgainButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    container.removeChild(scores);
    container.removeChild(announcement);
    container.removeChild(gameResult);
    container.removeChild(playAgainButton);
})