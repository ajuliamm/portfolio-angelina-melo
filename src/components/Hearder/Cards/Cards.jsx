import React from "react";
import Foto from "../../../assets/Picture2.png"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Img ,Div, Title, Text1, Text2, Icon, Line, Link } from "./Styles";

const CardProject = ({project}) => {
   
    return(
        <Container>
            <Div className="img">
                <Img src={project.img}/>
            </Div>
            <Div className="text">
                
                <Title>{project.name}</Title>
                
                <Text2 color={project.color} href={project.website} target="_blank">VISITE O WEBSITE</Text2>
                <Line color={project.color}/>

                <Link href={project.repository} target="_blank"><Icon className="bi bi-github"></Icon></Link>
            </Div>
            
        </Container>
    )
}
export default CardProject;