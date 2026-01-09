import { Outlet } from 'react-router-dom';

/*
    MainLayout.jsx
    Layout component to include common layout elements across pages
*/
export default function MapLayout() {

    return (
        <>
            < Outlet />
        </>
    );
}