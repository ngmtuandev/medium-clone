import { createBrowserRouter } from "react-router-dom";
import { Home, UserProfile } from "@/pages";
import { RouterProvider } from "@/providers/router-provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/:username",
    element: <UserProfile></UserProfile>,
  },
]);

export const UserRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
