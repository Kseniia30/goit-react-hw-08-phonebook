import { NavLink } from "react-router-dom"
import styled from "styled-components"


const LayoutBox = styled.div`
    display: flex;
`

const LayoutMainBox = styled.div`
    width: 50%;
`

const LayoutList = styled.ul`
    list-style: none;
    display: flex;
`

const LayoutItem = styled.li`
    :not(:last-child) {
        margin-right: 20px;
    }
`

const LayoutNavLink = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: orchid;

    &.active {
        text-decoration: underline;
        color: red;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #2196f3;
    }
`

const BgImg = styled.img`
    margin-left: 100px;
    margin-top: 20px
`

export const PagesToptext = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
    text-shadow: red 1px 1px 1px, red 2px 2px 1px;
`

export {LayoutBox, LayoutMainBox, LayoutList, LayoutItem, LayoutNavLink, BgImg}
