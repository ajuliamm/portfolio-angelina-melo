import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgb(25, 29, 37, 35%);
    position: fixed;
    top: 0;
    background-color: ${props => props.color};
    z-index: 1;

`;


export const H3 = styled.h3`

    
`;

export const Span = styled.span`

    color: #9D8731;
`;
export const Navbar = styled.nav`
     display: flex;
     gap: 2vw;

  
    
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.color};
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
        opacity: .6;
        transition: opacity .2s linear;
    }
   
`;
export const Div = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: #555555;
    border-radius: 10px;
    
`;
export const Button = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    background-color: ${props => props.color};
   
&.light{
    border-radius: 10px;
    left: -30px;
}
&.dark{
    border-radius: 10px;
}
    
`;

export const Icon = styled.i`
    color:#A19CA9;
    font-size: 1.8rem;
    margin-top: 30px;

`;
