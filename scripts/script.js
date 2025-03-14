class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    combo() {
        return this.value + this.suit;
    }
}


class Deck {
    constructor() {
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.suits = ["♠", "♥", "♦", "♣"];
        this.deck = []
    }

     createDeck() {
        for (let i = 0; i < this.values.length; i++) {
            for (let j = 0; j < this.suits.length; j++) {
                // deck.push({ suit: suits[i], value: values[j] })
                let card = new Card(this.values[i], this.suits[j]);
                deck.push(card);
            }
        }
    }
}




function shuffle() {
    for (let i = deck.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}


createDeck();
shuffle();
console.table(deck);


let drawBtn = document.getElementById("draw-btn");

let deckElement = document.getElementById("deck");


function drawCard() {
    const card = deck.pop();
    if (card)
        deckElement.textContent = card.combo();
    else
        deckElement.textContent = "No more cards!";
}



drawBtn.addEventListener("click", drawCard);
