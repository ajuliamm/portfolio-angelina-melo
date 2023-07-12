import React from "react";
import Foto from "../../../assets/Picture2.png"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Img ,Div, Title, Text1, Text2, Icon, Line, Link, DivFront, DivBack } from "./Styles";

const CardProject = ({project}) => {
   
    return(
        <Container>
            <Div className="img">
                <DivFront>
                    <Img src={project.img}/>
                </DivFront>
                <DivBack color={project.color}>
                    <Text1>{project.description}</Text1>
                </DivBack>
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