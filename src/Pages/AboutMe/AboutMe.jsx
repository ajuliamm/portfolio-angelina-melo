import React from "react";
import Avatar from "../../assets/avatar.png"
import { Container, Img , Line,Div, Icon, IconEdu, DivTec, Title, Subtitle, Text1, Text2, Title2 } from "./Styles";
import 'bootstrap-icons/font/bootstrap-icons.css';
const AboutMe = () => {
   
    return(
        <Container>
            <Img src={Avatar}/>
            <Div className="text">
                <Title>SOBRE MIM</Title>
                <Subtitle>Sou Angelina Melo,  desenvolvedora Web focada em Frontend</Subtitle>
                <Text1> Sou apaixonada por solucionar problemas e criar experiências online incríveis.  Meu objetivo é projetar e desenvolver sites e plataformas responsivas de alta qualidade, garantindo que meus clientes e usuários tenham a melhor experiência possível.</Text1>
            </Div>
            <Div className="tech">
                <Title2>TECNOLOGIAS</Title2>
                <Div className="techs">
                <DivTec>
                    <Icon className="js" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>   
                    <Text2>JAVASCRIPT</Text2>
                </DivTec>
                <DivTec>
                    <Icon src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"/>
                    <Text2>REACT</Text2>
                </DivTec>
                <DivTec>
                    <Icon src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"/> 
                    <Text2>HTML</Text2>
                </DivTec>
                <DivTec>
                    <Icon src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"/> 
                    <Text2>CSS</Text2>
                </DivTec>
                <DivTec>
                    <Icon className="node" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/>
                    <Text2>NODE</Text2>
                </DivTec>
                </Div>
            </Div>

            <Div className="education">
            <IconEdu className="bi bi-mortarboard-fill"> </IconEdu>

                <Title2>FORMAÇÃO</Title2>
                <Text2 >Desenvolvimento Web</Text2>
                <Line className="edu"/>
                <Text2>LABORATÓRIA</Text2>
            </Div>

            <Div className="language">
                <IconEdu className="bi bi-translate"> </IconEdu>
                <Title2>IDIOMAS</Title2>
                <Text2 >Inglês - B1 : Intermediário</Text2>
                <Line className="lang"/>
                <Text2>Português - Lingua Nativa</Text2>
            </Div>
            
        </Container>
    )
}
export default AboutMe;