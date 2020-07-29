const buttons = document.querySelectorAll(".choice");
const yourScore = document.querySelector(".your-score");
const compScore = document.querySelector(".computer-score")
const compChoice = document.querySelector(".computer-choices")

function makePlay(button) {
    let computerChoice = buttons[Math.floor(Math.random()*buttons.length)].id;
    compChoice.textContent = `Computer's choice was ${computerChoice}`;



if(button.id == computerChoice){
    console.log("DRAW")
} else if (button.id == "rock" && computerChoice == "scissors" ||
            button.id == "paper" && computerChoice == "rock" ||
            button.id == "scissors" && computerChoice == "paper"){
                yourScore.textContent = parseInt(yourScore.textContent) + 1; 
            } else {
                compScore.textContent = parseInt(compScore.textContent) + 1;
            };          
        let yourFinalScore = parseInt(yourScore.textContent);
        let compFinalScore= parseInt(compScore.textContent); 

        if((yourFinalScore + compFinalScore) >= 5) {
            if (yourFinalScore > compFinalScore) {
                alert(`You win ${yourFinalScore} to ${compFinalScore}`);
            } else {
                alert(`You lose ${yourFinalScore} to ${compFinalScore}`);
            }
            compScore.textContent = 0;
            yourScore.textContent = 0;
        }
    };
    
        buttons.forEach((e)=>{
        e.addEventListener("click", ()=> {
        makePlay(e);
        });
       
    });