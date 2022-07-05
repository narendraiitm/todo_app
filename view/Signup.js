import FetchFunction from '../FetchFunc.js'
import ApiUrl from '../config.js'

export default {
  template: `<div>
    <input type='text' placeholder='username..' v-model='signUpData.username'/> <br />
    <input type='email' placeholder='email..' v-model='signUpData.email' /> <br />
    <input type='password' placeholder='password..' v-model='signUpData.password' /> <br />
    <button @click='SignUp'> SignUp </button>
    </div>`,

  data() {
    return {
      signUpData: {
        email: null,
        password: null,
        username: null,
      },
    }
  },

  methods: {
    SignUp() {
      const res = FetchFunction({
        url: `${ApiUrl}/users`,
        init_obj: {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.signUpData),
        },
      })

      res
        .then(() => {
          alert('User Created')
        })
        .catch((err) => {
          alert(err)
        })
    },
  },
}
