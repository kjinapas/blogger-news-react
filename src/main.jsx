import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Blog from './component/Blog.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/blog/:id",
    element:<Blog/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>

   <RouterProvider router={router} />

    </ChakraProvider>

)
