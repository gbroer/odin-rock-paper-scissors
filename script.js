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


function getHumanChoice() {
    let humanChoice;
    while (!humanChoice) {
        let answer = prompt("Enter r for Rock, p for Paper or s for Scissors:");
        if (answer === "r") {
            humanChoice = "Rock";
            break;
        } else if (answer === "p") {
            humanChoice = "Paper";            
            break;
        } else if (answer === "s") {
            humanChoice = "Scissors";
            break;
        }
    }
}

getHumanChoice()
