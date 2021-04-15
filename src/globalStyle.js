import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding : 0 ;
        box-sizing : border-box;
        font-family: Cormorant,sans-serif;
        overscroll-behavior-y:none;
        scroll-behavior: smooth;
    }


    html,body{
        overflow-x: hidden;
    }
`;

export default GlobalStyles;