import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user?.email){
        return <Navigate to="/login" />
    }
    return children;


};

export default PrivateRoute;