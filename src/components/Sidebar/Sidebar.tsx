import React, { useContext, useRef } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import TelegramIcon from "@mui/icons-material/Telegram";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { useClickOutsideElement } from "../../hooks/useClickOutsideElement";
import {
  AppContext,
  changeSidebarState,
} from "../../ContextProvider/ContextProvider";

interface ILinks {
  icon: any;
  text: string;
  link: string;
  user: boolean;
}

const Sidebar: React.FC = () => {
  const { appState, setAppState } = useContext(AppContext);

  const ref = useRef<HTMLDivElement>(null!);
  useClickOutsideElement(ref, OutSideClick);

  function handleSidebar() {
    if (appState.sideOpen) {
      setAppState(changeSidebarState(false));
    } else {
      setAppState(changeSidebarState(true));
    }
  }
  function OutSideClick() {
    setAppState(changeSidebarState(false));
  }


//   user fake
    const isUser = false;
  const links: ILinks[] = [
    {
      icon: <RestartAltIcon />,
      text: "Main",
      link: "/",
      user: true,
    },
    {
      icon: <PersonIcon />,
      text: "Regions",
      link: "/regions",
      user: true,
    },
    {
      icon: <EngineeringIcon />,
      text: "Works",
      link: "/works",
      user: true,
    },
    {
      icon: <PendingActionsIcon />,
      text: "Activities",
      link: "/activities",
      user: true,
    },
    {
      icon: <TelegramIcon />,
      text: "Chats",
      link: "/chats",
      user: true,
    },
    {
      icon: <SettingsIcon />,
      text: "Settings",
      link: "/settings",
      user: true,
    },
    {
      icon: <NewReleasesIcon />,
      text: "About",
      link: "/about",
      user: true,
    },
  ];

  return (
    <Box
      ref={ref}
      style={{
        width: appState.sideOpen ? "250px" : "0px",
        transition: "width 0.3s ease-in-out",
        background: "#138d80",
        boxShadow: "4px 4px 8px 7px rgba(34, 60, 80, 0.2)",
        padding: appState.sideOpen ? "20px 10px" : "0px",
      }}
      className="relative flex flex-col h-[90vh] rounded-r-lg gap-y-6"
    >
      <span
        onClick={handleSidebar}
        className="flex items-center justify-center bg-green-100"
        style={{
          position: "absolute",
          top: "30px",
          right: appState.sideOpen ? "-30px" : "-35px",
          width: "40px",
          height: "40px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          transition: "left 0.3s ease-in-out",
          background: "#138d80",
        }}
      >
        <KeyboardArrowLeftIcon
          style={{
            transition: ".3s ease-in-out",
            transform: `rotate(${appState.sideOpen ? "0" : "180deg"})`,
          }}
        />
      </span>
      <Box
        style={{
          width: appState.sideOpen ? "130px" : "0px",
          transition: "0.3s ease-in-out",
          background: "#138d80",
        }}
        className="rounded-lg text-white text-2xl overflow-hidden mx-auto"
      >
        <Link className="flex flex-col" to={"/profile"}>
          <span>
            <AccountCircleIcon
              style={{
                fontSize: "110px",
              }}
            />
          </span>
          <p
            style={{
              display: appState.sideOpen ? "" : "none",
              width: appState.sideOpen ? "150px" : "0px",
              transition: "0.3s ease-in-out",
              background: "#138d80",
            }}
          >
            John Doe
          </p>
        </Link>
      </Box>
      <nav className="flex flex-col gap-y-4">
        {links.map(({ link, icon, text, user }) =>
          // Check if the link is for a user and if it is, check if user is true
          (user && isUser) || user ? (
            <Link
              to={link}
              style={{
                width: appState.sideOpen ? "100%" : "0px",
                transition: "0.3s ease-in-out",
                background: "#138d80",
              }}
              className="flex gap-x-4 rounded-lg text-white text-2xl overflow-hidden sidebar__link"
            >
              <span className="w">{icon}</span>
              <p
                style={{
                  display: appState.sideOpen ? "" : "none",
                  width: appState.sideOpen ? "max-content" : "0px",
                  transition: "width 0.3s ease-in-out",
                }}
              >
                {text}
              </p>
            </Link>
          ) : null
        )}
      </nav>
    </Box>
  );
};

export default Sidebar;
