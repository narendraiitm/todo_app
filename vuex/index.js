import FetchFunction from '../FetchFunc.js'

const store = new Vuex.Store({
  // ...
  state: {
    loggedIn: localStorage.getItem('token') ? true : false,
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    },
    logout(state) {
      state.loggedIn = false
    },
  },
  actions: {
    async loginUser({ commit }, user) {
      const res = FetchFunction(
        'http://127.0.0.1:5000/login?include_auth_token',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ email: 'user2@gmail.com', password: '1234' }),
        }
      )

      res
        .then((data) => {
          const authToken = data.response.user.authentication_token
          console.log(authToken)
          localStorage.setItem('token', authToken)
          commit('login')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logoutUser({ commit }) {
      localStorage.removeItem('token')
      commit('logout')
    },
  },
})

export default store
