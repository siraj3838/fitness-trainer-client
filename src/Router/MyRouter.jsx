import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePages/Home";
import Trainer from "../Pages/Trainer/Trainer";
import Class from "../Pages/Classes/Class";
import Community from "../Pages/Community/Community";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import BeTrainerPage from "../Pages/Trainer/BeTrainerPage";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home> 
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer> 
            },
            {
                path: '/class',
                element: <Class></Class>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/beTrainerPage',
                element: <BeTrainerPage></BeTrainerPage>
            }
        ]
    }
])

export default MyRouter;