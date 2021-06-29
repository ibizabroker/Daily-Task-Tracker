import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks  = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch tasks
  async function fetchTasks() {
    const res = await fetch('http://localhost:9000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch task
  async function fetchTask(id) {
    const res = await fetch(`http://localhost:9000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add task
  async function addTask(task) {
    const res = await fetch('http://localhost:9000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  // Delete task
  async function deleteTask(id) {
    await fetch(`http://localhost:9000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Setting reminder
  async function toggleReminder(id) {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:9000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    }) 
    
    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
        
        <Route path = '/' exact render = {(props) => (
          <>
            {showAddTask && <AddTask onAdd = {addTask} />} {/*Ternary operator without else*/}
            {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />) : ('No Tasks to show')}
          </>
        )} />
        <Route path = '/about' component = {About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;