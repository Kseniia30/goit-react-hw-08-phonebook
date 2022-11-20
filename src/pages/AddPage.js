import { AddContact } from "components/AddContacts/AddContact"
import {PagesToptext} from "./Pages.styled"

const AddPage = () => {
    return (<>
        <PagesToptext>Please, enter  the name and the number</PagesToptext>
        <AddContact/>
    </>
    )
}
export default AddPage