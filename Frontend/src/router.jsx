import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Home/Homepage";
import Nutrition from "./pages/Nutrition/Nutrition";

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
            path: "/nutrition",
            element: <Nutrition />
        },



        
    ]
}

])
export default router;