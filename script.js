// create function to get computer's choice
// get random number between 0 and 1
// if random number is below 1/3, computer's choice is rock
// if random number is between 1/3 and 2/3, computer's choice is paper
// if random number is over 2/3, computer's choice is scissors

function getComputerChoice() {
    let randomNum = Math.random();
    let computerChoice = "";
    if (randomNum <= 1/3) {
        computerChoice = "Rock";
    } else if (2/3 > randomNum > 1/3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


// create function to get human's choice
// prompt user to enter "rock", "paper" of "scissors"
// check lowercase version of answer
// if answer is not "rock", "paper" or "scissors", prompt again
// if answer is "rock", "paper" or "scissors" assign corresponding value to variable humanChoice

function getHumanChoice() {
    let humanChoice = "";
    while (!humanChoice) {
        let answer = prompt("Rock, paper or scissors?");
        if (answer.toLowerCase() === "rock") {
            humanChoice = "Rock";
        } else if (answer.toLowerCase() === "paper") {
            humanChoice = "Paper";            
        } else if (answer.toLowerCase() === "scissors") {
            humanChoice = "Scissors";
        }
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


// create function to play 1 round
// compare human's and computer's choices
// rock beats scissors, paper beats rock, scissors beats paper
// log the winner of the round
// add 1 to the score of the winner. 

function playRound() {
    switch (getComputerChoice()) {
        case "Rock":
            switch (getHumanChoice()) {
                case "Rock":
                    console.log("It's a tie, no point awarded.");
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Paper":
                    console.log("Player wins, paper beats rock!.");
                    humanScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Scissors":
                    console.log("Computer wins, rock beats scissors!");
                    computerScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
            }
            break;
        case "Paper":
            switch (getHumanChoice()) {
                case "Rock":
                    console.log("Computer wins, paper beats rock!");
                    computerScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Paper":
                    console.log("It's a tie, no point awarded.");
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Scissors":
                    console.log("Player wins, scissors beat paper!");
                    humanScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
            }
            break;
        case "Scissors":
            switch (getHumanChoice()) {
                case "Rock":
                    console.log("Player wins, rock beats scissors!");
                    humanScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Paper":
                    console.log("Computer wins, scissors beat paper!");
                    computerScore++;
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
                case "Scissors":
                    console.log("It's a tie, no point awarded.");
                    console.log(`Score: Player ${humanScore} - ${computerScore} Computer`);
                    break;
            }
            break;
    }
}

// create function to play a game of 5 rounds

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();
