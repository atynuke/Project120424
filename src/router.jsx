import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import {Settings} from "./Pages/Settings"
import { Users } from "./Pages/Users";
import { Admin } from "./Pages/Admin";
import { Login } from "./Pages/Login";




const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path: "/settings",
                element: <Settings/>
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "*",
                element: "Page not found"
            },
        ]

    }
    
])

export default router