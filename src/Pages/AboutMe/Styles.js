import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-areas: "img img"
                        "Infos Infos"
                        "tech tech"
                        "edu edu"
                        "lang lang";
    grid-template-columns:50% 50%;
    gap: 10px;
    @media (min-width:640px) {
    grid-template-areas: "img Infos"
                        "tech edu"
                        "tech lang";
    justify-items: center;
    align-items: center;   
    gap:1vw;
    }
    
                        
    
`;

export const Img = styled.img`
    grid-area: img;
    justify-self: center;
    width: 300px;
    @media (min-width:640px) {
        justify-self: end;
    }
    @media (min-width:990px) {
        padding-right: 5vw;
    }
    @media (min-width:1200px) {
        width: 450px;
                        
    }
`;

export const Div = styled.div`

    &.text{
        display: flex;
        flex-direction: column;
        grid-area: Infos;
        text-align: center;
        padding: 15px;
        gap: 5px;
        @media (min-width:640px) {
        padding: 0;
        padding-right: 60px;
        text-align: start;
        max-width: 560px;
        justify-self: start;

        }

    }
    &.tech{
        grid-area: tech;
        display: flex;
        gap: 5px;
        padding: 0 30px;
        justify-content: center;
        align-items:center;
        align-self: start;
        justify-self: end;
        padding-right: 12vw;
        flex-direction: column;
        

    }
    &.techs{
        
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
     
        justify-content: center;

 
        
        @media (min-width:640px) {
            flex-direction: column;
        }

    }
    &.education{
        position: relative;
        grid-area: edu;
        padding-left: 80px;
        align-self: start;      
        @media (min-width:640px) {
            justify-self: start;
            
    
        }

    }
    &.language{
        position:relative;
        grid-area: lang;
        padding-left: 80px;
        padding-right: 40px;

     
        @media (min-width:640px) {
            justify-self: start;
            
            align-self: start;
        }

    }
    
    
`;
export const DivTec = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 130px;
    height: 40px;
    
    border-radius: 10px;
    border: 1.5px solid #7F49DF;
    padding: 2px 5px;
    &:hover{
        background-color: #7F49DF;
    }
    @media (min-width: 430px) {
        width: 140px;
    }
    @media (min-width: 990px) {
        width: 160px;
    }
    
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 2.0rem;
    color: #71559A ;

`;
export const Title2 = styled.h2`
    font-weight: 700;
    font-size: 1.4rem;
    color:#9D8731;
    margin-bottom: 10px;

`;

export const Subtitle = styled.h3`
    font-weight: 500;
    font-size: 1.2rem;
    color: #71559A ;

`;

export const Text1 = styled.p`
    font-size: 1.5rem;
    font-family: 'Jura', sans-serif;
`;

export const Text2 = styled.p`   
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 5px;
    @media (min-width: 500px) {
        font-size: 1.4rem;
    }
`;
export const Icon = styled.img`
    width: 40px;
    &.node{
        width: 30px;
        padding: 5px 2px 0 6px;
    }
    &.js{
        width: 30px;
        
    }

`;
export const IconEdu = styled.i`
    color:#9D8731;
    font-size: 3.8rem;
    position: absolute;
    left: 30px;
    @media (min-width: 990px) {
        left: 20px;
    }
    
    
`;
export const Line = styled.hr`   
    height: 2px;
    background-color: #9D8731;
    border: none;

    &.edu{
        width: 155px;
        @media (min-width: 1200px) {
            width: auto;
        }
    }
    &.lang{
        width: 175px;
        @media (min-width: 1200px) {
            width: auto;
        }
    }
    
`;
