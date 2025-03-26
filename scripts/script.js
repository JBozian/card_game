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

let deckElement = document.getElementById("deck");
let body = document.body;

function drawCard() {
    const card = deck.getCard();
    if (card) { 
        const cardCombo = card.combo();
        let divElement = document.createElement("div");
        divElement.className = "card";
        if (cardCombo.includes("♥") || cardCombo.includes("♦"))
            divElement.style.color = "red";
        else 
        divElement.style.color = "black";
    divElement.textContent = cardCombo;
    body.appendChild(divElement);
    } else
        deckElement.textContent = "No more cards!";
}

let drawBtn = document.getElementById("draw-btn");
drawBtn.addEventListener("click", drawCard);
