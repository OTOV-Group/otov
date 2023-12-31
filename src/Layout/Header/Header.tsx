import React, {useContext, useState} from 'react';
import Logo from "../../ui/Logo/Logo";
import Button from "../../ui/Button/Button";
import {Logout} from "@mui/icons-material";
import {Menu, MenuItem} from "@mui/material";
import ButtonMaterial from '@mui/material/Button';
import DarkModeButton from "../../ui/DarkMode/DarkModeButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AppContext, AuthSteps, changeStateAuthModals} from "../../ContextProvider/ContextProvider";
import { Link } from 'react-router-dom';

const Header = () => {

    const user = true;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { setAppState } = useContext(AppContext);
    const openModal = () =>{
        setAppState(changeStateAuthModals(AuthSteps.ShowLoginModal));
    }


    return (
        <header className="header h-[80px] border-b" style={{ background: "#138d80" }}>
            <div className="container flex items-center justify-between h-full">
                <div className="language">
                    <ButtonMaterial
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{
                            color: "black",
                            fontSize: "14px",
                            fontWeight: 700,
                            textTransform: "none",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            "&:hover": {
                                background: "#c9c9c9",
                            }
                        }}
                        onClick={handleClick}
                    >
                        Русский
                        <KeyboardArrowDownIcon
                            sx={{
                                transition: ".3s",
                                transform: `rotate(${open ? "180deg" : "0deg"})`
                            }}
                        />
                    </ButtonMaterial>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{
                            mt: "5px",
                            "ul": {
                                padding: "0"
                            }
                        }}
                    >
                        <MenuItem onClick={handleClose}>Узбекский</MenuItem>
                    </Menu>
                </div>
                <Link to={'/'} className="ml-auto">
                    <Logo/>
                </Link>
                <div className="ml-auto mr-10 flex">
                    <DarkModeButton/>
                </div>
                <div>
                    <Button
                        onClick={openModal}
                        label={user ? "Войти" : "Выйти"}
                        type="light"
                        rightIcon={
                                <div className="ml-[8px]">
                                    <Logout />
                                </div>
                            }
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;