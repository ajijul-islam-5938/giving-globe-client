import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import MyVolunteerRequest from "../pages/MyVolunteerRequest/MyVolunteerRequest";
import AddVolunteerRequest from "../pages/AddVolunteerPost/AddVolunteerRequest";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Update from "../pages/Update/Update";

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
        {
          path: "/needvolunteer",
          element : <PrivateRoute><NeedVolunteer/></PrivateRoute>
        },
        {
          path:"/managemypost",
          element : <PrivateRoute><ManageMyPost/></PrivateRoute>
        },
        {
          path:"/myvolunteerrequest",
          element: <PrivateRoute><MyVolunteerRequest/></PrivateRoute>
        },
        {
          path: "/addvolunteerpost",
          element : <PrivateRoute><AddVolunteerRequest/></PrivateRoute>
        },
        {
          path: "/postDetails/:id",
          element : <PrivateRoute><ViewDetails/></PrivateRoute>
        },
        {
          path: "/mypost/update/:id",
          element: <PrivateRoute><Update/></PrivateRoute>
        }
      ]
    },
    {
        path : "*",
        element : <NotFound/>
    }
  ]);

  export default router