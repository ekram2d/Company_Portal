import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Register from "../pages/Register/Register";

import Home from "../pages/Company/Home";
import NIDVerification from "../pages/Company/NIDVerification";
import NIDVerificationPending from "../pages/NIDVerificationPending";
import AllData from "../pages/Company/AllData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/services",
      //   element: <Services />,
      // },
      // {
      //   path: "/about-us",
      //   element: <AboutUs />,
      // },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/nid-verification",
        element: <NIDVerification />,
      },
      {
        path: "/nid-verification-pending",
        element: <NIDVerificationPending />,
      },
      {
        path: "/all-data",
        element: <AllData />,
      },
    ],
  },
]);

export default router;