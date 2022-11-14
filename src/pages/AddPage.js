import { AddContact } from "components/AddContacts/AddContact"
import {PagesToptext} from "./Pages.styled"

export const AddPage = () => {
    return (<>
        <PagesToptext>Please, enter  the name and the number</PagesToptext>
        <AddContact/>
    </>
    )
}