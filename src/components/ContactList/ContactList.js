import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "redux/operations"
import { getContacts, filteredContacts } from "redux/selectors"
import { findContact } from "redux/slice"
import { ContactListInput, ContactItem, DeleteBTN, NoContacts } from "./ContactsList.styled"
import Notiflix from 'notiflix';
import {Label } from "../Form.styled"

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filtered = useSelector(filteredContacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const changeFilter = (evt) => {
        dispatch(findContact(evt.target.value))
    }
    const filtering = () => {
        const normalizedFilter = filtered.toLowerCase();
        if (filtered.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            )
        } else {
            return contacts;
        }
    }
    return (
        <>
            <Label>Find contacts by name
                <ContactListInput
                    id="searchInput"
                    type="text"
                    name="name"
                    value={filtered}
                    onChange={changeFilter}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dashand spaces. For example Adrian, Jacob Mercer, Charlesde Batz de Castelmore d'Artagnan"
                    required/>
                </Label>
            {filtering().length !== 0 ?  
                (<ul>
                    {filtering().map(contact => {
                        return (<ContactItem key={contact.id}>{contact.name}: {contact.number}
                            <DeleteBTN type="button" onClick={() => { dispatch(deleteContact(contact.id)); Notiflix.Notify.failure(`Contact was deleted from contact-list`)}}>Delete contact</DeleteBTN>
                        </ContactItem>)
                    })}
                </ul>) :
                (<NoContacts>There is no contacts in your contact-list</NoContacts>)}
            
        </>
        
    )
}