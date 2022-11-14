import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "redux/operations"
import { getContacts } from "redux/selectors"
import { AddForm, AddLabel, AddInput, AddBTN } from "./AddContacts.styled"
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
        <AddForm onSubmit={submit}>
            <AddLabel>Name
                <AddInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
            </AddLabel>
            <AddLabel>Number
                <AddInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required/>
            </AddLabel>
            <AddBTN type="submit">Add contact</AddBTN>
        </AddForm>
    )
}

