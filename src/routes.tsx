import {lazy} from "react";
import {HOME_ROUTE, PROFILE_ROUTE, SETTINGS_ROUTE, WORKS_ROUTE} from "./consts/routes-const";

const Home = lazy(() => import("./pages/Home/Home"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Works = lazy(() => import("./pages/Works/Works"))
const Settings = lazy(() => import("./pages/Settings/Settings"))

const routes = [
    {
        path: HOME_ROUTE,
        Element: Home,
        index: true
    },
    {
        path: PROFILE_ROUTE,
        Element: Profile,
        index: false
    },
    {
        path: WORKS_ROUTE,
        Element: Works,
        index: true
    },
    {
        path: SETTINGS_ROUTE,
        Element: Settings,
        index: false
    },
]



export { routes }