import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import Categorynews from "../Pages/Categorynews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/category/:id",
        element: <Categorynews></Categorynews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2> Authentication page</h2>,
  },
  {
    path: "/news",
    element: <h2> News page</h2>,
  },
  {
    path: "/*",
    element: <h2> Error404 page</h2>,
  },
]);
export default router;
