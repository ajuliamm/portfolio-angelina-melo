import styled from "styled-components";

export const Container = styled.section`

    background-color: rgb(29, 25, 37, 97%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px 0;
    gap: 20px;
    width: 330px;
    height: 620px;
    border-radius: 80px;
    border: 1px solid #555555;

    @media (min-width:650px) {
        flex-direction: row;
        width: 580px;
        height: 400px;
        gap: 20px;
        padding: 10px;

    }
    @media (min-width:990px) {
        flex-direction: row;
        width: 650px;
        height: 400px;
        gap: 30px;
        padding: 20px;

    }
    
`;

export const Icon = styled.i`
    color:#A19CA9;
    font-size: 2rem;
    &:hover{
        font-size: 2.5rem;
        transition: font-size .2s linear;
    }
    

`;
export const Line = styled.hr`
    background-color: ${props => props.color};
    border: none;
    height: 2px;

`;
export const Link = styled.a`
    margin-top: 40px;
    
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    align-self: center;
    border-radius: 80px;
    
`;

export const Div = styled.div`

    &.text{
        display: flex;
        flex-direction: column;
        gap: 8px;
            width: 235px;
        @media (min-width:640px) {
        
        }
    }

    &.img{
        width: 300px;
        height: 400px;
        border-radius: 80px;
    }
    
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 3.0rem;
    color: #fff;
    margin-bottom: 20px;
`;


export const Text1 = styled.p`
    font-size: 1.6rem;

    font-family: 'Jura', sans-serif;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: #000;
    ;

`;

export const Text2 = styled.a`
    color: ${props => props.color};
    font-family: 'Jura', sans-serif;
    font-size: 1.7rem;
    margin-top: 5px;
    text-decoration: none;
    &:hover{
        font-size: 2.1rem;
        transition: font-size .2s linear;
    }
    &:active{
        opacity: .8;
        transition: font-size .2s linear;
    }
`;
