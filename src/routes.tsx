import {lazy} from "react";
import {HOME_ROUTE, PROFILE_ROUTE} from "./consts/routes-const";

const Home = lazy(() => import("./pages/Home/Home"))
const Profile = lazy(() => import("./pages/Profile/Profile"))

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
    }
]



export { routes }