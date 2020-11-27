



deck = ["1Ace", "2Clubs", "5diamonds"]
newDeck = []



let shuffleArray = function(array) {
  for (let i = deck.length; i > 0; i--) {
    randomN = Math.floor(Math.random() * array.length)
    ele = array[randomN]
    delete array[randomN]
    newDeck.push(ele)
  }
}
deck = ["1Ace", "2Clubs", "5diamonds"]
shuffleArray(deck)
console.log(newDeck)


/*
let getElement = function(request) {
 num = Math.floor(Math.random() * deck.length)
  return deck.slice(num, 1)[0]

}
