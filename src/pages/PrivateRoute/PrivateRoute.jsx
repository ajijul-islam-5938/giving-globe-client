import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const state = location.state;
    const {user} = useContext(AuthContext);

    if(!user){
        return <Navigate to="/login" state={location.pathname} />
    }
    return children;


};

export default PrivateRoute;