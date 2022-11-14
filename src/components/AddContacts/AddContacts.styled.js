import styled from "styled-components"

const AddForm = styled.form`
    width: 400px;
    text-align: center;
`

const AddLabel = styled.label`
    font-weight: 700;
    font-size: 25px;
    color: #2196f3;
}
`

const AddInput = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 0 5px;
    color: #de23fe;
    padding-left: 10px;
    border-color: #de23fe;
    margin-bottom: 10px;

    &:focus {
        outline-color: #2196f3
    }
`

const AddBTN = styled.button`
    padding: 10px 20px;
    border-radius: 0 5px;
    border: none;
    background-color: #2196f3;
    color: black;
    font-weight: 700;
`

export {AddForm, AddLabel, AddInput, AddBTN}