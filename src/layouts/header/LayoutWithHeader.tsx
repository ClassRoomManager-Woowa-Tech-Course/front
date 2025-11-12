import Header from "./Header";
import {Outlet} from "react-router-dom";
export function LayoutWithHeader() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}