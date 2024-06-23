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


const HOMEPAGE = import.meta.env.VITE_HOMEPAGE;
const WISHLIST = import.meta.env.VITE_WISHLIST;
const CART = import.meta.env.VITE_CART;
const SIGNUP = import.meta.env.VITE_SIGNUP;
const LOGIN = import.meta.env.VITE_LOGIN;
const MYLEARNING = import.meta.env.VITE_MYLEARNING;
const router=createBrowserRouter([{
  path:HOMEPAGE,element: <App></App>,
  children:[
    {path:HOMEPAGE,element: <CoursesCards></CoursesCards>,},
      {path:WISHLIST,element: <WishlistCards></WishlistCards>,},
      {path:CART,element: <CartCards/>,},
      {path:SIGNUP,element:<SignUp/>,},
      {path:LOGIN,element:<LogIn/>,},
      {path:MYLEARNING,element:<Mylearnings/>,},

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
