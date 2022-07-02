import Task from '../view/Task.js'
import Home from '../view/Home.js'
import TaskForm from '../view/TaskForm.js'
import Login from '../view/Login.js'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/create_task', name: 'createTask', component: TaskForm },
  { path: '/task/:id', name: 'task', component: Task },
  { path: '/update/:id', name: 'update', component: TaskForm },
  { path: '/login', name: 'login', component: Login },
]

const router = new VueRouter({
  routes,
})

export default router
