//set variables that store both the computer choice and player choice
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
//puts the whole script in a function to allow replay.
function playGame() {
    function playRound() {
        //Create a function that randomly selects Rock, Paper, or Scissors as a computer output to go against human player using the randomNumber variable
        function getComputerChoice () {
            //take the random number and output rock paper or scissors based on the number
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    computerChoice = "scissors";
                    break;
                case 1:
                    computerChoice = "rock";
                    break;
                case 2:
                    computerChoice = "paper";
            };
        };
        //Initiate the function and store the output in the computerChoice variable
        getComputerChoice();


        //create a function that prompts the user to input their value and stores in in the variable playerChoice
        function getPlayerChoice() {
            let text;
            while(true) { //Creates a loop to check if the correct option was altered otherwise re does prompt
                //puts options to check against into an array
                const options = ['rock' , 'paper' , 'scissors']
                text = prompt("Rock, Paper, or Scissors?").toLowerCase();

                if (options.includes(text)) {
                    break;
                } else {
                    alert("Incorrect input, try again.");
                }
            }
            playerChoice = text;
            
        }

        getPlayerChoice();

        //creates a function to test each option and outputs the winner

        function results() {
            console.log("You picked" + " " + playerChoice);
            console.log("The computer picked" + " " + computerChoice);

            if (playerChoice === computerChoice) {
                alert("It's a tie!");
            }else if (computerChoice == "rock" && playerChoice == "paper" 
                || computerChoice == "paper" && playerChoice == "scissors"
                || computerChoice == "scissors" && playerChoice == "rock") {
                    alert("You win!");
                    playerScore++;
            }else {
                alert("You lose!");
                computerScore++;
            }
        }

        results();
    }
    for (i = 0; i <= 4; i++) {
        playRound();
        document.getElementById("person-score").innerHTML = "Your score is: " + playerScore;
        document.getElementById("computer-score").innerHTML = "The computer's score is: " + computerScore; 
    }
}
playGame();