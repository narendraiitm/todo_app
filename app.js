import footerComp from './components/FooterComp.js'
import MainComp from './components/MainComp.js'
import Main from './components/Main.js'
import router from './router/index.js'

Vue.component('header-comp', {
  template: `<div> Hello from the header
  </div>`,
})

const vm = new Vue({
  el: '#app',
  template: `<div>
      <header-comp></header-comp>
      <Main />
      <footer-comp></footer-comp>
  </div>`,
  data: {},
  components: {
    'footer-comp': footerComp,
    'main-comp': MainComp,
    Main,
  },
  router,
})
