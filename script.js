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

//shuffle-mesanje
gameCard.sort (()=> Math.random() - 0.5);


//
const gameBoard = document.getElementById("gameBoard");

//ovde kartica
gameCard.forEach(emoji => {

    //ovoo div pr
    const card= document.createElement("div");

    //kk
    card.classList.add("card");
    card.textContent="?";
    gameBoard.appendChild(card);

});





