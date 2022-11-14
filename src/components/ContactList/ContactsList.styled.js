import styled from "styled-components"

const ContactListLabel = styled.label`
    font-weight: 700;
    font-size: 20px;
    color: #2196f3;
`
const ContactListInput = styled.input`
    height: 25px;
    border-radius: 0 5px;
    color: #de23fe;
    padding-left: 10px;
    border-color: #de23fe;
    margin-bottom: 10px;
    margin-left: 10px;

    &:focus {
        outline-color: #2196f3
    }
`

const ContactItem = styled.li`
    font-size: 20px;
`

const DeleteBTN = styled.button`
    padding: 5px 10px;
    border-radius: 0 5px;
    border: none;
    background-color: #2196f3;
    color: black;
    font-weight: 700;
    margin-left: 10px;
`

const NoContacts = styled.p`
    color: red;
    font-size: 20px;
`

export {ContactListLabel, ContactListInput, ContactItem, DeleteBTN, NoContacts}
