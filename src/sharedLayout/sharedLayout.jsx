import { Outlet } from 'react-router'
import { Header } from '../component/header'
export function SharedLayout() {

    return(
        <>
        <Header />
        <Outlet />
        </>
    )

}