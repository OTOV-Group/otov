import React, {useEffect, useRef, useState} from "react";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useClickOutsideElement } from "../../hooks/useClickOutsideElement";

interface ILinks {
    icon: any;
    text: string;
    link: string;
}

const Sidebar: React.FC = () => {

  
    const [state, setState] = useState<boolean>(true);

    const ref = useRef<HTMLDivElement>(null!);
    useClickOutsideElement(ref, OutSideClick);

    const handleSidebar = () => {
        setState((prevState) => !prevState);
    };
    function OutSideClick(){

      setState(false);
    }

    const links: ILinks[] = [
        {
            icon: <RestartAltIcon/>,
            text: "Main",
            link: "/",
        },
        {
            icon: <PersonIcon/>,
            text: "Regions",
            link: "/regions",
        },
        {
            icon: <EngineeringIcon/>,
            text: "Works",
            link: "/works",
        }, 
        {
            icon: <PendingActionsIcon/>,
            text: "Activities",
            link: "/activities",
        },{
            icon: <TelegramIcon/>,
            text: "Chats",
            link: "/chats",
        },
        {
            icon: <SettingsIcon/>,
            text: "Settings",
            link: "/settings",
        },
    ];

    return (
        <Box
        ref={ref}
            style={{
                width: state ? "250px" : "0px",
                transition: "width 0.3s ease-in-out",
                background: "#138d80",
                boxShadow: "4px 4px 8px 7px rgba(34, 60, 80, 0.2)",
                padding: state ? "20px 10px" : "0px"
            }}
            className="relative flex flex-col h-screen rounded-r-lg gap-y-6"
        >
        <span
            onClick={handleSidebar}
            className="flex items-center justify-center bg-green-100"
            style={{
                position: "absolute",
                top: "30px",
                right: state ? "-30px" : "-35px",
                width: "40px",
                height: "40px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                transition: "left 0.3s ease-in-out",
                background: "#138d80",
            }}
        >
            <KeyboardArrowLeftIcon
                style={{transition: ".3s ease-in-out", transform: `rotate(${state ? "0" : "180deg"})`}}
            />
        </span>
            <Box
                style={{
                  width: state ? "130px" : "0px",
                    transition: "0.3s ease-in-out",
                    background: "#138d80",
                }}
                className="rounded-lg text-white text-2xl overflow-hidden mx-auto"
            >
                <Link className="flex flex-col" to={"/profile"} >
                  <span>
                      <AccountCircleIcon style={{
                          fontSize: "110px"
                      }}/>
                  </span>
                    <p
                        style={{
                            display: state ? '' : 'none',
                            width: state ? "150px" : "0px",
                            transition: "0.3s ease-in-out",
                            background: "#138d80",
                        }}
                    >John Doe</p>
                </Link>
            </Box>
            <nav className="flex flex-col gap-y-4">
                {links.map(({link, icon, text}) => (
                    <Link
                        to={link}
                        style={{
                            width: state ? "100%" : "0px",
                            transition: "0.3s ease-in-out",
                            background: "#138d80",
                        }}
                        className="flex gap-x-4 rounded-lg text-white text-2xl overflow-hidden sidebar__link"
                    >
                        <span className="w">{icon}</span>
                        <p
                            style={{
                                display: state ? '' : 'none',
                                width: state ? "max-content" : "0px",
                                transition: "width 0.3s ease-in-out",
                            }}
                        >{text}</p>
                    </Link>
                ))}
            </nav>
        </Box>
    );
};

export default Sidebar;
