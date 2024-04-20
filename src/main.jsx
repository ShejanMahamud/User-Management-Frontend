import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Update from "./components/Update";
import User from "./components/User";
import Home from "./Home";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/users',
    loader: ()=> fetch('http://localhost:5000/users'),
    element: <User></User>
  },
  {
    path: '/users/:id',
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);