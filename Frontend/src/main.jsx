import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WishlistCards from './routes/WishlistCards'
import CartCards from './routes/CartCards'
import CoursesCards from './routes/CoursesCards'
import SignUp from './routes/SignUp'
import LogIn from './routes/Login'
import Mylearnings from './routes/MyLearnings'
const router=createBrowserRouter([{
  path:"/",element: <App></App>,
  children:[
    {path:"/",element: <CoursesCards></CoursesCards>,},
      {path:"/Wishlist",element: <WishlistCards></WishlistCards>,},
      {path:"/Cart",element: <CartCards/>,},
      {path:"/signUp",element:<SignUp/>,},
      {path:"/logIn",element:<LogIn/>,},
      {path:"/myLearning",element:<Mylearnings/>,},

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
