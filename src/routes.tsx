import { lazy } from "react";
import {
  HOME_ROUTE,
  PROFILE_ROUTE,
  SETTINGS_ROUTE,
  WORKS_ROUTE,
  REGIONS_ROUTE,
  CHATS,
  ACTIVITIES_ROUTE,
} from "./consts/routes-const";

const Profile = lazy(() => import("./pages/Profile/Profile"));
const Home = lazy(() => import("./pages/Home/Home"));
const Regions = lazy(() => import("./pages/Regions/Regions"));
const Works = lazy(() => import("./pages/Works/Works"));
const Activities = lazy(() => import("./pages/Activities/Activities"))
const Chats = lazy(() => import("./pages/Chat/Chat"));
const Settings = lazy(() => import("./pages/Settings/Settings"));


export const routes = [
  {
    path: PROFILE_ROUTE,
    Element: Profile,
    index: false,
  },
  {
    path: HOME_ROUTE,
    Element: Home,
    index: true,
  },

  {
    path: REGIONS_ROUTE,
    Element: Regions,
    index: false,
  },
  {
    path: WORKS_ROUTE,
    Element: Works,
    index: false,
  },
  {
    path: ACTIVITIES_ROUTE,
    Element: Activities,
    index: false,
  },
  {
    path: CHATS,
    Element: Chats,
    index: false,
  },
  {
    path: SETTINGS_ROUTE,
    Element: Settings,
    index: false,
  },
];

