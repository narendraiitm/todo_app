export default {
  template: `<li><span> {{taskData.title}} </span> <button @click="$emit('deleteTask', taskData.id)"> Delete </button></li>`,
  props: ['taskData'],
}
