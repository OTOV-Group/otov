import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import { Box } from '@mui/material';
import LoginModal from "../components/LoginModal/LoginModal"
const Layout = () => {
    return (
        <Box>
            <LoginModal/>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>
        </Box>
    );
};

export default Layout;