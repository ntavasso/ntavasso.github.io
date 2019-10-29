  
<template>
  <div class="container">
    <div class="header">Memory Game</div>
    <button v-on:click="shuffle">Shuffle</button>

    <ul class="deck" id="card-deck">
      <li v-on:click="call" class="card" type="poop">
        <i class="pooE">💩</i>
      </li>
      <li class="card" type="smiley">
        <i class="smileyE">😁</i>
      </li>
      <li class="card" type="cry">
        <i class="cryE">😭</i>
      </li>
      <li class="card" type="dog">
        <i class="dogE">🐶</i>
      </li>
      <li class="card" type="cry">
        <i class="cryE">😭</i>
      </li>
      <li class="card" type="smiley">
        <i class="smileyE">😁</i>
      </li>
      <li class="card" type="dog">
        <i class="dogE">🐶</i>
      </li>
      <li class="card" type="poop">
        <i class="poo">💩</i>
      </li>
    </ul>

    <div class="restart" onclick="startGame()">
      <i class="fa fa-repeat"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    created() {
      
    },
    call: function() {
      this.card = document.getElementsByClassName("card");
      this.cards = [...this.card];
      this.deck = document.getElementById("card-deck");
      this.matchedCard = document.getElementsByClassName("match");
      this.openedCards = [];

      alert(this.card);
    },

    shuffle: function() {
      this.currentIndex = this.array.length, this.temporaryValue, this.randomIndex;

      while (this.currentIndex !== 0) {
        this.randomIndex = Math.floor(Math.random() * this.currentIndex);
        this.currentIndex -= 1;
        this.temporaryValue = this.array[this.currentIndex];
        this.array[this.currentIndex] = this.array[this.randomIndex];
        this.array[this.randomIndex] = this.temporaryValue;
    }

    return this.array;
    },

    startGame: function() {
      call.openedCards = [];

      call.cards = shuffle(cards);
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  list-style-type: none;
  /* opacity: 0; */
  border: 1px solid #999;
  border-radius: 4px;
  width: 200px;
  height: 190px;
  margin: 20px;
  padding: 50px;
  animation: cardBuildIn 0.7s;
  animation-fill-mode: both;
}

i {
  font-size: 100px;
}
</style>