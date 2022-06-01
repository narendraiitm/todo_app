import footerComp from './components/FooterComp.js'
import MainComp from './components/MainComp.js'

Vue.component('header-comp', {
  template: `<div> Hello from the header
  <footer-comp></footer-comp>
  </div>`,
})

const vm = new Vue({
  el: '#app',
  template: `<div>
      <header-comp></header-comp>
      <main-comp></main-comp>
      <footer-comp></footer-comp>
  </div>`,
  data: {},
  components: {
    'footer-comp': footerComp,
    'main-comp': MainComp,
  },
})
