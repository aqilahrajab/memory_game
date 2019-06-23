var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
cardsInPlay.push(cards[2]);

function CheckForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cards) {
console.log("User flipped " + cards);
console.log(CheckForMatch);
};

/*
if (cardsInPLay.length === 2){ 
 alert("You found a match!")
	} else { 
	  alert("Sorry, try again")
};
*/

