import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
    {
        pth: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])