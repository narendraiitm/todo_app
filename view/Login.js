export default {
  template: `<div> State: {{this.$store.state.loggedIn}} <br />
  <button @click="loginUser"> Login </button>
  <button @click="logoutUser"> Logout </button>
  </div>`,

  methods: {
    //this.login() -> // this.$store.commit('login')
    ...Vuex.mapMutations(['login', 'logout']),
    ...Vuex.mapActions(['loginUser', 'logoutUser']),
  },
}
