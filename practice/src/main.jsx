import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main_layout from "./layout/main_layout";
import Home from "./components/Home";
import About from "./components/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
