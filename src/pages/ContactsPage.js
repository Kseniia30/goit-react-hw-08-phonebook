import { ContactList } from "components/ContactList/ContactList"
import {PagesToptext} from "./Pages.styled"

const ContactPage = () => {
    return (<>
        <PagesToptext>Contact List</PagesToptext>
        <ContactList/>
    </>)
}

export default ContactPage