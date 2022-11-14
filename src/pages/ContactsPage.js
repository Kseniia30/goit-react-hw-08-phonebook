import { ContactList } from "components/ContactList/ContactList"
import {PagesToptext} from "./Pages.styled"

export const ContactPage = () => {
    return (<>
        <PagesToptext>Contact List</PagesToptext>
        <ContactList/>
    </>)
}