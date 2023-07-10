import styled from "styled-components";

export const Container = styled.section`
    padding: 30px 0;
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction:column ;
    align-items: center;
    gap: 50px; 
    

    
    @media (min-width:640px) {      
                        
    }
    @media (min-width:990px) {
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
    display: flex ;
    flex-direction: column;
    gap: 80px;
@media (min-width:640px) {
        justify-self: end;
    }
    
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 2.0rem;
    color: #71559A ;

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
