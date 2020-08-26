import React,{ useState } from "react";
import "./darkmode.css";
import {ThemeProvider,createGlobalStyle} from 'styled-components';

const GlobalStyle =createGlobalStyle`
body{
background-color: ${props => props.theme.mode === 'dark' ? '#031321' : 'white'};
}
`;
function Darkmode() {
    const [theme, settheme] = useState({mode:'light'});

    return (
        <ThemeProvider theme={theme}>
        
        <GlobalStyle />
      <div className="darkmode"
        onChange={(e) =>
          settheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
        }
      >
        <label className="switch">
          <input type="checkbox" className="checkbox" />
          <div class=""></div>
        </label>
      </div>
      </ThemeProvider>
    );
  
}

export default Darkmode;