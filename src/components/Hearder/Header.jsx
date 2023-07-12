import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HeaderContainer, H3, Navbar,  Link, Div, Button, Icon, Span } from "./Styles";

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
        <HeaderContainer color={theme === "light"? "#fff" : "#000"}>
            <H3>ANGELINA<Span>MELO</Span></H3>
                         
            <Navbar>             
                    <Link href="#" color={theme === "dark"? "#fff" : "#000"}>Home</Link>
                    <Link href="#about" color={theme === "dark"? "#fff" : "#000"}>Sobre mim</Link>
                    <Link href="#projects" color={theme === "dark"? "#fff" : "#000"}>Projetos</Link>
                    <Link href="#contact" color={theme === "dark"? "#fff" : "#000"}>Contato</Link>             
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