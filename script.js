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