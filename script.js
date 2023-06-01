const moves = ['rock','paper','sciccors']

rockRound = () => {
    playround(getComputerChoice(),"rock");
    
}

paperRound = () => {
    playround(getComputerChoice(),"paper");
}

sciccorsRound = () => 
    playround(getComputerChoice(),"sciccors");

//this resets the boxes every time
//Narrowed down all the .getElementById's to 1 QuerySelector!!!!
function resetMakeUp(){
    //document.getElementById("computerRock").style.backgroundColor= "white";
    //document.getElementById("paperStart").style.backgroundColor= "white";
    //document.getElementById("computerPaper").style.backgroundColor= "white";
    //document.getElementById("rockStart").style.backgroundColor= "white";
    //document.getElementById("computerSciccors").style.backgroundColor= "white";
    //document.getElementById("sciccorsStart").style.backgroundColor= "white";
    document.querySelectorAll(".playerChoices input, .computerChoices").forEach(elem => {elem.style.backgroundColor= "white";});
    document.getElementById("resultMessage").innerHTML = "The first one to win 5 times wins the game";
}

// this function can take all input buttons 
function playround(a,b){
    resetMakeUp();
    round(a,b);
    console.log("Playerscore:"+ " " +  playerScore + " " + "-----" + " Computerscore:" + " " + computerScore);
    if (playerScore === 5 ){
            document.getElementById("resultMessage").innerHTML= "You're a god";
            document.getElementById("playAgain").innerHTML= "Play Again";
            console.log(" Winner winner Chicken dinner");
            document.querySelectorAll(".playerChoices input").forEach(elem => {elem.disabled = true;});
        } else if (computerScore === 5){
            document.getElementById("resultMessage").innerHTML= "You're dogshit";
            document.getElementById("playAgain").innerHTML= "Try Again";
            console.log("The computer is smarter then you");
            document.querySelectorAll(".playerChoices input").forEach(elem => {elem.disabled = true;});
         }
        }

//reset the game
function refreshPage(){
    window.location.reload();
} 

//Call this function for pc choise
function getComputerChoice(){
    return moves[Math.floor(Math.random()*moves.length)];}

  
//Call this function for user choise
function getPlayerSelection(){
     return prompt("What move did you choose?");
}

let computerScore = 0;
let playerScore = 0;

//  if tie
//  if computereslection is rock * ppsel is rock, make rock blue 
//
//


    //start  round(getComputerChoice(),getPlayerSelection()) generates fresh values every game
function round(computerSelection,playerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
      if (computerSelection === playerSelection){
                console.log("                It's a tie!            ")
                document.getElementById("resultMessage").innerHTML= "TIE";
                if (computerSelection === "rock" && playerSelection === "rock"){
                    document.querySelectorAll("#computerRockID, #rockStart").forEach(elem => {elem.style.backgroundColor= "blue";})
                } else if (computerSelection === "paper" && playerSelection === "paper"){
                    document.querySelectorAll("#computerPaperID, #paperStart").forEach(elem => {elem.style.backgroundColor= "blue";})
                } else if (computerSelection === "sciccors" && playerSelection === "sciccors") {
                    document.querySelectorAll("#computerSciccorsID, #sciccorsStart").forEach(elem => {elem.style.backgroundColor= "blue";})
                }
                return "It's a tie!";


        }   else if ( computerSelection === "rock" && playerSelection == "paper"){
                document.getElementById("computerRock").style.backgroundColor= "red";
                document.getElementById("paperStart").style.backgroundColor= "green";
                 playerScore = playerScore +1;
                 document.getElementById("playerScoree").innerHTML= playerScore;
                return "You Win!";


        }   else if (computerSelection === "paper" && playerSelection == "sciccors"){
                document.getElementById("computerPaper").style.backgroundColor= "red";
                document.getElementById("sciccorsStart").style.backgroundColor= "green";
                playerScore = playerScore +1;
                document.getElementById("playerScoree").innerHTML= playerScore;
               
                return "You Win!";

        }   else if (computerSelection === "sciccors" && playerSelection == "rock"){
                 document.getElementById("computerSciccors").style.backgroundColor= "red";
                 document.getElementById("rockStart").style.backgroundColor= "green";
                 playerScore = playerScore +1;
                 document.getElementById("playerScoree").innerHTML= playerScore;

                return "You Win!";

        }   else {
                computerScore = computerScore +1;
                document.getElementById("computerScoree").innerHTML= computerScore;
                if (computerSelection === "paper" && playerSelection === "rock"){
                    document.getElementById("rockStart").style.backgroundColor = "red";
                    document.getElementById("computerPaperID").style.backgroundColor = "green";
                } else if (computerSelection === "rock" && playerSelection === "sciccors"){
                    document.getElementById("computerRockID").style.backgroundColor = "green";
                    document.getElementById("sciccorsStart").style.backgroundColor = "red";
                } else if (computerSelection === "sciccors" && playerSelection === "paper") {
                    document.getElementById("computerSciccorsID").style.backgroundColor = "green";
                    document.getElementById("paperStart").style.backgroundColor = "red";  
                }
                return computerSelection +  " beats"+" " + playerSelection + ", you lose!";
    }
}


// This was the old function to play a game of 5 rounds
//function game() {
//    computerScore = 0;
//    playerScore = 0;
//    do {
//        console.log(round(getComputerChoice(), getPlayerSelection()));
//        console.log("Playerscore:" + " " + playerScore + " " + "-----" + " Computerscore:" + " " + computerScore);
//        if (playerScore === 5) {
//            console.log(" Winner winner Chicken dinner")
//        } else if (computerScore === 5) {
//            console.log("The computer is smarter then you")
//        }
//    } while (playerScore < 5 && computerScore < 5)
//}

   
    
//start
//let user pick by input
//pc pick by random function if (playerScore === "5"){
//          console.log("The player has won!");
//  } if (computerScore ==="5"){
//          console.log("The computer has won!");
//    }

//calc who wins
//read out who wins
