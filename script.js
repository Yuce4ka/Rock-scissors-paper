
function displayChoice(){
    const mainImage=document.getElementById("mainImage")
    const displayChoice=document.getElementById("displayChoice");
    const mainChoice=document.getElementById("mainChoice");
    const footerDisplay=document.getElementById("commonDisplay")
    displayChoice.style.display="none";
    mainChoice.style.display="grid";
    mainImage.style.display="none";
    mainChoice.classList.add("styleCreation");
    footerDisplay.style.display="block"
    footerDisplay.classList.add("footerDisplay");
}

//Shake animations

window.onload = function() {
    const image = document.getElementById("rightImage");
    const image2 = document.getElementById("leftImage");
    image.classList.add("shake");
    image2.classList.add("shake");

    
    function stopShake() {
        image.classList.remove("shake");
        image2.classList.remove("shake");
    }

    
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", stopShake);
    });
};


// Game
const choices=['rock','scissors', 'paper'];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
let result='';
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const playerImage = document.getElementById("rightImage");
    const computerImage=document.getElementById("leftImage");
    playerImage.src = `./pictures/${playerChoice}.png`;
    computerImage.src = `./pictures/${computerChoice}.png`;
    
    
    if(playerChoice===computerChoice){
        result="IT'S TIE"
    }else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="scissors")? "YOU WIN" : "YOU LOSE";
                break;
             case "scissors":
                result=(computerChoice==="paper")? "YOU WIN" : "YOU LOSE";
                break; 
            case "paper":
                result=(computerChoice==="rock")? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    

    switch(result){
        case "YOU WIN":
            resultDisplay.classList.remove("redText");  
            resultDisplay.classList.add("greenText");
        break;
        case "YOU LOSE":
            resultDisplay.classList.remove("greenText"); 
            resultDisplay.classList.add("redText");     
        break;
        case "IT'S TIE":
            resultDisplay.classList.remove("redText", "greenText");
            
    
            break;
    }
}

