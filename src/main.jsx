import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About.jsx';
import Home from './Home.jsx';
import Admin from './Admin.jsx';
import Create from './Create.jsx';
import Contact from './Contact.jsx';
import Career from './Career.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/career",
        element: <Career></Career>
      }


    ]
  },
  {
    path: '/admin',
    element: <Admin></Admin>
  },
  {
    path: '/create',
    element: <Create></Create>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
