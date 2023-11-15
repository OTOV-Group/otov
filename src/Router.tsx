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
                        {publicRoutes.map(({ path, Element, index }) => (
                            <Route index={index} key={path} path={path} element={<Element/>}/>
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