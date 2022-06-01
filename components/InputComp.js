export default {
  template: `<div>
       <input type='text' placeholder='Input the task ..' :value = value @input="$emit('input', $event.target.value)"></input>
       <button @click="$emit('addTask')"> Add Task </button>
    </div>`,
  props: ['value'],
}
