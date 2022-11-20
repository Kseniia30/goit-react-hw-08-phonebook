import { useDispatch } from "react-redux"
import { onSignUp } from "redux/authorization/operations"

export const SignUpForm = () => {
    const dispatch = useDispatch()

    const signUp = (evt) => {
        evt.preventDefault()
        const name = evt.target.elements.name.value
        const email = evt.target.elements.email.value
        const password = evt.target.elements.password.value
        dispatch(onSignUp({ name, email, password }))
        evt.target.reset()
    }

    return <form onSubmit={signUp}>
        <label>Name
            <input type="text" name="name" />
        </label>
        <label>Email
            <input type="text" name="email" />
        </label>
        <label>Password
            <input type="text" name="password" />
        </label>
        <button type="submit">Sign up</button>
    </form>
}