import path from "path";
import {lazy} from "react";

const Home = lazy(() => import("./pages/Home/Home"))
const Profile = lazy(() => import("./pages/Profile/Profile"))

const publicRoutes = [
    {
        path: "/",
        Element: Home
    },
]

const privateRoutes = [
    {
        path: "/profile",
        Element: Profile
    }
]

export { publicRoutes, privateRoutes }