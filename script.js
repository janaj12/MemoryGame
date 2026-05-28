const cards = [ 
    "😘", 
    "❤️", 
    "👯‍♀️", 
    "👩🏼‍💻",
    "🌹",
    "😻", 
    "🪄",
    "🦄"];
const gameCard=[...cards, ...cards];
gameCard.sort (()=> Math.random() - 0.5);

const gameBoard = document.getElementById("gameBoard");
const movesCounter = document.getElementById("moves");
const restartBtn = document.getElementById("restartBtn")

let firstCard = null;
let secondCard = null; 
let lockBoard = false;
let moves = 0;

gameCard.forEach(emoji => {
    const card= document.createElement("div");
    card.classList.add("card");
    card.textContent="<3";
    card.dataset.value = emoji;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (lockBoard){
        return;
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
    if (isMatch){
        resetCards();
    } else {
        unflipCards();
    }
}

function unflipCards() {
    lockBoard= true;
    setTimeout(() => {
    firstCard.textContent = "<3";
    secondCard.textContent = "<3";
    resetCards();
  }, 700);
}

function resetCards() {
    firstCard= null;
    secondCard =null;
    lockBoard = false;
}

restartBtn.addEventListener("click", function() {
location.reload();
});









