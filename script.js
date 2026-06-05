const cards = [ 
    "😘", 
    "❤️", 
    "👯‍♀️", 
    "👩🏼‍💻",
    "🌹",
    "😻", 
    "🪄",
    "🦄"];

const gameBoard = document.getElementById("gameBoard");
const movesCounter = document.getElementById("moves");
const restartBtn = document.getElementById("restartBtn")

let firstCard = null;
let secondCard = null; 
let lockBoard = false;
let moves = 0;
let state = "playing"; //igra traje 

function startGame() {
gameBoard.innerHTML = "";

firstCard = null;
secondCard = null;
lockBoard = false;
moves = 0;
movesCounter.textContent = moves;
state="playing"; //kad kliknes restart igra ponovo krece

const gameCard = [...cards, ...cards];
gameCard.sort(() => Math.random() - 0.5);

gameCard.forEach(emoji => {
const card = document.createElement("div");
card.classList.add("card");
card.textContent = "";
card.dataset.value = emoji;
card.addEventListener("click", flipCard);
gameBoard.appendChild(card);
});
}

function flipCard() {
    if (lockBoard){
        return;
    }
    if (state === "finished") {
       return; //ako je igra zavrsena, vise nisu dozvoljeni klikovi
    }

    if (this.classList.contains("matched")) {
    return; //ako je kartica pogodjena kao par, vise nema klikova
    }
    if (this === firstCard){
        return;
    }
    this.textContent = this.dataset.value;

    if (!firstCard) {
        firstCard = this;

    } else {
        secondCard= this;
        moves++; 
        movesCounter.textContent=moves;
        checkMatch();
    }
}

function checkMatch(){
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    if(isMatch){ //ako se dve kartice poklope dobiju klasu matched
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        if(document.querySelectorAll(".matched").length === 16){ 
            state="finished"; //proveravamo da li ima 16 pogodjenih kartica, ako ima igra se zavrsava
        }
        resetCards();
    } else{
        unflipCards();
    }
}

function unflipCards() {
    lockBoard= true;
    setTimeout(() => {
    firstCard.textContent = "";
    secondCard.textContent = "";
    resetCards();
  }, 700);
}

function resetCards() {
    firstCard= null;
    secondCard =null;
    lockBoard = false;
}

restartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    startGame();
});
startGame();









