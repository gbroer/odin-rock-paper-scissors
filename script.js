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
}

let humanScore = 0;
let computerScore = 0;
