import path from "path";
import {lazy} from "react";
import {HOME_ROUTE, PROFILE_ROUTE} from "./consts/routes-const";

const Home = lazy(() => import("./pages/Home/Home"))
const Profile = lazy(() => import("./pages/Profile/Profile"))

const publicRoutes = [
    {
        path: HOME_ROUTE,
        Element: Home
    },
]

const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        Element: Profile
    }
]

export { publicRoutes, privateRoutes }