import InputComp from './InputComp.js'
import Task from './Task.js'

export default {
  template: `<div>
  <input-comp v-model='taskItem' @addTask='addTaskArray'/>
     <ol>
     <task v-for="(item, index) in taskArray" :taskData = 'item' :index = 'index' @deleteTask = 'deleteTaskMethod'/>
     </ol>
  </div>`,
  components: {
    task: Task,
    'input-comp': InputComp,
  },

  data() {
    return {
      taskArray: [],
      taskItem: '',
    }
  },
  methods: {
    deleteTaskMethod(taskIndex) {
      this.taskArray.splice(taskIndex, 1)
    },
    addTaskArray() {
      this.taskArray.push(this.taskItem)
      this.taskItem = ''
    },
  },
}
