export default {
  template: `<div> 
  Hello from the header
  <span id='logout' @click='logoutUser'> logout </span>
  </div>`,
  methods: {
    ...Vuex.mapActions(['logoutUser']),
  },
}
