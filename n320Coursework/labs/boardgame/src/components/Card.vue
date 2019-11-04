  
<template>
  <div v-bind:class="cardDiv" v-on:click="tap" v-bind:style="cardString">
    <div class="card__inner">
      <div class="card__front" />
      <div :data-emoj="card.emoj" class="card__back">
        <!-- Dynamically store emoji -->
        <h1 class="card__img">{{card.emoj}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      default: () => {}
    },
    cardString: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    cardDiv() {
      return {
        card: true,
        "card--flipped": this.card.flipped,
        "card--matched": this.card.matched
      };
    }
  },
  methods: {
    tap() {
      // matches card id with when card is tapped
      this.$emit("tapped", this.card.id);
    }
  }
};
</script>

<style lang="scss" scoped>

.card {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-height: 120%;
}
.card__inner {
  background-color: green;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;
  
}
.card--flipped .card__inner {
  transform: rotateY(180deg);
}
.card--matched .card__inner {
  animation: cardOut 0.7s;
  animation-fill-mode: both;
}
.card__back {
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.card__img {
  display: block;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.card__front {
  background-image:url(C:\Users\tavan\Projects\n320\GitHub\ntavasso.github.io\n320Coursework\labs\boardgame\src\assets\card.png);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  
}
.card__back {
  transform: rotateY(180deg);
  position: absolute;
  background-color: white;
  
}

@keyframes cardOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>