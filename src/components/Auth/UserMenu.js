import { useDispatch, useSelector } from "react-redux"
import { onLogOut } from "redux/authorization/operations"
import { user } from "redux/authorization/selectors"
import { UserMenuBox, LogOutBTN, UserGteeting } from "./Auth.styled"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(user)
    return <UserMenuBox>
        <UserGteeting>Hello, {name.name}</UserGteeting>
        <LogOutBTN type="button" onClick={() => dispatch(onLogOut())}>Log out</LogOutBTN>
    </UserMenuBox>
}