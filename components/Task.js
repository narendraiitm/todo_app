export default {
  template: `<li><span> {{taskData}} </span> <button @click="$emit('deleteTask', index)"> Delete Me </button></li>`,
  props: ['taskData', 'index'],
}
