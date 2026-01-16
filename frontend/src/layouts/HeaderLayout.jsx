import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";



// HeaderLayout component to include Header in all pages inside this layout
export default function HeaderLayout( children, props ) {

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
