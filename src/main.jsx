import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './OtherPages/Home.jsx';
import Blog from './OtherPages/Blog.jsx'
import Leaderboard from './OtherPages/Leaderboard.jsx';
import Trive from './OtherPages/Trive.jsx';
import FAQ from './OtherPages/FAQ.jsx';
import Login from './OtherPages/Login.jsx';
import Signup from './OtherPages/Signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    [<Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='trive' element={<Trive/>}/>
        <Route path='leaderboard' element={<Leaderboard/>}/>
        <Route path='faq' element={<FAQ/>}/>
    </Route>,
    <Route path='login' element={<Login/>}>
        
    </Route>,
    <Route path='signup' element={<Signup/>}>
        
    </Route>
    ]
    )
//   [
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'home',
//         element:<Home/>
//       },
//       {
//         path:'blog',
//         element:<Blog/>
//       },
//       {
//         path:'trive',
//         element:<Trive/>
//       },
//       {
//         path:'Leaderboard',
//         element:<Leaderboard/>
//       },
//       {
//         path:'faq',
//         element:<FAQ/>
//       }

//     ]
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   }
  
// ]

)

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
