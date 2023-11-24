import React, { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface ILinks {
  icon: any;
  text: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  const handleSidebar = () => {
    setState((prevState) => !prevState);
  };

  const links: ILinks[] = [
    {
      icon: <RestartAltIcon />,
      text: "Main",
      link: "/",
    },
    {
      icon: <PersonIcon />,
      text: "Profile",
      link: "/profile",
    },
    {
      icon: <EngineeringIcon />,
      text: "Works",
      link: "/works",
    },
    {
      icon: <SettingsIcon />,
      text: "Settings",
      link: "/settings",
    },
  ];

  return (
    <Box>
      <Box
        style={{
          width: state ? "250px" : "50px",
          transition: "width 0.3s ease-in-out",
        }}
        border="1px solid #000"
        className="flex flex-col h-screen rounded-r-lg py-10 px-[7px] bg-green-100 gap-y-8"
      >
        <span
          onClick={handleSidebar}
          className="flex items-center justify-center"
          style={{
           
            background: "#fff",
            position: "relative",
            zIndex: 20,
            left: state ? "220px" : "21px",
            width: state ? "40px" : "40px",
            height: "40px",
            borderRadius: "50%",
            transition: "left 0.3s ease-in-out",
          }}
        >
          {state ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </span>
        {links.map(({ link, icon, text }) => (
          <Box
            style={{
              width: state ? "200px" : "35px",
              transition: "width 0.3s ease-in-out",
              background: "#138d80",
            }}
            className="rounded-lg text-white text-2xl overflow-hidden"
          >
            <Link className="flex items-center justify-evenly !px-2" to={link}>
              <span className="px-2">{icon}</span>
              <p
               style={{
                display : state ? '' : 'none',
              width: state ? "100px" : "0px",
              transition: "width 0.3s ease-in-out",
              background: "#138d80",
            }} >{text}</p>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
