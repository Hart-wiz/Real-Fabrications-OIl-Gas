import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
// import Home from "./pages/Home.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import Cobel from "./pages/Cobel.jsx";
// import GwusCobel from "./pages/GwusCobel.jsx";
import CobelProject from "./pages/CobelProject.jsx";
import CobelCallOff from "./pages/CobelCallOff.jsx";
import CobelConstruction from "./pages/CobelConstruction.jsx";
import CobelShutdown from "./pages/CobelShutdown.jsx";
import CobelHse from "./pages/CobelHse.jsx";
// import GwusCobelProject from "./pages/GwusCobelProject.jsx";
// import GwusCobelConsult from "./pages/GwusCobelConsult.jsx";
// import GwusCobelAgency from "./pages/GwusCobelAgency.jsx";
// import GwusQatar from "./pages/GwusQatar.jsx";
// import GwusTrading from "./pages/GwusTrading.jsx";
// import GwusTradingOilProduct from "./pages/GwusTradingOilProduct.jsx";
// import GwusTradingbuilding from "./pages/GwusTradingbuilding.jsx";
// import GwusTradinggeneral from "./pages/GwusTradinggeneral.jsx";
// import GwusTradingstaff from "./pages/GwusTradingstaff.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
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
  // {
  //   path: "/gwuscobel/consult",
  //   element: <GwusCobelConsult />,
  // },
  // {
  //   path: "/gwuscobel/agency",
  //   element: <GwusCobelAgency />,
  // },
  // {
  //   path: "/gwusqatar",
  //   element: <GwusQatar />,
  // },
  // {
  //   path: "/gwustrading",
  //   element: <GwusTrading />,
  // },
  // {
  //   path: "/gwustrading/oilproduct",
  //   element: <GwusTradingOilProduct />,
  // },
  // {
  //   path: "/gwustrading/building",
  //   element: <GwusTradingbuilding />,
  // },
  // {
  //   path: "/gwustrading/general",
  //   element: <GwusTradinggeneral />,
  // },
  // {
  //   path: "/gwustrading/staff",
  //   element: <GwusTradingstaff />,
  // },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
