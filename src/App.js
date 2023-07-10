import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./GlobalStyle";
import styled from "styled-components";
import Header from './components/Hearder/Header';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {

  const [ theme, setTheme ] = useState('dark');

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme />
          <Container>
            <Header theme={theme} setTheme={setTheme}/>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact theme={theme}/>
          </Container>
        </Fragment>
      </ThemeProvider>
    );
  }
  
  const Container = styled.div`
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
   
  
  `;
  
  const Title = styled.h1`
    font-size: 30px;
    margin-left: 15px;
    color: white;
  `;
  
  const ButtonChange = styled.button`
    width: 100px;
    height: 40px;
    margin-right: 20px;
    border-radius: 10px;
  `;
 

export default App;
