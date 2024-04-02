console.log("Hello World")

// get player choice via prompt - getPlayerChoice
// get computer choice at random -getComputerChoice

// run RPS between the two choices and return winning announcement
    //function parameters - playerChoice, computerChoice
    
    //if player Choice === computerChoice display a draw
    //if playerChoice is rock and computerChoice is scissors
    //or playerChoice is paper and computerChoice is rock
    //or playerChoice is scissors and computerChoice is paper display winning message
    // else display losing message


    //display message "You lose, rock beats paper"
    //playerChoice should convert to lowercase

function getPlayerChoice() {
    let playerInput = prompt("Choose rock, scissors, or paper").toLowerCase();
    let playerChoice = checkPlayerChoice(playerInput);
    console.log(playerChoice);
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

