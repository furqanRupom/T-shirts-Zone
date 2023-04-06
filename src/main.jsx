import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:()=> fetch('shirts.json')

      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
