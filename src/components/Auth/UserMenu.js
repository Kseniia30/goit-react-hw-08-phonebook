import { useDispatch, useSelector } from "react-redux"
import { onLogOut } from "redux/authorization/operations"
import { user } from "redux/authorization/selectors"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const name = useSelector(user)
    return <>
        <h2>Hello, {name.name}</h2>
        <button type="button" onClick={() => dispatch(onLogOut())}>Log out</button>
    </>
}