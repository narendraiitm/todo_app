export default {
  template: `<div> State: {{this.$store.state.loggedIn}} <br />

  <input type='email' placeholder='email' v-model='userInfo.email' />
  <input type='password' placeholder='password' v-model='userInfo.password' />

  <button @click="loginUser(userInfo)"> Login </button><br />
  </div>`,

  data() {
    return {
      userInfo: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    //this.login() -> // this.$store.commit('login')
    ...Vuex.mapMutations(['login', 'logout']),
    ...Vuex.mapActions(['loginUser']),
  },
}
