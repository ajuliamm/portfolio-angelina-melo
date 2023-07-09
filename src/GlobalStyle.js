import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: boder-box;
    }
    body{
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: all 0.25s linear;
        font-family: 'Inter', sans-serif;
        
    }
    
    html{
        font-size: 62.5%;

        @media (min-width:1200px) {
        font-size: 80%;
                        
        }
    }

`;