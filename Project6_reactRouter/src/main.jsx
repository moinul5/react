import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  About,
  Contact_us,
  Github,
  githubInfoLoader,
  Home,
  User,
} from "./components/Index.js";

// const router =  createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact_us',
//         element: <Contact_us/>
//       },
//       {
//         path: '/github',
//         element: <Github/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact_us" element={<Contact_us />} />
      <Route path="/user/:userid" element={<User/>}/>
      <Route loader={githubInfoLoader} path="/github" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
