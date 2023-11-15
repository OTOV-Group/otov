import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import {privateRoutes, publicRoutes} from "./routes";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


const Router = () => {

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
<<<<<<< HEAD
                        {publicRoutes.map(({ index, path, Element }) => (
                            <Route index={index} key={path} path={path} element={<Element/>}/>
=======
                        
                        {publicRoutes.map(({ path, Element }) => (
                            <Route key={path} path={path} element={<Element/>}/>
>>>>>>> ffdc4f148b2be60777b02b5541c58f8c30d08533
                        ))}
                        {/*<PrivateRoute>*/}
                        {privateRoutes.map(({ index, path, Element }) => (
                            <Route index={index} key={path} path={path} element={<Element/>}/>
                        ))}
                        {/*</PrivateRoute>*/}
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default Router;