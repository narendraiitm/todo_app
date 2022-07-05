import footerComp from './components/FooterComp.js'
import MainComp from './components/MainComp.js'
import Main from './components/Main.js'
import router from './router/index.js'
import store from './vuex/index.js'
import Header from './components/Header.js'

const vm = new Vue({
  el: '#app',
  template: `<div>
      <Header />
      <Main />
      <footer-comp></footer-comp>
  </div>`,
  data: {},
  components: {
    'footer-comp': footerComp,
    Main,
    Header,
  },
  router,
  store,
})
