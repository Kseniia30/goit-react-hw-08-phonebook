import styled from "styled-components"
// USER
const UserMenuBox = styled.div`
    display: flex;
    margin-left: 40px;
    align-items: center;
`
const LogOutBTN = styled.button`
    padding: 10px 20px;
    border-radius: 0 5px;
    border: none;
    background-color: #2196f3;
    color: black;
    font-weight: 700;
    margin-left: 10px;
`
const UserGteeting = styled.h2`
    font-size: 20px;
    font-weight: 700;
`
export { UserMenuBox, LogOutBTN, UserGteeting }
