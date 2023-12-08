import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Signup, UserProfile, DetailPost } from "@/pages";
import { RouterProvider } from "@/providers/router-provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/user/:username",
    element: <UserProfile></UserProfile>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/sign-up",
    element: <Signup></Signup>,
  },
  {
    path: "/post/:slug",
    element: <DetailPost></DetailPost>,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
