import React from "react";
import Foto from "../../assets/Picture2.png"
import { Container, Img ,Div, Title, Text1, Text2, Line, Icon, DivIcons, IconLink } from "./Styles";
import MsgPurple from "../../assets/msg-purple.svg"
import MsgWhite from "../../assets/msg-white.svg"
import InPurple from "../../assets/link-purple.svg"
import InWhite from "../../assets/link-white.svg"
import GithubPurple from "../../assets/github-purple.svg"
import GithubWhite from "../../assets/github-white.svg"



const Contact = ({theme}) => {
   
    return(
        <Container>
            <Img src={Foto}/>
            <Div>               
                <Title>CONTATOS</Title>
                <Text1>Tem um projeto empolgante com o qual precisa de ajuda?
                <br/>Envie-me um e-mail ou entre em contato comigo via mensagem instantânea!</Text1>
                
                <Text2>angelinajuliafmm@gmail.com</Text2>
                <Line/>
                {theme === 'light' 
                ? <DivIcons>
                   <IconLink target="_blank" href="https://github.com/ajuliamm"> <Icon src={GithubPurple}/></IconLink>
                   <IconLink target="_blank" href="https://www.linkedin.com/in/angelinamelo/"> <Icon src={InPurple}/> </IconLink>  
                   <IconLink target="_blank" href=""> <Icon src={MsgPurple}/> </IconLink> 
                </DivIcons>
                : <DivIcons>
                   <IconLink target="_blank" href="https://github.com/ajuliamm"> <Icon src={GithubWhite}/></IconLink>                   
                   <IconLink target="_blank" href="https://www.linkedin.com/in/angelinamelo/"> <Icon src={InWhite}/> </IconLink>               
                   <IconLink target="_blank" href=""> <Icon src={MsgWhite}/> </IconLink>            
                   </DivIcons>
                }
            </Div>
            
        </Container>
    )
}
export default Contact;