import FetchFunction from '../FetchFunc.js'
import ApiUrl from '../config.js'
import Error from '../components/Error.js'
import Wait from '../components/Wait.js'

export default {
  template: `
  <div> 
    <Error v-if="error" :error="error" />
    <div v-else-if="task">
       <h2>{{task.title}}</h2>
       <h6> {{task.creation_date}}</h6>
       <div>
         {{task.description}}
       </div>
       <div id="task-buttons">
          <button @click="updateTask(taskId)"> Edit Task</button>
          <button> Mark As Read</button>
          <button @click="deleteTask"> Delete Task</button>
       </div>
    </div>
    <Wait v-else />
  </div>`,

  data() {
    return {
      taskId: this.$route.params.id,
      task: null,
      error: null,
    }
  },

  components: {
    Wait,
    Error,
  },

  methods: {
    updateTask(taskId) {
      /**
       *
       */
      this.$router.push({ name: 'update', params: { id: taskId } })
    },
    deleteTask() {
      const sure = confirm('Are you sure?')
      if (sure) {
        FetchFunction(`${ApiUrl}/tasks/${this.taskId}`, {
          method: 'DELETE',
        })
          .then(() => {
            alert('Successfully Deleted')
            this.$router.push({ name: 'home' })
          })
          .catch((err) => {
            console.log(err.message)
          })
      }
    },
    addTaskArray() {
      this.taskArray.push(this.taskItem)
      this.taskItem = ''
    },
  },

  mounted() {
    FetchFunction(`${ApiUrl}/tasks/${this.taskId}`, {})
      .then((data) => {
        this.task = data
        console.log(data)
      })
      .catch((err) => {
        this.error = err.message
        console.log(err)
      })
  },
}
