import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  UserProfile,
  DetailPost,
  ProfileMePage,
} from "@/pages";
import { RouterProvider } from "@/providers/router-provider";
import path from "@/utils/path";
import CreatePost from "@/pages/CreatePost";
const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <Home></Home>,
  },
  {
    path: path.USER__PROFILE,
    element: <UserProfile></UserProfile>,
  },
  {
    path: path.LOGIN,
    element: <Login></Login>,
  },
  {
    path: path.SIGNUP,
    element: <Signup></Signup>,
  },
  {
    path: path.POST__DETAIL,
    element: <DetailPost></DetailPost>,
  },
  {
    path: path.CREATE_POST,
    element: <CreatePost></CreatePost>,
  },
  {
    path: path.INFO_ME,
    element: <ProfileMePage></ProfileMePage>,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
