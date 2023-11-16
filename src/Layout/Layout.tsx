import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import { Box } from '@mui/material';
import LoginModal from "../components/LoginModal/LoginModal"
import RegisterModal from '../components/RegisterModal/RegisterModal';
import ForgotModal from '../components/ForgotModal/ForgotModal';
const Layout = () => {
    return (
        <Box>
            <LoginModal/>
            <RegisterModal/>
            <ForgotModal/>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>
        </Box>
    );
};

export default Layout;