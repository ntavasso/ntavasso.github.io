<template>
  <div id="app">
    <div class="title">
      <h1>Memory Game</h1>
    </div>
    <div v-if="gameOver" class="gover">Game Over</div>

    <div class="buttonDiv">
      <!-- restart button  -->
      <button v-on:click="restart" class="button">Restart game</button>
    </div>
    <!-- Grid of cards -->
    <section class="grid">
      <!-- card element -->
      <!-- binding components from card -->
      <Card
        v-for="card in theCards"
        v-bind:key="card.id"
        v-bind:card="card"
        v-bind:cardTransform="cardTransform"
        v-on:tapped="cardTapped"
      />
    </section>
  </div>
</template>

<script>
// bring in card component
import Card from "./components/Card.vue";
//create the card face values
const emojis = ["😂", "💩", "😎", "🤐", "🤡", "😁", "🥳", "💀"];
// empty array for deck of cards
const deck = [];
emojis.forEach(item => {
  const card = {
    emoj: item,
    flipped: false,
    id: `${item}-a`,
    matched: false
  };
  // first card
  const cardA = card;
  deck.push(cardA);
  // second card
  const cardB = { ...card };
  cardB.id = `${item}-b`;
  deck.push(cardB);
});
//shuffle function
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
//sets up the game
function setUp() {
  shuffle(deck);
  return {
    totalFlips: 0,
    theCards: deck,
    flipsThisTurn: 0,
    turnCount: 0,
    firstFlipID: null,
    firstFlipEmoj: null,
    cardTransform: null
  };
}
export default {
  name: "App",
  gameOver: false,

  components: {
    Card
  },
  data() {
    return setUp();
  },
  methods: {
    incrementFlipsThisTurn() {
      this.flipsThisTurn++;
    },
    cardTapped(tappedCardID) {
      // store a copy of the card data as tappedCard
      const tappedCard = this.theCards.find(obj => obj.id === tappedCardID);
      if (tappedCard.flipped) {
        return;
      }
      // Increment flip count for this turn
      this.incrementFlipsThisTurn();
      if (this.flipsThisTurn === 1) {
        this.runTurn1(tappedCard);
      }
      if (this.flipsThisTurn === 2) {
        this.runTurn2(tappedCard);
      }
    },
    runTurn1(tappedCard) {
      // flip the card face up
      this.flipCard(tappedCard.id);
      // store ID and emoji icon of first flipped card
      this.firstFlipID = tappedCard.id;
      this.firstFlipEmoj = tappedCard.emoj;
    },
    runTurn2(tappedCard) {
      // flip the card face up
      this.flipCard(tappedCard.id);
      this.checkMatch(tappedCard);
    },
    checkMatch(tappedCard) {
      // check match
      setTimeout(() => {
        if (tappedCard.emoj === this.firstFlipEmoj) {
          // reset flips counter, keeps game going
          this.flipsThisTurn = 0;
          // update the 2 cards 'matched' prop
          const newCards = this.theCards.map(card =>
            [tappedCard.id, this.firstFlipID].includes(card.id)
              ? { ...card, matched: true }
              : card
          );
          this.theCards = newCards;
        } else {
          // Not a match
          // Turn both cards back face down
          this.flipCard(tappedCard.id);
          this.flipCard(this.firstFlipID);
          this.flipsThisTurn = 0;
        }
        // increment count
        this.turnCount++;
      }, 1000);
    },
    flipCard(tappedCardID) {
      const newCards = this.theCards.map(card =>
        card.id === tappedCardID ? { ...card, flipped: !card.flipped } : card
      );
      // update the cards
      this.theCards = newCards;
      
    },
    //restart the game
    restart() {
      Object.assign(this.$data, setUp());
    }
  }
};
</script>

<style lang="scss">
body {
  background-image: url(C:\Users\tavan\Projects\n320\GitHub\ntavasso.github.io\n320Coursework\labs\boardgame\src\assets\green.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  padding: 0;
  margin: 0;
  font-size: 15px;
}
.buttonDiv {
  display: flex;
  justify-content: center;
}
.button {
  appearance: none;
  background: transparent;
  border: 2px solid white;
  color: white;
  font: 11px / 1 arial;
  letter-spacing: 0.3px;
  padding: 4px 12px;
  height: 24px;
  border-radius: 10px;
}
.button:active {
  color: green;
  background-color: white;
}
.title {
  display: flex;
  justify-content: center;
}
.grid {
  list-style: none;
  margin-top: 20px;
  margin-left: 250px;
  margin-right: 150px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: calc(100vw -80px);
  height: calc(100vh - 100px);
}
</style>
