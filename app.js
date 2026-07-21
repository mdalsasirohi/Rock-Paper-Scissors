// start button
let start = document.querySelector(".start");

// choice text variables declaration
let youDisplay = document.querySelector(".youchoice");
let compDisplay = document.querySelector(".compchoice");
let userScore = document.querySelector(".youscore");
let compScore = document.querySelector(".compscore");
let i ;  //user score
let j ;  //computer score

// user's choice
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

//choices
let userChoice;
let compChoice;

//initial scores
userScore.innerText = 0;
compScore.innerText = 0;

//disable icons
const buttons = document.querySelectorAll(".icons button");

buttons.forEach(button => {
    button.disabled = true;
});

//comp choice function 
function getCompChoice(){
    let comp= Math.floor(Math.random()*3)
    if(comp === 0){
        return "rock";
    }
    else if(comp === 1){
        return "paper";
    }
    else{
        return "scissors"
    }
};
// function for game play
function playGame(){
    compChoice = getCompChoice();

    //inner text update
    youDisplay.innerText = userChoice;
    compDisplay.innerText = compChoice;

    // comparison and score update
    if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "paper") || (userChoice === "paper" && compChoice === "rock")){
        i++;
        userScore.innerText = i;
    }
    else if((userChoice === "rock" && compChoice ==="paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")){
        j++;
        compScore.innerText = j;
    }
    
}

// user choice
rock.addEventListener("click",()=>{
    userChoice="rock";
    playGame();
})
paper.addEventListener("click",()=>{
    userChoice="paper";
    playGame();
})
scissors.addEventListener("click",()=>{
    userChoice="scissors";
    playGame();
})

// START AND RESET BUTTONS
start.addEventListener("click",()=>{
    if (start.innerText==="START"){
        start.innerText = "RESET";
        buttons.forEach(button => {
            button.disabled = false;
        });
        i=0;
        j=0;
    }
    else if(start.innerText==="RESET"){
        buttons.forEach(button => {
            button.disabled = true;
        });
        start.innerText = "START";
        i=0;
        j=0;
        userScore.innerText = 0;
        compScore.innerText = 0;
        youDisplay.innerText = "";
        compDisplay.innerText = "";
    }   
})







