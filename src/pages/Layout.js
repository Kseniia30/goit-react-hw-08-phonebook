import { Outlet } from "react-router-dom"
import {LayoutBox, LayoutMainBox, LayoutList, LayoutItem, LayoutNavLink, BgImg} from "./Pages.styled"

export const Layout = () => {
    return (
        <LayoutBox>
            <LayoutMainBox>
                <LayoutList>
                    <LayoutItem><LayoutNavLink to="/" end>Add contact</LayoutNavLink></LayoutItem>
                    <LayoutItem><LayoutNavLink to="/contacts">Phonebook</LayoutNavLink></LayoutItem>
                </LayoutList>
                <Outlet/>
            </LayoutMainBox>
            <BgImg src="https://cdn3.iconfinder.com/data/icons/mobile-apps-24/105/23-512.png" alt="adding contacts"/>
        </LayoutBox>
    )
}