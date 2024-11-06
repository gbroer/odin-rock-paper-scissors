function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum <= 1/3) {
        computerChoice = "Rock"
    } else if (2/3 > randomNum > 1/3) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    console.log(randomNum);
    console.log(computerChoice);
}

getComputerChoice();

// function getHumanChoice() {
//     let answer = prompt("Enter r for Rock, p for Paper or s for Scissors:");
//     let humanChoice;
//     if (answer === "r") {
//         humanChoice = "Rock";
//     } else if (answer === "p") {
//         humanChoice = "Paper"
//     } else if (answer === "s") {
//         humanChoice = "Scissors"
//     } else {
//         prompt("Try again. Press r, p or s:")
//     }
//     console.log(answer);
//     console.log(typeof answer);
//     console.log(humanChoice);
//     console.log(typeof humanChoice);
// }

// getHumanChoice();

function getHumanChoice() {
    let humanChoice;
    while (!humanChoice) {
        let answer = prompt("Enter r for Rock, p for Paper or s for Scissors:");
        if (answer === "r") {
            humanChoice = "Rock";
            console.log(answer);
            console.log(typeof answer);
            console.log(humanChoice);
            console.log(typeof humanChoice);
            break;
        } else if (answer === "p") {
            humanChoice = "Paper";
            console.log(answer);
            console.log(typeof answer);
            console.log(humanChoice);
            console.log(typeof humanChoice);            
            break;
        } else if (answer === "s") {
            humanChoice = "Scissors";
            console.log(answer);
            console.log(typeof answer);
            console.log(humanChoice);
            console.log(typeof humanChoice);            
            break;
        }
    }
}

getHumanChoice()
