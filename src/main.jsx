import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import NotFound from './routes/NotFound.jsx'
import Posts from './routes/Posts.jsx'
import Post, { loader as postLoader } from './routes/Post.jsx'
import PostIndex, { loader as postsLoader } from './routes/PostIndex.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,  // Outletとして表示する必要がなければこちら
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // {
      //   path: '*',
      //   element: <NotFound />
      // },
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
            errorElement: <NotFound />
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
