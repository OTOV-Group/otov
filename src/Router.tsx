import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import {publicRoutes} from "./routes";
import Loader from "./components/Loader/Loader";


const Router = () => {



    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        {publicRoutes.map(({ path, Element }) => (
                            <Route path={path} element={<Element/>}/>
                        ))}
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default Router;