const cards = [ 
    "😘", 
    "❤️", 
    "👯‍♀️", 
    "👩🏼‍💻",
    "🌹",
    "😻", 
    "🪄",
    "🦄"];

//dupliranjee spread operator
const gameCard=[...cards, ...cards];
//mesanje karata shuffle
gameCard.sort (()=> Math.random() - 0.5);

//uzimamoo board 
const gameBoard = document.getElementById("gameBoard");
const movesCounter = document.getElementById("moves");
let firstCard = null;
let secondCard = null; 
let lockBoard = false;
let moves=0;


//ovde kartice pravimo
gameCard.forEach(emoji => {

    //ovoo jee div prr
    const card= document.createElement("div");

    //klasu smo dodali
    card.classList.add("card");

    //NAS POCETNI ZNAAK
    card.textContent="<3";

    // cuvamo emoji
    card.dataset.value = emoji;

    // Klik na event
    card.addEventListener("click", flipCard);

    //dodavanje u boar
    gameBoard.appendChild(card);

});

function flipCard() {
    //ako je lockBoard true nema klika

    if (lockBoard){
        return;
    }
    if (this === firstCard){
        return;
    }

    //otvaranje kartice
    this.textContent = this.dataset.value;

    //ako nema prva kartica
    if (!firstCard) {
        firstCard = this;

    } else {
        secondCard= this;
        checkMatch();
    }
}
//Match logika, provera para
function checkMatch(){
    //uporedjuje dva elementa
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch){
        resetCards();
    } else {
        unflipCards();
    }
}
//Zatvaranje kartica
function unflipCards() {
    lockBoard= true;
    setTimeout(() => {

    // Vraćanje <3
    firstCard.textContent = "<3";
    secondCard.textContent = "<3";
    // Reset
    resetCards();
  }, 700);
}

function resetCards() {
    firstCard= null;
    secondCard =null;
    lockBoard = false;
    let moves=0;

}









