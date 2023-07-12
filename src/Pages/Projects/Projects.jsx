import React from "react";
import { Container,Div, Title} from "./Styles";
import CardProject from "../../components/Hearder/Cards/Cards";
import data from "../../data.json"

const Projects = () => {
   
    return(
        <Container id="projects">
            <Title>ÚLTIMOS PROJETOS</Title>
            <Div>
                {
                    data.map(project => (
                        <CardProject project={project} key={project.id}/> 

                    ))
                }
                               
            </Div>
            
        </Container>
    )
}
export default Projects;