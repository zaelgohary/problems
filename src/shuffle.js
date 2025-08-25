// I like playing poker, but I need to improve at shuffling cards.

// Here is my shuffling method :

// I take the card from the top to start a second pile.
// I take the next card from the top of the pile and put it under the second pile.
// I take the next card from the top of the pile and put it on top of the second pile.
// I repeat the last two steps until no card is in the first pile.
// Given the initial pile of cards, can you guess the order after my shuffling?

// Cards will be defined as strings: “Ace of Spades”, “5 of Hearts”, …



// create a function
// loop over all cards until 0
// first card starts 2nd pile arr[0]
// 2nd card after first which is arr[1]
// 3red card befre arr[0] which becomes arr[0]
// reapeat last 2 steps until no cards left


function shuffle(cards) {
  // Check if the input string is empty
  if (cards.trim().length === 0) return [];
  const cardsArr = cards.split(',').map((card) => card.trim().replace(/"/g, ''));
  var shuffled = [];
  for (let i = 0; i < cardsArr.length; i++) {
    if(i % 2 === 0){
      shuffled.push(cardsArr[i])
    } else {
      shuffled.unshift(cardsArr[i])
    }
  }

  return shuffled;
}

let cardsString = `"7 of Diamonds", "Queen of Hearts", "3 of Spades", "Ace of Clubs", "10 of Hearts", "5 of Clubs", "9 of Diamonds", "Jack of Spades", "2 of Spades", "6 of Hearts", "8 of Diamonds", "King of Spades", "4 of Clubs", "Ace of Hearts", "10 of Diamonds", "3 of Hearts"`;
console.log(shuffle(cardsString));


