import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

const Button = styled(Link)`
    white-space: nowrap;
    min-width : 100px ;
    max-width : 200px ;
    cursor: pointer;
    text-decoration : none;
    transition: 0.3s;
    display: flex ;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    color : #B1B1B1;
    font-size :20px;
    font-weight:bold;
    border: 1px solid grey;
    margin-top : 40px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform : translateY(-4px);
        background-color : #FFE7D9;
        border : 0px ;
        color : black;
    }

    @media screen and (max-width :400px){
        font-size:18px;
        margin-top:30px;


    }
`;

export default Button;