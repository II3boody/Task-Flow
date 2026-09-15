import { useState, useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Tasks from "./Pages/Tasks/Tasks"
import Error from "./Pages/Error/Error"
import Home from "./Pages/Home/Home"
import type { Task } from "./Types/Task/Task"

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks")

    if (savedTasks) {
      return JSON.parse(savedTasks) as Task[]
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        {
          index: true, element: <Home />,
        },
        { path: "/dashboard", element: <Dashboard tasks={tasks} /> },
        { path: '/tasks', element: <Tasks tasks={tasks} setTasks={setTasks} /> },
        { path: '*', element: <Error /> }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}
