import React from "react";
import { HeaderContainer, H3, Navbar, Ul, Li, Div, Button, Menu, Line, MenuHamb, MenuBg } from "./Styles";

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
        
            
            <Div>
                <Button className="light" onClick={()=>toggleTheme("light")}>L</Button>
                <Button className="dark" onClick={()=>toggleTheme("dark")}>D</Button>
            </Div>
        </HeaderContainer>
    )
}
export default Header;