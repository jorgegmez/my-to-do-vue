import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App/App'
import AddTask from '@/components/AddTask/AddTask'
import Tasks from '@/components/Tasks/Tasks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'App',
      component: App
    },
    {
      path     : '/add-task',
      name     : 'AddTask',
      component: AddTask
    },
    {
      path     : '/view-task',
      name     : 'Tasks',
      component: Tasks
    }
  ]
})
