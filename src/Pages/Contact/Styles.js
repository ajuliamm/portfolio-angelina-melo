import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    padding: 50px 0;
    
    width: 100%;
    justify-items: center;
    grid-template-areas: "img"
                        "Infos";
    grid-template-columns:100%;

    
    gap: 10px;
    @media (min-width:640px) {
        grid-template-areas: "Infos img";
        gap: 3vw;
        align-items: center;  
        grid-template-columns:60% 40%;
 
    
                        
    }
    @media (min-width:990px) {
        gap: 5vw;
    }
    
`;

export const Img = styled.img`
    grid-area: img;
    width: 200px;
    align-self: center;
    @media (min-width:640px) {
        justify-self: center;
    }
    
`;

export const Div = styled.div`
    grid-area: Infos;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 6vw;

    @media (min-width:640px) {
        justify-self: start;
    }
    
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 2.0rem;
    color: #71559A ;
    

`;


export const Text1 = styled.p`
    font-size: 1.4rem;
    font-family: 'Jura', sans-serif;
    -webkit-text-stroke-width: .3px;
    -webkit-text-stroke-color: #000;
    ;

`;

export const Text2 = styled.p`

    font-family: 'Jura', sans-serif;
    font-size: 1.8rem;
    margin-top: 5px;
`;

export const Line = styled.hr`

    background: #71559A ;
    height: 2px;
    border: none;
`;
export const IconLink = styled.a`
    

`;

export const Icon = styled.img`
    width: 70px;

`;
export const DivIcons =  styled.div`
    display: flex;
    gap:30px;
    margin-top: 50px;
`;
