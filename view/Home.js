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
    // deleteTaskMethod(taskId) {
    //   FetchFunction(`http://172.19.152.200:5001/api/tasks/${taskId}`, {
    //     method: 'DELETE',
    //   })
    //     .then(() => {
    //       alert('Successfully Deleted')
    //     })
    //     .catch((err) => {
    //       console.log(err.message)
    //     })
    // },
    // addTaskArray() {
    //   this.taskArray.push(this.taskItem)
    //   this.taskItem = ''
    // },
  },

  mounted() {
    FetchFunction(`${ApiUrl}/tasks`, {})
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
