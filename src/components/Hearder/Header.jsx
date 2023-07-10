import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HeaderContainer, H3, Navbar, Ul, Li, Div, Button, Icon } from "./Styles";

const Header = ({theme, setTheme}) => {
    const toggleTheme = (themeChoose) => {
        if (themeChoose === "dark" ) {
          window.localStorage.setItem("theme", "dark");
          setTheme("dark");
        } else {
          window.localStorage.setItem("theme", "light");
          setTheme("light");
        }
      };
    return(
        <HeaderContainer>
            <H3>ANGELINAMELO</H3>
                         
            <Navbar>
                <Ul>
                    <Li>Home</Li>
                    <Li>Sobre mim</Li>
                    <Li>Projetos</Li>
                    <Li>Contato</Li>
                </Ul>
            </Navbar>
        
            {theme === 'light' 
            ?
            <Div>
                <Button  color='#7F49DF' className="light" onClick={()=>toggleTheme("light")}><Icon className="bi bi-sun-fill"></Icon></Button>
                <Button color='#555555'  className="dark" onClick={()=>toggleTheme("dark")}><Icon className="bi bi-moon"></Icon></Button>
            </Div>
            :
            <Div>
                <Button color='#555555'  className="light" onClick={()=>toggleTheme("light")}><Icon className="bi bi-sun"></Icon></Button>
                <Button color='#7F49DF' className="dark" onClick={()=>toggleTheme("dark")}><Icon className="bi bi-moon-fill"></Icon></Button>
            </Div>
            }
        </HeaderContainer>
    )
}
export default Header;