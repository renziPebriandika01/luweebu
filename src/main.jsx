import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Character from './page/Character.jsx';
import Schedule from './page/Schedule.jsx';
import Recomendation from './page/Recomendation.jsx';
import Upcoming from './page/Upcoming.jsx';
import Search from './page/Search.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/character",
    element: <Character/>,
  },
  {
    path: "/schedule",
    element: <Schedule/>,
  },
  {
    path: "/rekomendasi",
    element: <Recomendation/>,
  },
  {
    path: "/upcoming",
    element: <Upcoming/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
