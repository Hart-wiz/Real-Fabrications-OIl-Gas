import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Thankyou from "./pages/Thankyou.jsx";
import Home from "./pages/Home.jsx";

import Construction from "./pages/Construction.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Engineering from "./pages/Engineering.jsx";
import MarineLogistics from "./pages/MarineLogistics.jsx";
import ManpowerProvision from "./pages/ManpowerProvision.jsx";
import TradingProduct from "./pages/TradingProduct.jsx";
import SafetyEquip from "./pages/SafetyEquip.jsx";

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
    path: "/construction",
    element: <Construction />,
  },
  {
    path: "/logistics",
    element: <MarineLogistics />,
  },
  {
    path: "/manpower",
    element: <ManpowerProvision />,
  },
  {
    path: "/tradingproduct",
    element: <TradingProduct />,
  },

  {
    path: "/safetyequipments",
    element: <SafetyEquip />,
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
