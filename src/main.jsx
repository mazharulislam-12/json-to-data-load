import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentsDetails from './components/CommentDetails/CommentsDetails.jsx';
import ErroorPage from './components/ErrorPage/ErroorPage.jsx';
import Todos from './components/Todos/Todos.jsx';
import TodoDetails from './components/TodoDetails.jsx/TodoDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErroorPage></ErroorPage>,
    
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }, 
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/comment',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: '/comment/:commentId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.CommentId}`),
        element: <CommentsDetails></CommentsDetails>

      },
      {
        path: '/todos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos'),
        element: <Todos></Todos>
      },
      {
        path: '/todo/:todoId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        element: <TodoDetails></TodoDetails>
      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
