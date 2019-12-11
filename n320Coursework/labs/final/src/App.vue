<template>
  <div id="app">
    <div id="canvas">
      <div class="container">
            <router-view></router-view>
        <ul>
          <h1>Appetizers</h1>
          <li>Breadsticks....................$3.99</li>
          <li>Salad....................$4.99</li>
          <li>Macaroni....................$9.99</li>
          <li>Soup....................$7.99</li>
        </ul>
        <ul>
          <h1>Entrees</h1>
          <li>Pizza....................$13.99</li>
          <li>Spaghetti....................$12.99</li>
          <li>Lasagna....................$14.99</li>
          <li>Ravioli....................$14.99</li>
        </ul>
      </div>
      <div class="imageWrapper">
        <img class="tomato" src="./assets/tomato.png">
        <img class="logo" src="./assets/logo.png">
        </div>
      <div class="container">
        <ul>
          <h1>Drinks</h1>
          <li>Wine....................$8.99</li>
          <li>Water....................Free</li>
        </ul>
        <ul>
          <h1>Desserts</h1>
          <li>Cake....................$8.99</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: App
    }
  ]
});

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
  background-image: url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-color: #f5e5d5; */
  min-width: 1000px;
  min-height: 650px;
  margin: auto 0;
  justify-content: center;
  /* display: flex; */
}

.container {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

h1{
  font-family: 'Lobster', cursive;
  letter-spacing: 2px;

}

ul{
  width: 300px;
  border: 1px solid black;
  list-style-type: none;
  letter-spacing: 2px;
  font-family: 'Lobster', cursive;
  text-align: left;

}

ul li{
  padding-bottom: 20px;
  padding-right: 20px;
}

.imageWrapper{
  position: absolute;
  top: 0;
  left: 33%;
  width: 500px;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;   
}

.imageWrapper .tomato{
  /* background-color: #2c3e50; */
  height: 400px;
  width: 500px;
}
.imageWrapper .logo{
  margin-top: -100px;
  width: 500px;
}
</style>
