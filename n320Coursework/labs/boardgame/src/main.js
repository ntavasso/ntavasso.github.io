import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Card from "./components/Card.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Card }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
