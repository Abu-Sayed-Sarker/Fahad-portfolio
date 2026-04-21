import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <h1>Main</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
]);
