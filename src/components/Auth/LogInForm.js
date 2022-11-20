import { useDispatch } from "react-redux"
import { onLogIn } from "redux/authorization/operations"

export const LogInForm = () => {
    const dispatch = useDispatch()

    
    const logIn = (evt) => {
        evt.preventDefault()
        const email = evt.target.elements.email.value
        const password = evt.target.elements.password.value
        dispatch(onLogIn({ email, password }))
        evt.target.reset()
    }

    return <form onSubmit={logIn}>
        <label>Email
            <input type="text" name="email" />
        </label>
        <label>Password
            <input type="text" name="password" />
        </label>
        <button type="submit">Log in</button>
    </form>
}