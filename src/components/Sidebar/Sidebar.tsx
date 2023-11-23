import React from 'react';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

interface ILinks {
  icon: any;
  text: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const links: ILinks[] = [
    {
      icon: <SettingsIcon/>,
      text: 'Profile',
      link: '/profile',
    },
    {
      icon: <SettingsIcon/>,
      text: 'Works',
      link: '/works',
    },
    {
      icon: <SettingsIcon/>,
      text: 'Sidebar',
      link: '/settings',
    },
  ];

  return (
    <Box width="250px" border="1px solid #000" className="flex flex-col h-screen rounded-r-lg py-10 px-5 bg-green-100 gap-y-8">
      {links.map(({ link, icon, text }) => (
        <Box style={{ background: "#138d80" }} width="200px" className="rounded-lg text-white text-2xl">
            <Link className="flex items-center justify-evenly" to={link}>
                <span>{icon}</span>
                <p>
                    {text}
                </p>
            </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
