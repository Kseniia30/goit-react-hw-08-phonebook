import { useDispatch } from "react-redux"
import { onLogIn } from "redux/authorization/operations"
import {Form, Label, Input, BTN } from "../Form.styled"

const LogInForm = () => {
    const dispatch = useDispatch()

    const logIn = (evt) => {
        evt.preventDefault()
        const email = evt.target.elements.email.value
        const password = evt.target.elements.password.value
        dispatch(onLogIn({ email, password }))
        evt.target.reset()
    }

    return <Form onSubmit={logIn}>
        <Label>Email
            <Input type="text" name="email" />
        </Label>
        <Label>Password
            <Input type="text" name="password" autoComplete="off"/>
        </Label>
        <BTN type="submit">Log in</BTN>
    </Form>
}
export default LogInForm