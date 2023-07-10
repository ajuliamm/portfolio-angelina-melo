import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid darkslategrey;

`;


export const H3 = styled.h3`

    
`;
export const Navbar = styled.nav`
  
   @media(min-width: 650px) {
    display: block;
   }
    
`;
export const Ul = styled.ul`
    display: flex;
    gap: 2vw;
`;
export const Li = styled.li`
    list-style: none;
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
