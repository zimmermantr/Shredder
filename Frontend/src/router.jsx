import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Home/Homepage";
import LogIn from "./pages/UserAuth/LogIn";
import SignUp from "./pages/UserAuth/SignUp";
import Survey from "./pages/Survey/Survey";

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
            path: 'signup',
            element: <SignUp />
        },
        {
            path: 'login',
            element: <LogIn />
        },
        {
            path: 'user_survey',
            element: <Survey />
        }



        
    ]
}

])
export default router;