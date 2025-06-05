import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Thankyou from "./pages/Thankyou.jsx";
import Home from "./pages/Home.jsx";
import CobelProject from "./pages/CobelProject.jsx";
import CobelCallOff from "./pages/CobelCallOff.jsx";
import Construction from "./pages/Construction.jsx";
import CobelShutdown from "./pages/CobelShutdown.jsx";
import CobelHse from "./pages/CobelHse.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Engineering from "./pages/Engineering.jsx";

const router = createBrowserRouter([
  {
    path: "/thankyou", // ⬅️ paths are lowercase by convention
    element: <Thankyou />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/engineering",
    element: <Engineering />,
  },
  {
    path: "/project",
    element: <CobelProject />,
  },
  {
    path: "/calloff",
    element: <CobelCallOff />,
  },
  {
    path: "/construction",
    element: <Construction />,
  },
  {
    path: "/shutdown",
    element: <CobelShutdown />,
  },
  {
    path: "/hse",
    element: <CobelHse />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
