// var prompt = require('prompt-sync')();
const rock = document.querySelector("#Rock");
const scissors = document.querySelector('#Scissors');
const paper = document.querySelector('#Paper');

rock.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
paper.addEventListener('click', playRound);

function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1
    if (num == 1)
        return 'Rock';
    else if (num == 2)
        return 'Scissors';
    else   
        return 'Paper';
}

function playRound(e) {
    let player = e.target.id;
    let computer = getComputerChoice();

    const div = document.querySelector("#scoreboard");
    const p = document.createElement('p');
    let s = "Computer plays " + computer + ". ";

    if (player == computer) {
        s += "\n Draw";
        
    }
    else if (player == 'Rock') {
        if (computer == 'Scissors') {
            s += 'You Win! Rock beats Scissors.';
        }
        else {
            s += 'You Lose! Paper beats Rock.';
        }
    }
    else if (player == 'Scissors') {
        if (computer == 'Paper') {
            s += 'You Win! Scissors beats Paper.';
        }
        else {
            s += 'You Lose! Rock beats Scissors.';
        }
    }  
    else {
        if (computer == 'Rock') {
            s += '\nYou Win! Paper beats Rock.';
        }
        else {
            s += '\nYou Lose! Scissors beats Paper.';
        }
    }
    p.textContent = s;
    p.setAttribute('id', 'result');
    div.appendChild(p);
}

function game() {
    compCount = 0;
    playCount = 0;
    let player;
    console.log("\nRound " + i);

    player = prompt("What do you play? ");

    computer = getComputerChoice();
    console.log("Computer plays " + computer);
    
    result = playRound(player, computer);

    if (result == 1) 
        playCount++
    else if (result == 0)
        compCount++
    
    console.log("\nFinal Score: \nYou: " + playCount + "\nComputer: " + compCount);
    if (compCount > playCount)
        console.log("Computer Wins!");
    else if (playCount > compCount)
        console.log("You win!");
    else
        console.log("Draw!");
}






