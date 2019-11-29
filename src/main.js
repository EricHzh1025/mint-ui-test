import Vue from 'vue'

import app from './App.vue'

import 'mint-ui/lib/style.css'
// import Mint from 'mint-ui';
// Vue.use(Mint);


import { Header } from 'mint-ui';

Vue.component(Header.name, Header);


var vm = new Vue({
  el:'#app',
  render:c=>c(app)
})
