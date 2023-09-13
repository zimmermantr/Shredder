import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Home/Homepage";
import Nutrition from "./pages/Nutrition/Nutrition";
import LogIn from "./pages/UserAuth/LogIn";
import SignUp from "./pages/UserAuth/SignUp";
import Survey from "./pages/Survey/Survey";
import UserInfo from "./pages/UserPage/UserInfo";


export const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <Homepage />
        },
        {

            path: "nutrition",
            element: <Nutrition />
        },
        {

            path: 'signup',
            element: <SignUp />
        },
        {
            path: 'login',
            element: <LogIn />
        },
        {
            path: 'user/survey/',
            element: <Survey />
        },
        {
            path: 'user/info/',
            element: <UserInfo />
        }



        
    ]
}

])
export default router;