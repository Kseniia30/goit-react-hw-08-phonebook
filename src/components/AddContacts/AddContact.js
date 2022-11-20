import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "redux/operations"
import { getContacts } from "redux/selectors"
import {Form, Label, Input, BTN } from "../Form.styled"
import Notiflix from 'notiflix';

export const AddContact = () => {
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    
    const submit = (evt) => {
        evt.preventDefault()
        const form = evt.target
        const name = form.elements.name.value
        const number = form.elements.number.value

        const contactsNames = contacts.map(contact => contact.name.toLowerCase().trim())
        if (contactsNames.includes(name.toLowerCase().trim())) {
                alert(`Sorry, ${name} is already in the phonebook`)
            }
            else {
            dispatch(addContact({ name, number }))
            Notiflix.Notify.success(`Contact ${name} was added to your contact-list`);
            }
        form.reset()
    }
    return (
        <Form onSubmit={submit}>
            <Label>Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
            </Label>
            <Label>Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required/>
            </Label>
            <BTN type="submit">Add contact</BTN>
        </Form>
    )
}

