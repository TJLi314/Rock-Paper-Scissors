// var prompt = require('prompt-sync')();


function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1
    if (num == 1)
        return 'Rock';
    else if (num == 2)
        return 'Scissors';
    else   
        return 'Paper';
}


function playRound(player, computer) {
    if (player == computer) {
        console.log('Draw');
        return 2;
    }
    else if (player == 'Rock') {
        if (computer == 'Scissors') {
            console.log('You Win! Rock beats Scissors.');
            return 1;
        }
        else {
            console.log('You Lose! Paper beats Rock.');
            return 0;
        }
    }
    else if (player == 'Scissors') {
        if (computer == 'Paper') {
            console.log('You Win! Scissors beats Paper.');
            return 1;
        }
        else {
            console.log('You Lose! Rock beats Scissors.');
            return 0;
        }
    }  
    else {
        if (computer == 'Rock') {
            console.log('You Win! Rock beats Scissors.');
            return 1;
        }
        else {
            console.log('You Lose! Paper beats Rock.');
            return 0;
        }
    }
}

function game() {
    compCount = 0;
    playCount = 0;
    let player;
    for (let i = 1; i <= 5; i++) {
        console.log("\nRound " + i);
    
        player = prompt("What do you play? ");
    
        computer = getComputerChoice();
        console.log("Computer plays " + computer);
        
        result = playRound(player, computer);

        if (result == 1) 
            playCount++
        else if (result == 0)
            compCount++
    }
    console.log("\nFinal Score: \nYou: " + playCount + "\nComputer: " + compCount);
    if (compCount > playCount)
        console.log("Computer Wins!");
    else if (playCount > compCount)
        console.log("You win!");
    else
        console.log("Draw!");
}
game();




