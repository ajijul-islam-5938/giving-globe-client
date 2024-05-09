import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children : [
        {
            path: "/",
            element : <Home/>
        },
        {
            path : "/login",
            element : <Login/>
        },
        {
            path: "/register",
            element : <Register/>       
        },
      ]
    },
    {
        path : "*",
        element : <NotFound/>
    }
  ]);

  export default router