import React from "react";
import Foto from "../../assets/Picture2.png"
import { Container, Img ,Div, Title, Text1, Text2 } from "./Styles";

const Contact = () => {
   
    return(
        <Container>
            <Img src={Foto}/>
            <Div>               
                <Title>CONTATOS</Title>
                <Text1>Tem um projeto empolgante com o qual precisa de ajuda?
                <br/>Envie-me um e-mail ou entre em contato comigo via mensagem instantânea!</Text1>
                
                <Text2>angelinajuliafmm@gmail.com</Text2>
            </Div>
            
        </Container>
    )
}
export default Contact;