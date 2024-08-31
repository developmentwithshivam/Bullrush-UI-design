import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './OtherPages/Home.jsx';
import Blog from './OtherPages/Blog.jsx'
import Leaderboard from './OtherPages/Leaderboard.jsx';
import Trive from './OtherPages/Trive.jsx';
import FAQ from './OtherPages/FAQ.jsx';
import Login from './OtherPages/Login.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      // {
      //   path:'',
      //   element:<Home/>
      // },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/trive',
        element:<Trive/>
      },
      {
        path:'/Leaderboard',
        element:<Leaderboard/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      }

    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
