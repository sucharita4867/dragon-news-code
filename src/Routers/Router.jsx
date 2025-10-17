import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
