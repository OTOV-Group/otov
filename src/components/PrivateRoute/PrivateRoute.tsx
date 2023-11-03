import React from 'react';
import {Navigate} from "react-router-dom";


interface IPrivateRoute {
    children: React.JSX.Element;
}
const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
    // if(!user) {
    //     return <Navigate to="/"/>
    // }

    return (children);
};

export default PrivateRoute;