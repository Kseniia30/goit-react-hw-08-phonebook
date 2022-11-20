import { UserMenu } from "components/Auth/UserMenu"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { tokenInfo } from "redux/authorization/selectors"
import {LayoutBox, LayoutMainBox, LayoutList, LayoutItem, LayoutNavLink, BgImg} from "./Pages.styled"

export const Layout = () => {
    const token = useSelector(tokenInfo)

    return (
        <LayoutBox>
            <LayoutMainBox>
                {token ? (<>
                    <LayoutList>
                        <LayoutItem><LayoutNavLink to="/" >Add contact</LayoutNavLink></LayoutItem>
                        <LayoutItem><LayoutNavLink to="/contacts">Phonebook</LayoutNavLink></LayoutItem>
                    </LayoutList>
                    <UserMenu/>
                </>) : 
                    (<LayoutList>
                        <LayoutItem><LayoutNavLink to="/login">Log in</LayoutNavLink></LayoutItem>
                        <LayoutItem><LayoutNavLink to="/signup">sign up</LayoutNavLink></LayoutItem>
                    </LayoutList>)}
                <Outlet/>
            </LayoutMainBox>
            <BgImg src="https://cdn3.iconfinder.com/data/icons/mobile-apps-24/105/23-512.png" alt="adding contacts"/>
        </LayoutBox>
    )
}

