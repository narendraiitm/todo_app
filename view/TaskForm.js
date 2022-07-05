import ApiUrl from '../config.js'
import FetchFunction from '../FetchFunc.js'

export default {
  template: `
  <div> 
    <h1> Create Task</h1>
    <input type='Text' placeholder="Title" v-model="task.title" /></br></br>
    <textarea cols="30" rows="4" placeholder="Description" v-model="task.description" /></br></br>
    <button @click="postData"> Submit </button>
  </div>`,

  data() {
    return {
      task: {
        title: null,
        description: null,
      },
    }
  },

  computed: {
    baseUrl() {
      if (this.$route.params.id) {
        return `${ApiUrl}/tasks/${this.$route.params.id}`
      } else {
        return `${ApiUrl}/tasks`
      }
    },
  },

  methods: {
    postData() {
      FetchFunction({
        url: this.baseUrl,
        init_obj: {
          method: this.$route.params.id ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.task),
        },
        authRequired: true,
      })
        .then(() => {
          alert('data successfully Inserted')
          this.$router.push({ name: 'home' })
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },

  mounted() {
    if (this.$route.params.id) {
      FetchFunction({
        url: `${ApiUrl}/tasks/${this.$route.params.id}`,
        authRequired: true,
      })
        .then((data) => {
          this.task.title = data.title
          this.task.description = data.description
          console.log(data)
        })
        .catch((err) => {
          this.error = err.message
          console.log(err)
        })
    }
  },
}
