import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    height: calc(100vh - 70px);
    width: 100%;
    justify-items: center;
    grid-template-areas: "img"
                        "Infos";
    
    gap: 10px;
    grid-template-columns:100%;

    
    @media (min-width:640px) {
        grid-template-areas: "Infos img";
        gap: 3vw;
        align-items: center;   
        grid-template-columns:50% 50%;

    
                        
    }
    @media (min-width:990px) {
        gap: 10vw;
    }
    
`;

export const Img = styled.img`
    grid-area: img;
    width: 300px;
    align-self: center;
    @media (min-width:640px) {
        justify-self: start;
    }
    @media (min-width:1200px) {
        width: 450px;
                        
    }
`;

export const Div = styled.div`
    grid-area: Infos;
    @media (min-width:640px) {
        justify-self: end;
    }
    
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 4.0rem;
    letter-spacing: -2.2px;

`;

export const Subtitle = styled.h3`
    font-weight: 700;
    font-size: 2.5rem;
`;

export const Text1 = styled.p`
    font-size: 1.6rem;
    color:#FFDE59;
    font-family: 'Jura', sans-serif;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: #000;
    ;

`;

export const Text2 = styled.p`
    color: #695F5F;
    font-family: 'Jura', sans-serif;
    font-size: 1.7rem;
    margin-top: 5px;
`;
