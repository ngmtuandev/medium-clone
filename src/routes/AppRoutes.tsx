import {createBrowserRouter} from 'react-router-dom'
import { Home, Login, Signup, UserProfile } from '@/pages'
import { RouterProvider } from '@/providers/router-provider'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/:username',
        element: <UserProfile></UserProfile>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/sign-up',
        element: <Signup></Signup>
    }
])

export const AppRoutes = () => {
    return <RouterProvider router = {router} ></RouterProvider>
}