
let deck = []
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

const values = [
  "Ace",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
]


for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);

  }
}



let sorted = function(deck) {
  for (let i = 0; i < deck.length; i++) {
  j = random()
  temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}

}

let random = function() {
  return Math.floor(Math.random() * deck.length)

}

sorted(deck)
console.log(deck)