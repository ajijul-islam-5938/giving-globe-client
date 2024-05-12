import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const state = location.state;
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <Spinner className="mt-16 m-auto h-16 w-16 text-gray-900/50" />
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname} />
    }
    return children;


};

export default PrivateRoute;