import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Allusers from "../pages/Allusers";
import Generaluser from "../pages/Generaluser";
import Passwordreset from "../pages/Passwordreset";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
            {
               path : "allusers",
               element : <Allusers/>
            },
            {
                path : "generalusers",
                element : <Generaluser/>
            },
            {
                path : "reset-password",
                element : <Passwordreset/>
            },
            {
                path : "contact",
                element : <ContactUs/>
            },
            {
                path : "about",
                element : <AboutUs/>
            }
            
        ]
    }
])
export  default router