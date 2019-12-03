<template>
  <div id="app">
    <div id="canvas">
      <div class="container">
        <ul>
          <h3>Appetizers</h3>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <h3>Entrees</h3>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="container">
        <ul>
          <h3>Drinks</h3>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <h3>Desserts</h3>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Item from './components/Item.vue'

export default {
  name: "app",
  components: {
    // Item
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#canvas {
  background-color: #f5e5d5;
  min-width: 1000px;
  min-height: 650px;
  margin: auto 0;
  justify-content: center;
  /* display: flex; */
}

.container {
  display: flex;
  width: 100%;
}
</style>
