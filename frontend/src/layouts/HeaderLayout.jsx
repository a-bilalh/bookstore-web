import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";


// HeaderLayout component to include Header on all pages
export default function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
