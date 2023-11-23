import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import LoginModal from "../components/LoginModal/LoginModal";
import RegisterModal from "../components/RegisterModal/RegisterModal";
import ForgotModal from "../components/ForgotModal/ForgotModal";
import Sidebar from "../components/Sidebar/Sidebar";
const Layout = () => {
  return (
    <Box>
      <LoginModal />
      <RegisterModal />
      <ForgotModal />
      <Header />
      <Box display="flex" flexDirection="row" width="100%">
        <Sidebar/>
        <Box flex="1" p={4}>
          {/* Adjust padding and other styles as needed */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
