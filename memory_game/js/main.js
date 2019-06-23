// Define the card variable for each card and link to the image in the folder.
var cards = [

{
rank:"Queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png",
},
{
rank:"Queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png",
},
{
rank:"King",
suit:"hearts",
cardImage:"images/king-of-hearts.png",
},
{
rank:"King",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png",
}
];
 
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click',flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  
  function CheckForMatch() {
  var cardId = this.setAttribute('src',cards[cardId].rank);
  if (cardsInPlay.length === 2) {
  } if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  cardsInPlay = [];
  
  } else {
    alert("Sorry, try again");
    cardsInPlay = [];
  }
  }
  };

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(card[cardId].rank);
  cardsInPlay.push(cards[cardId.id]);
  console.log("User flipped " + cards.rank);
  console.log(cards.cardImage);
  console.log(cards.suit);


var cardsInPlay = [];

