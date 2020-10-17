import React from "react";
import "./App.css";
import GameContainer from "./containers/GameContainer";
import Logo from "./components/Logo";
import cyan from "@material-ui/core/colors/cyan";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import About from "./components/About";
import { Route } from 'react-router-dom'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: cyan,
    },
  });

  return (
    <>
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Logo />
        <GameContainer />
      </MuiThemeProvider>
    </div>
    <Route path='/about' component={About}/>
    </>
  );
}

export default App;
