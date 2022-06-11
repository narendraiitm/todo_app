import InputComp from './InputComp.js'
import Task from './Task.js'
import FetchFunction from '../FetchFunc.js'
import Wait from './Wait.js'
import Error from './Error.js'

export default {
  template: `<div>
  <Error v-if="error" :error="error"></Error>
  <div v-else-if="taskArray">
  <input-comp v-model='taskItem.title' @addTask='addTaskArray'/>
     <ol>
     <task v-for="(task, index) in taskArray" :taskData = 'task' @deleteTask = 'deleteTaskMethod'/>
     </ol>
     <button @click="postData"> Post Task</button>
  </div>
  
  <Wait v-else></Wait>
  </div>`,
  components: {
    task: Task,
    'input-comp': InputComp,
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
    deleteTaskMethod(taskId) {
      FetchFunction(`http://172.19.152.200:5001/api/tasks/${taskId}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert('Successfully Deleted')
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    addTaskArray() {
      this.taskArray.push(this.taskItem)
      this.taskItem = ''
    },
    postData() {
        this.taskItem={
          title: 'Todays Tast 2',
          description: 'Description for tdas task',
        }
      FetchFunction('http://172.19.152.200:5001/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.taskItem),
      })
        .then(() => {
            this.addTaskArray()
          alert('data successfully Inserted')
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },

  mounted() {
    FetchFunction('http://172.19.152.200:5001/api/tasks', {})
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
