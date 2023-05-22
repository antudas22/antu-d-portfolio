import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import FirstProject from "../components/Projects/FirstProject";
import SecondProject from "../components/Projects/SecondProject";
import ThirdProject from "../components/Projects/ThirdProject";

export const router = createBrowserRouter([
    {
        pth: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/firstproject',
                element: <FirstProject/>
            },
            {
                path: '/secondproject',
                element: <SecondProject/>
            },
            {
                path: '/thirdproject',
                element: <ThirdProject/>
            },
        ]
    }
])