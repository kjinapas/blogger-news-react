import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Blog from './component/Blog.jsx'
import Article from './component/Article.jsx'
import All_blog from './component/All_blog.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Article_content from './component/Article_content.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/blog/:id",
    element:<Blog/>
  },
  {
    path:"/article/:id",
    element:<Article_content/>
  },
  {
    path:"/blogs",
    element:<All_blog/>
  },
  {
    path:"/blogs/article/:id",
    element:<All_blog/>
  },
  {
    path:"/blogs/blog/:id",
    element:<Blog/>
  }


]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>

   <RouterProvider router={router} />

    </ChakraProvider>

)
