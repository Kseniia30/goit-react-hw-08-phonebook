import { useDispatch } from "react-redux"
import { onSignUp } from "redux/authorization/operations"
import {Form, Label, Input, BTN } from "../Form.styled"



const SignUpForm = () => {
    const dispatch = useDispatch()

    const signUp = (evt) => {
        evt.preventDefault()
        const name = evt.target.elements.name.value
        const email = evt.target.elements.email.value
        const password = evt.target.elements.password.value
        dispatch(onSignUp({ name, email, password }))
        evt.target.reset()
    }

    return <Form onSubmit={signUp}>
        <Label>Name
            <Input type="text" name="name" />
        </Label>
        <Label>Email
            <Input type="text" name="email" />
        </Label>
        <Label>Password
            <Input type="text" name="password" autoComplete="off"/>
        </Label>
        <BTN type="submit">Sign up</BTN>
    </Form>
}

export default SignUpForm