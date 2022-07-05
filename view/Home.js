import Task from '../components/Task.js'
import FetchFunction from '../FetchFunc.js'
import Wait from '../components/Wait.js'
import Error from '../components/Error.js'
import ApiUrl from '../config.js'

export default {
  template: `<div>
  <Error v-if="error" :error="error"></Error>
  <div v-else-if="taskArray">
     <ol>
     <task v-for="(task, index) in taskArray" :taskData = 'task' :key="index"/>
     </ol>

     <div>
       <button @click="createTask"> Create New Task </button>
     </div>
     <div>
     </div>
  </div>
  
  <Wait v-else></Wait>
  </div>`,
  components: {
    task: Task,
    Error,
    Wait,
  },

  data() {
    return {
      taskArray: null,
      taskItem: '',
      error: null,
    }
  },
  methods: {
    createTask() {
      this.$router.push({ name: 'createTask' })
    },
  },

  mounted() {
    if (this.$store.state.loggedIn === false) {
      this.$router.push({ name: 'login' })
    }
    FetchFunction({ url: `${ApiUrl}/tasks`, authRequired: true })
      .then((data) => {
        console.log(data)
        this.taskArray = data
      })
      .catch((err) => {
        this.error = err.message
        console.log(err.message)
      })
  },
}
