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
        this.pack = this.createPack();
    }

     createPack() {
        let temp = [];
        for (let i = 0; i < this.values.length; i++) {
            for (let j = 0; j < this.suits.length; j++) {
                // deck.push({ suit: suits[i], value: values[j] })
                let card = new Card(this.values[i], this.suits[j]);
                temp.push(card);
            }
        }
        return temp;
    }

    shuffle() {
        for (let i = this.pack.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pack[i], this.pack[j]] = [this.pack[j], this.pack[i]];
        }
    }

    getCard() {
        return this.pack.pop();
    }
}

let deck = new Deck();
deck.shuffle();
console.table(deck.pack);

let drawBtn = document.getElementById("draw-btn");
let deckElement = document.getElementById("deck");

function drawCard() {
    const card = deck.getCard();
    const cardCombo = card.combo();
    if (card) { 
        if (cardCombo.includes("♥") || cardCombo.includes("♦"))
            deckElement.style.color = "red";
        else 
            deckElement.style.color = "black";
        deckElement.textContent = cardCombo;
    } else
        deckElement.textContent = "No more cards!";
}

drawBtn.addEventListener("click", drawCard);
