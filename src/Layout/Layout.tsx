import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;