import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home'
import Error from './pages/ErrorPage'
import Login from './pages/Login'
import Signup from './pages/SignUp';
import Profile from './pages/Profile';
import SingleFridge from './pages/SingleFridge';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }
      
      , {
        path: '/signup',
        element: <Signup />
      }
      , {
        path: '/profiles/:username',
        element: <Profile />
      }
      , {
        path: '/me',
        element: <Profile />
      }
      , {
        path: '/fridges/:fridgeId',
        element: <SingleFridge />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)