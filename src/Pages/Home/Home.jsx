import React from "react";
import Foto from "../../assets/Ellipse 44.svg"
import { Container, Img ,Div, Title, Subtitle, Text1, Text2 } from "./Styles";

const Home = () => {
   
    return(
        <Container id="#">
            <Img src={Foto}/>
            <Div>
                <Text1>Hello World! Eu sou...</Text1>
                <Title>ANGELINA MELO</Title>
                <Subtitle>desenvolvedora web</Subtitle>
                <Text2>FRONT END DEVELOPER</Text2>
            </Div>
            
        </Container>
    )
}
export default Home;