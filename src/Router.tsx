import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { routes } from "./routes";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from "./Layout/Layout";

const Router = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PrivateRoute>
          <Routes>
            <Route path="/" element={<Layout/>}>
              {routes.map(({ index, path, Element }) => (
                <Route
                  key={path}
                  index={index}
                  path={path}
                  element={<Element />}
                />
              ))}
            </Route>
          </Routes>
        </PrivateRoute>
      </Suspense>
    </>
  );
};

export default Router;
