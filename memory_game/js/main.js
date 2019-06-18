var cards = ["queen", "queen", "king", "king"];
var cardsInPLay = [];
var cardOne = cards[1];
var cardTwo = cards[4];
cardsInPLay.push("cardOne");
cardsInPLay.push("cardTwo");
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log(cardsInPLay.length);

if (cardsInPLay.length === 2){ 
 alert("You found a match!")
	} else { 
	  alert("Sorry, try again")
};


