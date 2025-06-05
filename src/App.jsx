import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Thankyou from "./pages/Thankyou.jsx";
import Cobel from "./pages/Cobel.jsx";
import CobelProject from "./pages/CobelProject.jsx";
import CobelCallOff from "./pages/CobelCallOff.jsx";
import CobelConstruction from "./pages/CobelConstruction.jsx";
import CobelShutdown from "./pages/CobelShutdown.jsx";
import CobelHse from "./pages/CobelHse.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/thankyou", // ⬅️ paths are lowercase by convention
    element: <Thankyou />,
  },

  {
    path: "/",
    element: <Cobel />,
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
    element: <CobelConstruction />,
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
