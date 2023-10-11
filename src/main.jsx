import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeContextProvider from "./Context/DarkModeContext.jsx";
import ScrollContextProvider from "./Context/ScrollContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home/Index.jsx";
import Projects from "./Pages/Projects/Index.jsx";
import Roadmaps from "./Pages/Roadmaps/Index.jsx";
import About from "./Pages/About/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home active="Home" />,
  },
  {
    path: "/home",
    element: <Home active="Home" />,
  },
  {
    path: "/projects",
    element: <Projects active="Projects" />,
  },
  {
    path: "/roadmaps",
    element: <Roadmaps active="Roadmaps" />,
  },
  {
    path: "/about",
    element: <About active="About" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollContextProvider>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </ScrollContextProvider>
  </React.StrictMode>
);
